const myNav = document.getElementById('mynav');
const links = document.getElementsByClassName('nav-link');
const icon = document.getElementById('icon');
window.onscroll = function () {
  console.log(icon);

  if (window.scrollY >= 120) {
    myNav.classList.add('bg-white');
    myNav.classList.remove('bg-transparent');
    icon.style.color = '#000';

    for (let link of links) {
      link.classList.remove('link-light');
      link.classList.add('link-dark');
    }
  } else {
    myNav.classList.add('bg-transparent');
    myNav.classList.remove('bg-white');
    icon.style.color = '#000';

    for (let link of links) {
      link.classList.remove('link-dark');
      link.classList.add('link-light');
    }
  }
};
