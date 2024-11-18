'use strict';

const logo = document.querySelector('.logo');
let logoWidth = logo.offsetWidth

const searchBtn = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const searchImg = document.querySelector('.search > img.main-icon');
const divSpanClose = document.querySelector('.close-icon');
const searchIconHidden = document.querySelector('.search-icon-hidden');

searchBtn.addEventListener('click', () => {
    searchImg.style.display = 'none';
    searchIconHidden.style.display = 'block';
    searchInput.style.display = 'block';
    searchInput.style.width = '100%';
    if (window.innerWidth > 1024) {
        searchBtn.style.width = `calc(100% - ${logoWidth + 50}px)`;
    } else {
        searchBtn.style.width = '100%';
    }
    searchBtn.style.background = '#0486e3';
    searchBtn.style.position = 'absolute';
    searchBtn.style.right = '0px';
    divSpanClose.style.display = 'flex';
});

divSpanClose.addEventListener('click', (event) => {
    event.stopPropagation();
    searchImg.style.display = 'block';
    searchIconHidden.style.display = 'none';
    searchInput.style.display = 'none';
    searchInput.style.width = '0px';
    searchBtn.style.width = '60px';
    searchBtn.style.background = '#0095ff';
    searchBtn.style.right = '0px';
    searchBtn.style.right = '0px';
    divSpanClose.style.display = 'none';
    setTimeout(() => {
        searchBtn.style.position = 'relative';
    }, 50)
});


const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const overlay = document.querySelector('.overlay');
const mainMenu = document.querySelector('.main-menu');

mobileMenuBtn.addEventListener('click', () => {
    if (overlay.classList.contains('visible')) {
        overlay.classList.remove('visible');
        mainMenu.classList.remove('visible');
    } else {
        overlay.classList.add('visible');
        mainMenu.classList.add('visible');
    }
})

overlay.addEventListener('click', () => {
    if (overlay.classList.contains('visible')) {
        overlay.classList.remove('visible');
        mainMenu.classList.remove('visible');
    }
})

