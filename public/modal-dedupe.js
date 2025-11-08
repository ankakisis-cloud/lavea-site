// LAVEA modal de-dupe & safe init
(function () {
  if (window.__laveaModalPatched) return;
  window.__laveaModalPatched = true;

  // 1) Оставляем только первый экземпляр модалки (по общим селекторам)
  // Поддержим самые частые варианты классов/атрибутов
  const selectors = [
    '[data-lavea-modal]',
    '.lavea-modal',
    '#contactModal',
    '[role="dialog"][aria-modal="true"]'
  ];

  function keepFirstAndRemoveRest() {
    const all = selectors.flatMap(sel => Array.from(document.querySelectorAll(sel)));
    if (!all.length) return;
    const first = all[0];

    // Помечаем «правильную» модалку
    first.setAttribute('data-lavea-modal', 'contact');

    // Удаляем строго дубликаты (те, что не first)
    all.slice(1).forEach(node => {
      if (node && node.parentNode) node.parentNode.removeChild(node);
    });
  }

  // Выполним сразу и при поздней подгрузке
  keepFirstAndRemoveRest();
  const obs = new MutationObserver(keepFirstAndRemoveRest);
  obs.observe(document.documentElement, { childList: true, subtree: true });

  // 2) Защита от повторной инициализации обработчиков
  // Делегируем клики по кнопкам «открыть» и «закрыть», но навешиваем один раз.
  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-open-modal="contact"], .js-open-contact');
    const closeBtn = e.target.closest('[data-close-modal], .js-close-contact, [data-modal-close]');

    const modal = document.querySelector('[data-lavea-modal="contact"]') ||
                  document.querySelector('.lavea-modal') ||
                  document.querySelector('#contactModal');

    if (!modal) return;

    if (openBtn) {
      e.preventDefault();
      modal.classList.add('is-open');
      modal.removeAttribute('aria-hidden');
    }

    if (closeBtn || (e.target === modal && modal.classList.contains('is-open'))) {
      // Закрываем «на всякий случай» все найденные модалки
      [modal, ...document.querySelectorAll('.lavea-modal, #contactModal, [data-lavea-modal]')].forEach(m => {
        m.classList.remove('is-open');
        m.setAttribute('aria-hidden', 'true');
      });
    }
  }, { capture: true });
})();
