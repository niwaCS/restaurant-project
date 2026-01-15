import { homePage } from './home';


import { menuPage } from './menu';


import { aboutPage } from './about';

import './style.css';

function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
}


const homeBtnRef = document.getElementById('homeBtn');
const menuBtnRef = document.getElementById('menuBtn');
const aboutBtnRef = document.getElementById('aboutBtn');

menuBtnRef.addEventListener('click', () => {
    clearContent();
    menuPage();
});

homeBtnRef.addEventListener('click', () => {
    clearContent();
    homePage();
});

aboutBtnRef.addEventListener('click', () => {
    clearContent();
    aboutPage();
});

homePage();
