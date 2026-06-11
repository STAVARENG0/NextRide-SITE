:root {
  --bg: #123f44;
  --bg-2: #0d2e33;
  --card: rgba(13, 46, 51, 0.88);
  --card-strong: #10373d;
  --line: rgba(255, 255, 255, 0.14);
  --text: #fffaf0;
  --muted: #b8d2d0;
  --cyan: #56fff0;
  --cyan-soft: rgba(86, 255, 240, 0.16);
  --orange: #ff7a2f;
  --orange-2: #ffc078;
  --danger: #ff5d6c;
  --shadow: rgba(0, 0, 0, 0.38);
}

* {
  box-sizing: border-box;
}

html {
  color-scheme: dark;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100dvh;
  font-family: Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 15% 4%, rgba(86, 255, 240, 0.22), transparent 28rem),
    radial-gradient(circle at 85% 0%, rgba(255, 122, 47, 0.24), transparent 24rem),
    linear-gradient(140deg, #164a50 0%, var(--bg) 42%, var(--bg-2) 100%);
}

body.modal-open {
  overflow: hidden;
}

button,
a,
input {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

img {
  max-width: 100%;
}

.page-glow {
  position: fixed;
  inset: auto 8% 8% auto;
  width: 18rem;
  height: 18rem;
  border-radius: 999px;
  background: rgba(86, 255, 240, 0.12);
  filter: blur(55px);
  pointer-events: none;
}

.shell {
  width: min(1120px, calc(100% - 28px));
  margin: 0 auto;
  padding: 24px 0;
}

.hero-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 34px;
  background: linear-gradient(160deg, rgba(18, 63, 68, 0.9), rgba(9, 35, 38, 0.92));
  box-shadow: 0 24px 60px var(--shadow), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.hero-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, transparent, rgba(86, 255, 240, 0.06), transparent),
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.08), transparent 24rem);
  pointer-events: none;
}

.site-header,
.toolbar,
.status-line,
.grid,
.empty,
.footer {
  position: relative;
  z-index: 1;
}

.site-header {
  padding: 34px 22px 20px;
  text-align: center;
}

.logo {
  width: min(230px, 72vw);
  height: auto;
  display: block;
  margin: 0 auto 10px;
  filter: drop-shadow(0 14px 26px rgba(0, 0, 0, 0.24));
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--cyan);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.eyebrow::before,
.eyebrow::after {
  content: "";
  width: 22px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyan));
}

.eyebrow::after {
  background: linear-gradient(90deg, var(--cyan), transparent);
}

h1 {
  margin: 8px 0 8px;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(2.25rem, 7vw, 5.2rem);
  line-height: 0.9;
  letter-spacing: -0.05em;
}

.lead {
  max-width: 620px;
  margin: 0 auto;
  color: var(--muted);
  line-height: 1.7;
}

.social-row {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.social,
.btn,
.tab {
  border: 0;
  border-radius: 999px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.18s ease, filter 0.18s ease, border-color 0.18s ease, background 0.18s ease;
}

.social {
  padding: 9px 16px;
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.24);
}

.social:hover,
.btn:hover,
.tab:hover {
  transform: translateY(-1px);
  filter: brightness(1.06);
}

.facebook {
  background: linear-gradient(135deg, #1877f2, #67a8ff);
}

.whatsapp {
  background: linear-gradient(135deg, #16bd5a, #7affad);
  color: #062413;
}

.toolbar {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) auto;
  gap: 14px;
  align-items: end;
  padding: 18px 22px 8px;
}

.search-box span {
  display: block;
  margin: 0 0 7px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
}

.search-box input {
  width: 100%;
  min-height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  outline: 0;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  padding: 0 16px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.search-box input:focus {
  border-color: rgba(86, 255, 240, 0.6);
  box-shadow: 0 0 0 4px rgba(86, 255, 240, 0.12);
}

.filter-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.tab {
  min-height: 44px;
  padding: 0 14px;
  color: var(--text);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.tab.active {
  color: #092326;
  background: linear-gradient(135deg, var(--cyan), #eafffb);
  border-color: transparent;
  box-shadow: 0 0 22px rgba(86, 255, 240, 0.22);
}

.status-line {
  min-height: 24px;
  padding: 8px 24px 2px;
  color: var(--muted);
  font-size: 0.92rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  gap: 20px;
  padding: 18px 22px 24px;
}

.car-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(23, 73, 80, 0.94), rgba(11, 38, 42, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);
}

.car-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(86, 255, 240, 0.1), transparent 36%, rgba(255, 122, 47, 0.08));
  pointer-events: none;
}

.image-button {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.car-card img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: #092326;
}

.sold-ribbon {
  position: absolute;
  top: 13px;
  left: 13px;
  z-index: 2;
  border-radius: 999px;
  padding: 8px 14px;
  color: #ffffff;
  background: rgba(255, 93, 108, 0.92);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.card-body {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px 16px 14px;
}

.car-title {
  margin: 0 0 8px;
  color: var(--text);
  font-size: 1.02rem;
  line-height: 1.28;
  font-weight: 800;
}

.car-title button {
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  text-align: left;
  cursor: pointer;
  font-weight: inherit;
}

.car-title button:hover {
  color: var(--cyan);
}

.car-title.sold {
  color: #ffb5bd;
  text-decoration: line-through;
}

.meta {
  color: var(--muted);
  font-size: 0.86rem;
  line-height: 1.55;
}

.price {
  margin: 11px 0 14px;
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.card-actions {
  display: grid;
  gap: 9px;
  margin-top: auto;
}

.btn {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 16px;
}

.btn.primary {
  color: #082023;
  background: linear-gradient(135deg, var(--orange), var(--orange-2));
  box-shadow: 0 12px 26px rgba(255, 122, 47, 0.28);
}

.btn.ghost {
  color: var(--text);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.13);
}

.empty {
  margin: 0 22px 28px;
  padding: 26px;
  text-align: center;
  color: var(--muted);
  border: 1px dashed rgba(255, 255, 255, 0.16);
  border-radius: 24px;
}

.footer {
  padding: 0 22px 24px;
  color: var(--muted);
  text-align: center;
  font-size: 0.82rem;
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: none;
  place-items: center;
  padding: 16px;
}

.modal.open {
  display: grid;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  cursor: pointer;
}

.modal-panel {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.22fr) minmax(300px, 0.78fr);
  width: min(1050px, 100%);
  max-height: min(92dvh, 820px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 28px;
  background: linear-gradient(160deg, rgba(16, 55, 61, 0.98), rgba(8, 30, 33, 0.99));
  box-shadow: 0 28px 72px rgba(0, 0, 0, 0.55);
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 5;
  min-height: 40px;
  border: 0;
  border-radius: 999px;
  padding: 0 13px;
  color: var(--text);
  background: rgba(0, 0, 0, 0.46);
  cursor: pointer;
  font-weight: 800;
}

.gallery {
  padding: 12px;
  min-width: 0;
}

.hero-wrap {
  position: relative;
}

.hero-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  max-height: 66dvh;
  object-fit: cover;
  border-radius: 20px;
  background: #092326;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.48);
  font-size: 2rem;
  cursor: pointer;
  transform: translateY(-50%);
}

.gallery-nav.prev {
  left: 10px;
}

.gallery-nav.next {
  right: 10px;
}

.counter {
  position: absolute;
  left: 12px;
  top: 12px;
  border-radius: 999px;
  padding: 6px 10px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.5);
  font-size: 0.78rem;
  font-weight: 800;
}

.thumbs {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 10px 2px 0;
}

.thumb {
  flex: 0 0 auto;
  width: 80px;
  height: 58px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  padding: 0;
  background: transparent;
  opacity: 0.72;
  cursor: pointer;
}

.thumb.active {
  border-color: var(--cyan);
  opacity: 1;
  box-shadow: 0 0 0 3px rgba(86, 255, 240, 0.16);
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details {
  overflow: auto;
  padding: 30px 24px 24px;
}

.pill {
  display: inline-flex;
  margin-bottom: 12px;
  border-radius: 999px;
  padding: 7px 11px;
  color: #062d2d;
  background: linear-gradient(135deg, var(--cyan), #eafffb);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.pill.sold {
  color: #ffffff;
  background: var(--danger);
}

.details h2 {
  margin: 0 0 10px;
  font-size: clamp(1.35rem, 4vw, 2rem);
  line-height: 1.1;
}

.modal-meta {
  color: var(--muted);
  line-height: 1.55;
}

.modal-price {
  margin: 13px 0;
  color: #ffffff;
  font-size: 1.35rem;
  font-weight: 900;
}

.modal-desc {
  color: #e9f4f2;
  white-space: pre-wrap;
  line-height: 1.7;
}

.modal-actions {
  position: sticky;
  bottom: 0;
  display: grid;
  gap: 10px;
  margin-top: 16px;
  padding-top: 14px;
  background: linear-gradient(180deg, rgba(10, 38, 42, 0), rgba(10, 38, 42, 0.98) 35%);
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 18px;
  z-index: 60;
  display: none;
  max-width: min(92vw, 460px);
  transform: translateX(-50%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  padding: 12px 16px;
  color: #092326;
  background: linear-gradient(135deg, var(--cyan), #ffffff);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);
  font-weight: 800;
  text-align: center;
}

.toast.show {
  display: block;
}

@media (max-width: 860px) {
  .toolbar {
    grid-template-columns: 1fr;
  }

  .filter-tabs {
    justify-content: stretch;
  }

  .tab {
    flex: 1;
  }

  .modal-panel {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }

  .details {
    overflow: visible;
    padding-top: 12px;
  }
}

@media (max-width: 560px) {
  .shell {
    width: min(100% - 18px, 1120px);
    padding: 9px 0;
  }

  .hero-card {
    border-radius: 24px;
  }

  .site-header {
    padding: 26px 14px 16px;
  }

  .toolbar,
  .status-line,
  .grid {
    padding-left: 14px;
    padding-right: 14px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .modal {
    padding: 8px;
  }

  .modal-panel {
    border-radius: 20px;
    max-height: calc(100dvh - 16px);
  }

  .hero-image {
    max-height: 54dvh;
  }
}


/* ===== NextRide old-style customization: metallic logo + subtle car brand backdrop ===== */
body::before {
  content: "BMW  AUDI  TOYOTA  VW  MERCEDES  FORD  HONDA  NISSAN  HYUNDAI  KIA  PEUGEOT  RENAULT  OPEL  TESLA  VOLVO  MAZDA";
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8vw;
  font-weight: 900;
  font-size: clamp(1.8rem, 7vw, 6.8rem);
  line-height: 1.75;
  letter-spacing: .16em;
  text-align: center;
  color: rgba(255,255,255,.035);
  transform: rotate(-12deg) scale(1.08);
  pointer-events: none;
  user-select: none;
  z-index: -1;
}

.brand-wall {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 14px 24px;
  padding: 24px;
  opacity: .13;
  transform: rotate(-10deg) scale(1.13);
  pointer-events: none;
  user-select: none;
  mask-image: radial-gradient(circle at 50% 22%, transparent 0 12rem, black 18rem);
}

.brand-wall span {
  color: rgba(255,255,255,.62);
  font-size: clamp(.82rem, 2vw, 1.55rem);
  font-weight: 900;
  letter-spacing: .18em;
  text-transform: uppercase;
  text-shadow: 0 0 18px rgba(86,255,240,.25);
  white-space: nowrap;
}

.logo-frame {
  width: min(300px, 82vw);
  margin: 0 auto 14px;
  padding: 3px;
  border-radius: 32px;
  background:
    linear-gradient(135deg, #f7fbff 0%, #8e999f 15%, #ffffff 29%, #536167 48%, #dfe8eb 67%, #6f7a80 84%, #ffffff 100%);
  box-shadow:
    0 24px 42px rgba(0,0,0,.38),
    0 0 0 1px rgba(255,255,255,.12),
    0 0 36px rgba(86,255,240,.16),
    inset 0 1px 0 rgba(255,255,255,.85);
}

.logo-frame-inner {
  border-radius: 29px;
  padding: 16px 18px;
  background:
    radial-gradient(circle at 50% 0%, rgba(86,255,240,.22), transparent 56%),
    linear-gradient(155deg, rgba(14,53,57,.96), rgba(6,27,31,.98));
  border: 1px solid rgba(255,255,255,.16);
}

.logo-frame .logo {
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  filter: drop-shadow(0 12px 16px rgba(0,0,0,.28));
}

.availability-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  padding: 8px 13px;
  border-radius: 999px;
  color: var(--text);
  background: rgba(255,255,255,.075);
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
  font-size: .86rem;
  font-weight: 800;
}

.availability-chip strong {
  color: var(--cyan);
  font-size: 1.05rem;
}

.social-row .social {
  min-width: 160px;
  padding: 12px 20px;
  font-size: .95rem;
}

@media (max-width: 620px) {
  .brand-wall { opacity: .09; transform: rotate(-12deg) scale(1.28); }
  .logo-frame { border-radius: 26px; }
  .logo-frame-inner { border-radius: 23px; padding: 12px 14px; }
  .social-row .social { width: min(100%, 260px); }
}

/* ===== v3 adjustments: circular logo, subtle brand stickers, cleaner search ===== */
.site-header {
  padding: 28px 22px 18px;
}

.brand-stage {
  position: relative;
  display: grid;
  place-items: center;
  width: min(420px, 92vw);
  min-height: 242px;
  margin: 0 auto 10px;
  isolation: isolate;
}

.brand-stickers {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  user-select: none;
}

.brand-stickers span {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 92px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  padding: 7px 13px;
  color: rgba(255, 250, 240, 0.44);
  background:
    linear-gradient(135deg, rgba(255,255,255,.12), rgba(255,255,255,.035)),
    rgba(6, 27, 31, 0.34);
  box-shadow: 0 8px 24px rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.16);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: .09em;
  text-transform: uppercase;
  backdrop-filter: blur(2px);
}

.brand-stickers span:nth-child(1) { left: 3%; top: 16%; transform: rotate(-13deg); }
.brand-stickers span:nth-child(2) { right: 2%; top: 11%; transform: rotate(10deg); }
.brand-stickers span:nth-child(3) { left: 13%; top: 38%; transform: rotate(8deg); }
.brand-stickers span:nth-child(4) { right: 12%; top: 36%; transform: rotate(-9deg); }
.brand-stickers span:nth-child(5) { left: 0%; bottom: 22%; transform: rotate(13deg); }
.brand-stickers span:nth-child(6) { right: 0%; bottom: 22%; transform: rotate(-12deg); }
.brand-stickers span:nth-child(7) { left: 17%; bottom: 5%; transform: rotate(-5deg); }
.brand-stickers span:nth-child(8) { right: 16%; bottom: 4%; transform: rotate(6deg); }
.brand-stickers span:nth-child(9) { left: 35%; top: 2%; transform: rotate(3deg); }
.brand-stickers span:nth-child(10) { left: 38%; bottom: 0%; transform: rotate(-4deg); }
.brand-stickers span:nth-child(11) { left: 50%; top: 26%; transform: translateX(-50%) rotate(11deg); opacity: .6; }
.brand-stickers span:nth-child(12) { left: 50%; bottom: 28%; transform: translateX(-50%) rotate(-10deg); opacity: .54; }

.logo-orb {
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: clamp(172px, 34vw, 218px);
  height: clamp(172px, 34vw, 218px);
  border-radius: 50%;
  padding: 5px;
  background:
    conic-gradient(from 210deg, #eef5f7, #626d72, #ffffff, #7f8a91, #e8eff2, #4f5c63, #f9ffff),
    linear-gradient(135deg, #f8ffff, #6d777c 42%, #ffffff 62%, #49545a);
  box-shadow:
    0 26px 48px rgba(0,0,0,.42),
    0 0 0 1px rgba(255,255,255,.18),
    0 0 44px rgba(86,255,240,.2),
    inset 0 1px 0 rgba(255,255,255,.9);
}

.logo-orb::before {
  content: "";
  position: absolute;
  inset: -16px;
  z-index: -1;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(86,255,240,.2), transparent 68%);
  filter: blur(8px);
}

.logo-orb-inner {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.16);
  background:
    radial-gradient(circle at 50% 18%, rgba(86,255,240,.25), transparent 44%),
    linear-gradient(155deg, rgba(18,63,68,.98), rgba(5,24,28,.99));
}

.logo-orb .logo {
  width: 84%;
  max-width: none;
  margin: 0;
  filter: drop-shadow(0 14px 18px rgba(0,0,0,.32));
}

.hero-title {
  max-width: 720px;
  margin: 10px auto 4px;
  color: var(--text);
  font-size: clamp(1.25rem, 3.2vw, 2rem);
  line-height: 1.12;
  font-weight: 900;
  letter-spacing: -0.045em;
}

.lead {
  max-width: 560px;
  font-size: .98rem;
}

.availability-chip { display: none !important; }

.toolbar {
  width: min(calc(100% - 72px), 820px);
  grid-template-columns: minmax(220px, 530px) auto;
  gap: 12px;
  align-items: end;
  margin: 26px auto 6px;
  padding: 0;
}

.search-box input {
  min-height: 42px;
  border-radius: 999px;
}

.filter-tabs .tab {
  min-height: 40px;
  padding: 0 13px;
}

.status-line {
  display: none;
}

.grid {
  padding: 20px 38px 28px;
}

@media (max-width: 860px) {
  .brand-stage { min-height: 228px; }
  .toolbar {
    width: min(calc(100% - 34px), 820px);
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .brand-stage {
    width: 100%;
    min-height: 210px;
  }
  .brand-stickers span {
    min-width: 76px;
    padding: 6px 10px;
    font-size: .64rem;
    opacity: .76;
  }
  .logo-orb {
    width: 168px;
    height: 168px;
  }
  .site-header {
    padding-top: 22px;
  }
  .grid {
    padding-left: 18px;
    padding-right: 18px;
  }
}


/* ===== V5 final polish: correct circular logo, smaller header text, safer upload ===== */
.brand-wall {
  opacity: .08;
  mask-image: radial-gradient(circle at 50% 25%, transparent 0 7.5rem, black 15rem);
}
.brand-stage {
  min-height: 226px;
  margin-bottom: 0;
}
.brand-stickers {
  opacity: .82;
}
.brand-stickers span {
  opacity: .58;
  min-width: 84px;
  padding: 6px 12px;
  font-size: .68rem;
  letter-spacing: .1em;
  border-color: rgba(255,255,255,.14);
  color: rgba(255,250,240,.4);
}
.logo-orb {
  width: clamp(168px, 30vw, 210px);
  height: clamp(168px, 30vw, 210px);
  padding: 6px;
}
.logo-orb-inner {
  padding: 8px;
}
.logo-orb .logo {
  width: 94%;
  height: 94%;
  object-fit: contain;
  transform: translateY(-1px);
}
.brand-name {
  margin: -2px auto 8px;
  font-size: clamp(2.2rem, 5.8vw, 3.7rem);
  line-height: .9;
  font-weight: 900;
  letter-spacing: -.055em;
  color: #87e4f7;
  text-shadow:
    0 2px 0 rgba(0,0,0,.28),
    0 10px 24px rgba(0,0,0,.32),
    0 0 22px rgba(86,255,240,.18);
}
.hero-title {
  margin: 7px auto 4px;
  color: var(--text);
  font-family: Poppins, system-ui, sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: -.02em;
}
.lead {
  font-size: .95rem;
  line-height: 1.55;
}
.toolbar {
  width: min(calc(100% - 96px), 780px);
  margin-top: 24px;
}
.search-box span {
  margin-left: 6px;
}
.search-box input {
  min-height: 40px;
  font-size: .92rem;
}
.filter-tabs .tab {
  min-height: 39px;
  font-size: .9rem;
}
.grid {
  padding-top: 18px;
}
@media (max-width: 560px) {
  .brand-stage { min-height: 202px; }
  .logo-orb { width: 156px; height: 156px; }
  .brand-name { font-size: 2.35rem; }
  .toolbar { width: min(calc(100% - 28px), 780px); }
  .brand-stickers span { font-size: .58rem; min-width: 66px; }
}
