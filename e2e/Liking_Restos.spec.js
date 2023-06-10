const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.dontSeeElement('Tidak ada restaurant untuk ditampilkan', '.resto-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.resto-item');

  I.amOnPage('/');

  I.waitForElement('.resto_name a', 10);

  I.seeElement('.resto_name a');
  const firstResto = locate('.resto_name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto_name', 20);
  I.seeElement('.resto_name');
  const likedRestoName = await I.grabTextFrom('.resto_name a');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('.resto-item');

  I.amOnPage('/');

  I.waitForElement('.resto_name a', 10);

  I.seeElement('.resto_name a');
  const firstResto = locate('.resto_name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto_name', 20);
  I.seeElement('.resto_name');
  const likedRestoName = await I.grabTextFrom('.resto_name a');

  assert.strictEqual(firstRestoName, likedRestoName);

  I.click(firstResto);
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.resto_name');
});