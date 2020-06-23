const chance = require('chance').Chance();
const Movie = require('../models/Movie');
const Review = require('../models/Review');

module.exports = async({ movies = 5, reviews = 100 } = {}) => {
  const movieArray = await Promise.all([...Array(movies)].map(async() => {
    return Movie.create({
      title: chance.word(),
      description: chance.word(),
      studio: chance.word()
    });
  }));

  await Promise.all([...Array(reviews)].map(async() => {
    return Review.create({
      movie: chance.pickone(movieArray).id,
      authorName: chance.name(),
      comment: chance.word()
    });
  }));
};
