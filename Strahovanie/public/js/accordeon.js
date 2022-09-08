const triggers = document.querySelectorAll('.trigger');
triggers.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.closest('.accordeon__wrapper').classList.toggle('active');
    });
});
