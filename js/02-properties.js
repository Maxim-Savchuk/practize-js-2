const magicBtn = document.querySelector('.js-magic-button');

magicBtn.addEventListener('click', () => {
    const imageEl = document.querySelector('.hero__image');
    // console.log('imageEl', imageEl);
    // console.log(imageEl.src);
    imageEl.src = '/img/second-img.jpg'

    const heroTitleEl = document.querySelector('.hero__title');
    // console.log('heroTitleEl', heroTitleEl);
    // console.log(heroTitleEl.textContent);
    heroTitleEl.textContent = 'Я будущий програмист!'

});

// const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl', heroTitleEl);
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = 'Я будущий програмист!'

/**
 * Data-Фтрибуты
 */

const actions = document.querySelectorAll('.js-actions button');
console.log(actions[0].dataset.action);
console.log(actions[1].dataset.action);
console.log(actions[2].dataset.action);

// console.log(actions[2].getAttribute('data-action'));
