(() => {
    const refs = {
      openModalBtn: document.querySelector('.menu-open'),
      closeModalBtn: document.querySelector('.menu-close'),
      modal: document.querySelector('.nav-menu'),
      body: document.querySelector('body'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');

    }
  })();