const toggle = document.querySelector('.hamburger');
const menu = document.querySelector('.sidebar');
const activeClass = 'is-show';
toggle.addEventListener('click', function () {
  menu.classList.add(activeClass);
});
window.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !e.target.matches('.hamburger')) {
    menu.classList.remove(activeClass);
  }
});
