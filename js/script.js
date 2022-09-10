const myNav = document.getElementById('mynav');
const links = document.getElementsByClassName('nav-link');
const icon = document.getElementById('icon')[0];
console.log(links);
window.onscroll = function () {
  console.log(window.scrollY);

  if (window.scrollY >= 120) {
    myNav.classList.add('bg-white');
    myNav.classList.remove('bg-transparent');

    for (let link of links) {
      link.classList.remove('link-light');
      link.classList.add('link-dark');
    }
    // links.forEach(function (link) {
    //   link.classList.remove('link-light');
    // });
  } else {
    myNav.classList.add('bg-transparent');
    myNav.classList.remove('bg-white');

    for (let link of links) {
      link.classList.remove('link-dark');
      link.classList.add('link-light');
    }
    // links.forEach(function (link) {
    //   link.classList.add('link-light');
    // });
  }
};
