const triggers: NodeListOf<Element> = document.querySelectorAll('.trigger');

triggers.forEach((btn: Element): void => {
  btn.addEventListener('click', () => {
    btn.closest('.accordeon__wrapper').classList.toggle('active');
  })
})
