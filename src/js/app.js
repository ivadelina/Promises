/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */


import read from './reader';
import json from './parser';

/* eslint-disable max-classes-per-file */
export default class GameSavingLoader {
  load() {
    read().then((response) => json(response)).then((response) => {
      console.log(response);
      return response;
    }).catch(() => {
      throw new Error('Ошибка');
    });
  }
}
