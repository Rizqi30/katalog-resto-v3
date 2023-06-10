import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestoDb from '../src/scripts/data/favorite-resto-db';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoDb.getAllRestos()).forEach(async (resto) => {
      await FavoriteRestoDb.deleteResto(resto.id);
    });
  });
 
  itActsAsFavoriteRestoModel(FavoriteRestoDb);
});