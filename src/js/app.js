/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */

import read from './reader';
import json from './parser';

/* eslint-disable max-classes-per-file */
export default class GameSavingLoader {
  load() {
    const firstPromise = read();
    firstPromise.then((data) => json(data)).then(response => JSON.parse(response)).catch()
   return 
  }
}
