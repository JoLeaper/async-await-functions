const request = require('superagent');

const getCharacter = async(id) => {
  const character = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
  return {
    name: character.body.name, 
    status: character.body.status,
    species: character.body.species
  };
};

module.exports = {
  getCharacter
};
