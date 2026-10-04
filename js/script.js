const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Photo galleries ---------- */
// Event photos: hide any slot whose image file has not been added yet.
document.querySelectorAll('.event-grid .photo-card img').forEach(img => {
  const hide = () => { img.closest('.photo-card').hidden = true; };
  img.addEventListener('error', hide);
  if (img.complete && img.naturalWidth === 0) hide();
});

// Lightbox: click a photo to see the full image; arrows / keys move between photos in the same gallery.
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  let group = [], index = 0;

  const show = () => {
    const card = group[index].closest('.photo-card');
    const img = group[index].querySelector('img');
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    const cap = card.querySelector('figcaption');
    lbCaption.textContent = cap ? cap.textContent : '';
    prevBtn.hidden = nextBtn.hidden = group.length < 2;
  };
  const open = (btn) => {
    const grid = btn.closest('.photo-grid');
    group = [...grid.querySelectorAll('.photo-card:not([hidden]) .photo-btn')];
    index = group.indexOf(btn);
    show();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
  };
  const close = () => { lightbox.hidden = true; lbImg.src = ''; document.body.style.overflow = ''; };
  const step = (d) => { index = (index + d + group.length) % group.length; show(); };

  document.querySelectorAll('.photo-btn').forEach(btn => btn.addEventListener('click', () => open(btn)));
  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox || e.target.closest('.lightbox-close')) close(); });
  document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
}
