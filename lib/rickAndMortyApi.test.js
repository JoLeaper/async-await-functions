const fs = require('fs/promises');
const { getCharacter, getManyCharacters } = require('./rickAndMorty.api');
const characters = require('./data');

jest.mock('superagent', () => ({
  get: (url) => {
    const id = url.split('/').slice(-1);
    return Promise.resolve({
      body: characters[id - 1]
    });
  }
}));

describe('rick and morty api service', () => {
  it('grabs a character by id', async() => {
    const id = 1;
    const grabbedCharacter = await getCharacter(id);
    
    expect(grabbedCharacter).toEqual({
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human'
    });

  });
});
