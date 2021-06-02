import products from './data/pruducts.js';

// const product = {
//     name: 'Сервоприводы',
//     description:
//         'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi fugit magnam.',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${product.price} кредитов`;
// priceEl.classList.add('product__price');

// productEl.append(nameEl, descrEl, priceEl);

// console.log(productEl);

//Теперь пишем функцию которая принемает один обьект  из массива
//и создает из него одну карточку продукта
console.log(products);

const productContainerEl = document.querySelector('.js-products');

const makeProductCard = ({name, description, price}) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2');
    nameEl.textContent = name;
    nameEl.classList.add('product__name');

    const descrEl = document.createElement('p');
    descrEl.textContent = description;
    descrEl.classList.add('product__descr');

    const priceEl = document.createElement('p');
    priceEl.textContent = `Цена: ${price} кредитов`;
    priceEl.classList.add('product__price');

    productEl.append(nameEl, descrEl, priceEl);

    return productEl;
};

console.log(makeProductCard(products[1]));

const elements = products.map(makeProductCard);

console.log(elements);
productContainerEl.append(...elements);