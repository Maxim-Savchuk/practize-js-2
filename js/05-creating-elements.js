const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок страницы :)';
// console.log(titleEl);

// document.body.appendChild(titleEl);

const imageEl = document.createElement('img');
imageEl.src = './img/second-img.jpg';
imageEl.alt = 'hourglass';
imageEl.width = 360;
// console.log(imageEl);

// document.body.appendChild(imageEl);

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);

const navEl = document.querySelector('.site-nav');
navEl.insertBefore(navItemEl, navEl.firstElementChild)
// navEl.insertBefore(navItemEl, navEl.children[1])
console.log(navEl);

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
heroEl.append(titleEl, imageEl)