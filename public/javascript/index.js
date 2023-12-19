'use strict';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./javascript/sw.js').then(reg => {
            console.log('Todo bien:', reg)
        }, function (err) {
            console.log('Fallo:', err)
        })
    })
}

const e = React.createElement;

const navbarContainer = document.querySelector('#navbar');
const navbar = ReactDOM.createRoot(navbarContainer);
navbar.render(e(Navbar));

const booksRow = document.querySelector('#booksRow');
const booksRoot = ReactDOM.createRoot(booksRow);

const searchContainer = document.querySelector('#search');
const search = ReactDOM.createRoot(searchContainer);
search.render(e(SearchForm));