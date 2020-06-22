const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const Movie = require('../models/Movie');
const Review = require('../models/Review');

describe('product routes', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });

  it('checks to see if a movie model is created correctly', async() => {
    const movie1 = Movie.create({
      title: 'The Boom',
      description: 'Big Boom',
      studio: 'SuperLarge'
    });

    expect(movie1).toEqual({
      _id: movie1._id,
      title: 'The Boom',
      description: 'Big Boom',
      studio: 'SuperLarge',
      __v: 0
    });
  });

  it('checks to see if a Review model is created correctly', async() => {
    const movie1 = Movie.create({
      title: 'The Boom',
      description: 'Big Boom',
      studio: 'SuperLarge'
    });

    const review1 = Review.create({
      movie: movie1._id,
      authorName: 'Guy Guy',
      comment: 'It was alright',
    });

    expect(movie1).toEqual({
      id: review1._id,
      movie: movie1._id,
      authorName: 'Guy Guy',
      comment: 'It was alright',
      purchaseDate: expect.any(String),
      lastPourDate: expect.any(String),
      __v: 0
    });
  });
});
