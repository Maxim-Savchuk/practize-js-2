const magicBtn = document.querySelector('.js-magic-button');

magicBtn.addEventListener('click', () => {
    const imageEl = document.querySelector('.hero__image');
    console.log('imageEl', imageEl);
    console.log(imageEl.src);
    imageEl.src = '/img/second-img.jpg'

});

const heroTitleEl = document.querySelector('.hero__title');
console.log('heroTitleEl', heroTitleEl);
