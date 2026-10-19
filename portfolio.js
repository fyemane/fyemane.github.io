(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.site-header');
  const progress = document.createElement('div');
  progress.className = 'reading-progress'; progress.setAttribute('aria-hidden', 'true');
  document.body.prepend(progress);
  let scheduled = false;
  function updateScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    header?.classList.toggle('scrolled', scrollY > 24); scheduled = false;
  }
  addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); } }, {passive:true});
  addEventListener('resize', updateScroll); updateScroll();
  const reveals = document.querySelectorAll('.project, .section-heading, .about-story, .interest-grid article, .career-entry, .qualification-grid article, .leadership-list article, .skills-grid article');
  if (!reduced.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold:0.08});
    reveals.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
    reduced.addEventListener('change', () => { if (reduced.matches) reveals.forEach(el => el.classList.add('visible')); });
  }
  const filters = document.querySelectorAll('[data-filter]');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    let count = 0;
    document.querySelectorAll('.project[data-category]').forEach(card => {
      const shown = button.dataset.filter === 'all' || card.dataset.category.split(' ').includes(button.dataset.filter);
      card.hidden = !shown; if (shown) { count++; card.classList.add('visible'); if (!reduced.matches) { card.classList.remove('filter-enter'); requestAnimationFrame(() => card.classList.add('filter-enter')); } }
    });
    document.querySelector('#filter-status').textContent = `${count} projects shown`;
  }));
  const dialog = document.querySelector('.image-dialog');
  let opener;
  function openImage(src, caption, button) {
    opener = button; dialog.querySelector('img').src = src; dialog.querySelector('img').alt = caption;
    dialog.querySelector('p').textContent = caption; dialog.showModal(); document.body.classList.add('preview-open');
  }
  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('.card-image img, .featured-image img').forEach(img => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'image-open';
      button.setAttribute('aria-label', `Enlarge: ${img.alt}`); img.replaceWith(button); button.append(img);
      const hint = document.createElement('span'); hint.className = 'image-hint'; hint.textContent = 'View image ↗'; button.append(hint);
      button.addEventListener('click', () => openImage(img.src, img.alt, button));
    });
    document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => openImage(button.dataset.image, button.dataset.caption, button)));
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { document.body.classList.remove('preview-open'); opener?.focus(); });
  }
  if (!reduced.matches) document.querySelector('.portrait')?.classList.add('photo-enter');
  const hero = document.querySelector('.hero-shell');
  if (hero && matchMedia('(pointer:fine)').matches) hero.addEventListener('pointermove', e => {
    if (reduced.matches) return;
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`); hero.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, {passive:true});
})();
