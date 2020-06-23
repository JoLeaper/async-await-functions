const chance = require('chance').Chance();
const Movie = require('../models/Movie');
const Review = require('../models/Review');

module.exports = async(movies, reviews) => {
  const movieArray = await Promise.all([...Array(5)].map(async() => {
    return Movie.create({
      title: chance.word(),
      description: chance.word(),
      studio: chance.word()
    });
  }));

  await Promise.all([...Array(100)].map(async() => {
    return Review.create({
      movie: chance.pickone(movieArray).id,
      authorName: chance.name(),
      comment: chance.word()
    });
  }));
};
