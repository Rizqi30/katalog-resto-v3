import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster lazyload" src="${
    resto.pictureId
      ? CONFIG.IMG_URL_LARGE + resto.pictureId
      : 'https://picsum.photos/id/666/800/450?grayscale'
  }" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address}</p>
  </div>
  
  <div class="resto__desc">
    <h3>Deskripsi</h3>
    <p>${resto.description}</p>
  </div>

  <div class="resto__item">
    <div class="resto__item-foods">
      <h4>Foods Menu</h4>
      <ul>
        ${resto.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}
      </ul>
    </div>
    <div class="resto__item-drinks">
      <h4>Drinks Menu</h4>
      <ul>
        ${resto.menus.drinks
          .map((drinks) => `<li>${drinks.name}</li>`)
          .join('')}
      </ul>
    </div>
  </div>

  <div class="resto__review resto__desc">
    <h4>Customers Review</h4>
    ${resto.customerReviews.map(
      (review) => `
      <div class="resto__review-cust">
        <p class="resto__name">${review.name}</p>
        <p class="resto__date">${review.date}</p>
        <p class="resto__text">${review.review}</p>
      </div>
    `,
    )}
  </div>

`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" alt="${resto.name}"
        src="${
          resto.pictureId
            ? CONFIG.IMG_URL_LARGE + resto.pictureId
            : 'https://picsum.photos/id/666/800/450?grayscale'
        }" />
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${
          resto.rating
        }</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto_name"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <h4 class="resto-item__city">${resto.city}</h4>
      <p>${resto.description.slice(0, 150)}</p>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
