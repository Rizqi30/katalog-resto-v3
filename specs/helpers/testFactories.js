import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoDb from '../../src/scripts/data/favorite-resto-db';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestos: FavoriteRestoDb,
    resto,
  });
};
 
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };