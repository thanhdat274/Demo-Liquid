const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const searchOpen = $('.btn-search');
const searchClose = $('.icon-search-close');

searchOpen.addEventListener('click', function () {
  document.querySelector('.menu-list').style.display = 'none';
  searchOpen.classList.add('disabled');
  searchClose.classList.add('active');
  document.querySelector('.search').style.display = 'block';
})

searchClose.addEventListener('click', function () {
  document.querySelector('.menu-list').style.display = null;
  searchOpen.classList.remove('disabled');
  searchClose.classList.remove('active');
  document.querySelector('.search').style.display = null;
})