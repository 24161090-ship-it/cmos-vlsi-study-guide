(() => {
  const dialog = document.querySelector('#source-documents');
  const feedback = document.querySelector('#source-feedback');
  const pendingLink = document.querySelector('#pending-source-link');
  const documents = new Map();
  const names = { textbook: 'giáo trình', solutions: 'tài liệu lời giải' };
  let pending = null;

  function refreshPendingLink() {
    const selected = pending && documents.get(pending.kind);
    pendingLink.hidden = !selected;
    if (selected) {
      pendingLink.href = selected.url + '#page=' + pending.page;
      pendingLink.textContent = 'Mở ' + names[pending.kind] + ' · trang PDF ' + pending.page;
    } else {
      pendingLink.removeAttribute('href');
    }
  }

  document.querySelector('#open-source-documents').addEventListener('click', () => {
    pending = null;
    refreshPendingLink();
    feedback.textContent = 'Chọn đúng phiên bản để số trang tham chiếu khớp tài liệu.';
    dialog.showModal();
  });

  for (const kind of Object.keys(names)) {
    const input = document.querySelector('#' + kind + '-file');
    const status = document.querySelector('#' + kind + '-status');
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file) return;
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        feedback.textContent = 'Vui lòng chọn một tệp PDF.';
        input.value = '';
        return;
      }
      const previous = documents.get(kind);
      if (previous) URL.revokeObjectURL(previous.url);
      documents.set(kind, { url: URL.createObjectURL(file) });
      status.textContent = 'Đã chọn ' + file.name;
      feedback.textContent = 'Đã sẵn sàng. Các liên kết sẽ mở PDF của bạn trong thẻ mới.';
      refreshPendingLink();
    });
  }

  document.querySelectorAll('a[data-document]').forEach(link => {
    link.addEventListener('click', event => {
      const kind = link.dataset.document;
      const page = Number(link.dataset.page);
      if (!names[kind] || !Number.isInteger(page) || page < 1) return;
      const selected = documents.get(kind);
      if (selected) {
        link.href = selected.url + '#page=' + page;
        link.target = '_blank';
        link.rel = 'noopener';
        return;
      }
      event.preventDefault();
      pending = { kind, page };
      feedback.textContent = 'Chọn ' + names[kind] + ' để mở trang PDF ' + page + '.';
      refreshPendingLink();
      dialog.showModal();
    });
  });
})();
