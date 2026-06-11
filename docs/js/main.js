(() => {
  'use strict';

  const config = window.NEXTRIDE_CONFIG || {};
  const apiBase = String(config.API_BASE_URL || '').replace(/\/+$/, '');
  const whatsappNumber = sanitizePhone(config.WHATSAPP_NUMBER || '353876342891');

  const grid = document.getElementById('cars');
  const statusLine = document.getElementById('statusLine');
  const availableCount = document.getElementById('availableCount');
  const emptyState = document.getElementById('emptyState');
  const searchInput = document.getElementById('searchInput');
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const year = document.getElementById('year');
  const toast = document.getElementById('toast');

  const modal = document.getElementById('modal');
  const heroImage = document.getElementById('heroImage');
  const thumbs = document.getElementById('thumbs');
  const galleryPrev = document.getElementById('galleryPrev');
  const galleryNext = document.getElementById('galleryNext');
  const imageCounter = document.getElementById('imageCounter');
  const modalStatus = document.getElementById('modalStatus');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalWhats = document.getElementById('modalWhats');
  const modalShare = document.getElementById('modalShare');
  const modalCall = document.getElementById('modalCall');

  const money = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const numberFmt = new Intl.NumberFormat('en-IE');

  let cars = [];
  let activeFilter = 'all';
  let galleryImages = [];
  let galleryIndex = 0;
  let activeCar = null;
  let lastFocused = null;
  let toastTimer = 0;

  year.textContent = new Date().getFullYear();

  function api(path) {
    return `${apiBase}/api${path}`;
  }

  function sanitizePhone(value) {
    return String(value || '').replace(/[^+\d]/g, '');
  }

  function text(value) {
    return String(value || '').trim();
  }

  function safeImage(src) {
    const fallback = 'logo.webp';
    const value = text(src);
    if (!value) return fallback;
    try {
      const url = new URL(value, window.location.href);
      if (url.protocol === 'http:' || url.protocol === 'https:') return url.href;
      if (url.protocol === window.location.protocol) return url.href;
    } catch (_error) {
      return fallback;
    }
    return fallback;
  }

  function normalizeCar(car) {
    const fotos = Array.isArray(car.fotos) ? car.fotos.filter(Boolean) : [];
    const sold = Boolean(car.sold) || text(car.status).toLowerCase() === 'sold';
    return {
      id: text(car.id) || crypto.randomUUID(),
      titulo: text(car.titulo),
      marca: text(car.marca),
      modelo: text(car.modelo),
      ano: text(car.ano),
      preco: car.preco || '',
      km: car.km || '',
      contato: sanitizePhone(car.contato),
      desc: text(car.desc),
      foto: safeImage(car.foto),
      fotos: fotos.map(safeImage),
      sold,
      status: sold ? 'sold' : 'available',
      createdAt: car.createdAt || 0
    };
  }

  function carTitle(car) {
    return car.titulo || [car.marca, car.modelo, car.ano].filter(Boolean).join(' ') || 'Vehicle';
  }

  function formatPrice(value) {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? money.format(number) : 'Contact for price';
  }

  function formatKm(value) {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? `${numberFmt.format(number)} km` : '';
  }

  function metaFor(car) {
    return [car.ano ? `Year ${car.ano}` : '', formatKm(car.km), car.marca, car.modelo].filter(Boolean).join(' • ');
  }

  function carLink(car) {
    const url = new URL(window.location.href);
    url.searchParams.set('car', car.id);
    return url.toString();
  }

  function whatsappLink(car) {
    const title = carTitle(car);
    const message = `Hello! I am interested in the ${title}.\n${carLink(car)}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function filteredCars() {
    const query = text(searchInput.value).toLowerCase();
    return cars.filter((car) => {
      const statusOk = activeFilter === 'all' || car.status === activeFilter;
      const haystack = [car.titulo, car.marca, car.modelo, car.ano, car.desc].join(' ').toLowerCase();
      const searchOk = !query || haystack.includes(query);
      return statusOk && searchOk;
    });
  }

  function render() {
    const visible = filteredCars();
    grid.replaceChildren();
    const available = cars.filter((car) => !car.sold).length;
    const sold = cars.length - available;
    if (availableCount) availableCount.textContent = String(available);
    statusLine.textContent = `${visible.length} vehicle${visible.length === 1 ? '' : 's'} found • ${available} available • ${sold} sold`;
    emptyState.hidden = visible.length !== 0;

    for (const car of visible) {
      grid.appendChild(renderCard(car));
    }
  }

  function renderCard(car) {
    const article = document.createElement('article');
    article.className = 'car-card';

    if (car.sold) {
      const ribbon = document.createElement('div');
      ribbon.className = 'sold-ribbon';
      ribbon.textContent = 'SOLD';
      article.appendChild(ribbon);
    }

    const imageButton = document.createElement('button');
    imageButton.className = 'image-button';
    imageButton.type = 'button';
    imageButton.setAttribute('aria-label', `Open ${carTitle(car)}`);
    imageButton.addEventListener('click', () => openModal(car, true));

    const img = document.createElement('img');
    img.src = car.foto || 'logo.png';
    img.alt = carTitle(car);
    img.loading = 'lazy';
    img.decoding = 'async';
    imageButton.appendChild(img);
    article.appendChild(imageButton);

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h2');
    title.className = `car-title${car.sold ? ' sold' : ''}`;
    const titleButton = document.createElement('button');
    titleButton.type = 'button';
    titleButton.textContent = carTitle(car);
    titleButton.addEventListener('click', () => openModal(car, true));
    title.appendChild(titleButton);
    body.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = metaFor(car);
    body.appendChild(meta);

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = formatPrice(car.preco);
    body.appendChild(price);

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const whats = document.createElement('a');
    whats.className = 'btn primary';
    whats.href = whatsappLink(car);
    whats.target = '_blank';
    whats.rel = 'noopener noreferrer';
    whats.textContent = 'WhatsApp';
    actions.appendChild(whats);

    const share = document.createElement('button');
    share.className = 'btn ghost';
    share.type = 'button';
    share.textContent = 'Share';
    share.addEventListener('click', () => shareCar(car));
    actions.appendChild(share);

    body.appendChild(actions);
    article.appendChild(body);
    return article;
  }

  function openModal(car, updateUrl) {
    lastFocused = document.activeElement;
    activeCar = car;
    galleryImages = [car.foto, ...car.fotos].filter(Boolean);
    if (!galleryImages.length) galleryImages = ['logo.webp'];
    galleryIndex = 0;

    modalStatus.textContent = car.sold ? 'Sold' : 'Available';
    modalStatus.classList.toggle('sold', car.sold);
    modalTitle.textContent = carTitle(car);
    modalMeta.textContent = metaFor(car);
    modalPrice.textContent = formatPrice(car.preco);
    modalDesc.textContent = car.desc || 'Contact us for more details.';
    modalWhats.href = whatsappLink(car);

    if (car.contato) {
      modalCall.hidden = false;
      modalCall.href = `tel:${car.contato}`;
    } else {
      modalCall.hidden = true;
      modalCall.removeAttribute('href');
    }

    modalShare.onclick = () => shareCar(car);
    renderGallery();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.querySelector('.modal-close').focus({ preventScroll: true });

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('car', car.id);
      history.pushState({ car: car.id }, '', url);
    }
  }

  function closeModal(updateUrl = true) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    activeCar = null;
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.delete('car');
      history.pushState({}, '', url);
    }
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus({ preventScroll: true });
  }

  function renderGallery() {
    showGalleryImage(0);
    thumbs.replaceChildren();
    galleryImages.forEach((src, index) => {
      const button = document.createElement('button');
      button.className = `thumb${index === galleryIndex ? ' active' : ''}`;
      button.type = 'button';
      button.setAttribute('aria-label', `Photo ${index + 1}`);
      button.addEventListener('click', () => showGalleryImage(index));

      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.loading = 'lazy';
      button.appendChild(img);
      thumbs.appendChild(button);
    });
  }

  function showGalleryImage(index) {
    if (!galleryImages.length) return;
    galleryIndex = (index + galleryImages.length) % galleryImages.length;
    heroImage.src = galleryImages[galleryIndex];
    heroImage.alt = activeCar ? carTitle(activeCar) : 'Car photo';
    imageCounter.textContent = `${galleryIndex + 1}/${galleryImages.length}`;
    Array.from(thumbs.children).forEach((item, itemIndex) => item.classList.toggle('active', itemIndex === galleryIndex));
  }

  async function shareCar(car) {
    const title = carTitle(car);
    const url = carLink(car);
    try {
      if (navigator.share) {
        await navigator.share({ title, text: `NextRide - ${title}`, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        showToast('Vehicle link copied.');
      } else {
        showToast(url);
      }
    } catch (_error) {
      showToast('Unable to share right now.');
    }
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  async function loadCars() {
    statusLine.textContent = 'Loading inventory...';
    const sources = [api('/cars'), `cars.json?v=${Date.now()}`];
    let lastError = null;

    for (const source of sources) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 4500);
        const response = await fetch(source, { cache: 'no-store', signal: controller.signal });
        clearTimeout(timer);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        cars = (Array.isArray(data) ? data : []).map(normalizeCar);
        render();
        openFromUrl();
        return;
      } catch (error) {
        lastError = error;
      }
    }

    console.error(lastError);
    statusLine.textContent = 'Unable to load inventory right now.';
    emptyState.hidden = false;
  }

  function openFromUrl() {
    const id = new URLSearchParams(window.location.search).get('car');
    if (!id) return;
    const car = cars.find((item) => item.id === id);
    if (car) openModal(car, false);
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activeFilter = tab.dataset.filter || 'all';
      tabs.forEach((item) => item.classList.toggle('active', item === tab));
      render();
    });
  });

  searchInput.addEventListener('input', render);
  galleryPrev.addEventListener('click', () => showGalleryImage(galleryIndex - 1));
  galleryNext.addEventListener('click', () => showGalleryImage(galleryIndex + 1));
  modal.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-close')) closeModal(true);
  });

  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('open')) return;
    if (event.key === 'Escape') closeModal(true);
    if (event.key === 'ArrowLeft') showGalleryImage(galleryIndex - 1);
    if (event.key === 'ArrowRight') showGalleryImage(galleryIndex + 1);
  });

  window.addEventListener('popstate', () => {
    const id = new URLSearchParams(window.location.search).get('car');
    if (!id && modal.classList.contains('open')) closeModal(false);
    if (id) {
      const car = cars.find((item) => item.id === id);
      if (car) openModal(car, false);
    }
  });

  loadCars();
})();
