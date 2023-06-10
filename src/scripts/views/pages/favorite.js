import FavoriteRestoDb from '../../data/favorite-resto-db';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <div class="content">
                <h2 class="content__heading">Favorite Restaurant</h2>
                <div id="restos" class="restos">
        
                </div>
            </div>
        `;
    },

    async afterRender() {
        const restos = await FavoriteRestoDb.getAllRestos();
        const restosContainer = document.querySelector('#restos');

        if (restos.length) {
            restos.forEach((restaurant) => {
                restosContainer.innerHTML += createRestoItemTemplate(restaurant);
            });
        } else {
            restosContainer.innerHTML = `
                <div class="resto-item__not__found">There is no Favorite Restaurants</div>
            `;
        }
    },
};

export default Favorite;