
const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input').value;

//клик по кнопке поиск

searchButton.addEventListener('click', function (e) {
    console.log(searchInput);
    if (searchForm.classList.contains('search--visible')) {
        searchForm.classList.remove('search--visible')
    } else {
        e.preventDefault();
        searchForm.classList.add('search--visible');
    }
   
});
