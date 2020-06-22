const fs = require('fs/promises');
const { getCharacter, getManyCharacters } = require('./rickAndMorty.api');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        'name':'Beth Smith',
        'status':'Alive',
        'species':'Human',
      }
    });
  }
}));

describe('rick and morty api service', () => {
  it('grabs a character by id', async() => {

    expect().toEqual();

  });
});
