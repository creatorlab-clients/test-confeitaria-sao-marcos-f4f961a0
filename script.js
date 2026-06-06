/* ═══════════════════════════════════════════════════════════════
   template-pasticcerie-001 — Confeitaria São Marcos
   food-dessert scroll · single-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/pasticcerie-001/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // food-dessert — HARD

// ── Image fallback ────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w = img.naturalWidth  || 600;
  var h = img.naturalHeight || 600;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h
    + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="fbg" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#B85C38" stop-opacity="0.10"/>'
    + '<stop offset="100%" stop-color="#E8C47A" stop-opacity="0.06"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="url(#fbg)"/>'
    + '<text x="50%" y="50%" font-family="\'Source Sans 3\',sans-serif" font-size="14"'
    + ' font-weight="700" fill="#9C8070" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'imagem em breve')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Icons — stroke-width inline, 256 viewBox ────────
var PHOSPHOR_ICONS = {

  /* ─ Navigation / UI ─ */
  'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="128" cy="104" r="32"/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"/></svg>',

  'clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  'phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M164.39,145.34l-24.61,24.6a144.29,144.29,0,0,1-54.06-54.06l24.6-24.61a8,8,0,0,0,1.83-8.51L96.31,46.05a8,8,0,0,0-8.74-4.8A72.14,72.14,0,0,0,24,112c0,66.17,53.83,120,120,120a72.14,72.14,0,0,0,70.75-63.57,8,8,0,0,0-4.8-8.74l-36.72-15.84A8,8,0,0,0,164.39,145.34Z"/></svg>',

  'heart': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M128,224S24,168,24,98A54,54,0,0,1,78,44c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z"/></svg>',

  'tag': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M197.66,122.34l-72-72A8,8,0,0,0,120,48H48a8,8,0,0,0-8,8v72a8,8,0,0,0,2.34,5.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,197.66,122.34Z"/><circle cx="84" cy="84" r="8" fill="currentColor" stroke="none"/></svg>',

  /* ─ Brand / food ─ */
  'cookie': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M209.66,122.34a8,8,0,0,0-8-2,40,40,0,0,1-50-50,8,8,0,0,0-9.94-9.94,88,88,0,1,0,67.9,67.9A8,8,0,0,0,209.66,122.34Z"/><circle cx="116" cy="152" r="12" fill="currentColor" stroke="none"/><circle cx="152" cy="116" r="8" fill="currentColor" stroke="none"/><circle cx="92" cy="116" r="8" fill="currentColor" stroke="none"/></svg>',

  'leaf': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M216,40c0,120-88,176-88,176"/><path d="M40,144c20.29-20.29,44.07-30.65,68.07-30.65C131.81,113.35,155.82,120,180,98.32A104.06,104.06,0,0,0,216,40,104.06,104.06,0,0,0,40,144Z"/></svg>',

  'hands': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M80,120V72a24,24,0,0,1,48,0v48"/><path d="M128,104V56a24,24,0,0,1,48,0v68"/><path d="M80,120a24,24,0,0,0-48,0v16a96,96,0,0,0,192,0V104a24,24,0,0,0-48,0"/></svg>',

  /* ─ Ocasiões ─ */
  'cake': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M56,192V128a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v64"/><rect x="32" y="192" width="192" height="40" rx="8"/><path d="M88,120V96"/><path d="M128,120V96"/><path d="M168,120V96"/><path d="M80,96a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8"/></svg>',

  'rings': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="80" cy="128" r="56"/><circle cx="176" cy="128" r="56"/></svg>',

  'graduation-cap': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><polygon points="128,32 240,96 128,160 16,96"/><path d="M64,128v56a64,64,0,0,0,128,0V128"/><line x1="240" y1="96" x2="240" y2="152"/></svg>',

  'baby': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="128" cy="88" r="56"/><path d="M24,216a104,104,0,0,1,208,0"/></svg>',

  'briefcase': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><rect x="24" y="80" width="208" height="152" rx="8"/><path d="M168,80V64a16,16,0,0,0-16-16H104A16,16,0,0,0,88,64V80"/><line x1="24" y1="136" x2="232" y2="136"/></svg>',

  /* ─ CTA deco ─ */
  'cake-deco': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" stroke="none" width="100" height="100" aria-hidden="true"><path d="M232,192H224V128a16,16,0,0,0-16-16H136V96.63A28,28,0,1,0,108,96.85V112H48a16,16,0,0,0-16,16v64H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM128,64a12,12,0,1,1,12,12A12,12,0,0,1,128,64ZM48,128H208v17.38c-3.09,1.59-9.34,4.62-19,4.62-13.37,0-19.74-5.41-27.1-11.64C154.07,130.9,145.61,123,128,123s-26.07,7.9-33.9,15.36C86.74,144.59,80.37,150,67,150c-9.66,0-15.91-3-19-4.62Zm0,41.93c6.68,2.67,14.56,4.07,22.88,3.93C83.57,173.69,93.34,168,104,162.22c9.36-5.27,18.23-10.25,24-10.25s14.64,5,24,10.25c10.66,5.78,20.43,11.47,33.12,11.64,8.32.14,16.2-1.26,22.88-3.93V192H48Z"/></svg>',

  /* ─ Social ─ */
  'whatsapp': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M128,24A104,104,0,0,0,36.18,176.88L24.69,215.07a8,8,0,0,0,9.88,9.83l37.88-11.85A104,104,0,1,0,128,24Z"/><path d="M168.73,152c-3.27,6-7.94,10.5-14.14,13.07C144,169,134,168,120.27,160c-10.5-6-19.13-14-26.27-24C87.27,127.07,84,118,88,107.07c2.33-6,6.87-10.53,13-13.73"/><path d="M157.65,120.65l-24-6.32a8,8,0,0,0-8.24,2.57l-8,10.66a44,44,0,0,1-16.84-18.67l10.31-8.87a8,8,0,0,0,2.15-8.43l-7.34-23.36A8,8,0,0,0,98,72H80a8,8,0,0,0-8,8.27A96.09,96.09,0,0,0,168,176a8,8,0,0,0,8-8V150.31A8,8,0,0,0,157.65,120.65Z"/></svg>',

  'instagram': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="40"/><circle cx="180" cy="76" r="10" fill="currentColor" stroke="none"/></svg>'
};

(function () {
  'use strict';

  // ── Inject Phosphor icons ─────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ──────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ──────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile nav toggle ────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── IntersectionObserver — fade-up, stagger-card ─────────
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Scroll animation — canvas COVER mode ─────────────────
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx          = canvas.getContext('2d');
  var images       = [];
  var loaded       = 0;
  var currentFrame = 0;
  var pinEl        = section.querySelector('.scroll-anim-pin');

  function setupCanvas() {
    var dpr = window.devicePixelRatio || 1;
    var cw  = pinEl.clientWidth;
    var ch  = pinEl.clientHeight;
    canvas.width        = cw * dpr;
    canvas.height       = ch * dpr;
    canvas.style.width  = cw + 'px';
    canvas.style.height = ch + 'px';
    ctx.scale(dpr, dpr);
  }

  function renderFrame(img) {
    var cw = canvas.clientWidth;
    var ch = canvas.clientHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);  // COVER — obbligatorio
    var dw = iw * scale;
    var dh = ih * scale;
    var dx = (cw - dw) / 2;
    var dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, scrolled / (total || 1));
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img = new Image();
      img.onload = function () {
        loaded++;
        if (idx === 0 || loaded === 1) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      img.src = FRAME_PATH + FRAME_PREFIX
               + String(idx + 1).padStart(FRAME_PAD, '0') + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    setupCanvas();
    drawFrame(currentFrame);
  }, { passive: true });
  setupCanvas();

})();
