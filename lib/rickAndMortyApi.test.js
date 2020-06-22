const { getCharacter, getManyCharacters } = require('./rickAndMorty.api');
const mockCharacters = require('./data');

jest.mock('superagent', () => ({
  get: (url) => {
    const id = url.split('/').slice(-1);
    return Promise.resolve({
      body: mockCharacters[id - 1]
    });
  }
}));

describe('rick and morty api service', () => {
  it('grabs a character by id', async() => {
    const id = 1;
    const grabbedCharacter = await getCharacter(id);

    expect(grabbedCharacter).toEqual({
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
    });
  });

  it('grabs an array of characters', async() => {
    const idArray = [1, 2, 3];
    const grabbedCharacters = await getManyCharacters(idArray);

    expect(grabbedCharacters).toEqual([
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human'
      },
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human'
      },
      {
        name: 'Beth Smith',
        status: 'Alive',
        species: 'Human'
      }
    ]);
  });
});
