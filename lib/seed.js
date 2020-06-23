const chance = require('chance').Chance();
const Movie = require('../models/Movie');
const Review = require('../models/Review');


module.exports = async(movies, reviews) => {
  const createdMovies = await Promise.all([...Array(5)].map(async() => {
    return Movie.create({
      title: chance.word(),
      description: chance.word(),
      studio: chance.word()
    });
  }));
};
