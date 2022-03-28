/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import GameSavingLoader from '../app.js';

test('Check object', () => {
  const classTest = new GameSavingLoader();
  const result = classTest.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  expect(result).toEqual(expected);
});
