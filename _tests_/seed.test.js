const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect.js');
const Movie = require('../models/Movie');
const Review = require('../models/Review');
const seedData = require('../lib/seed');

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
    const movie1 = await Movie.create({
      title: 'The Boom',
      description: 'Big Boom',
      studio: 'SuperLarge'
    });

    expect(movie1.toJSON()).toEqual({
      _id: movie1._id,
      title: 'The Boom',
      description: 'Big Boom',
      studio: 'SuperLarge',
      __v: 0
    });

  });

  it('checks to see if a Review model is created correctly', async() => {
    const movie1 = await Movie.create({
      title: 'The Boom',
      description: 'Big Boom',
      studio: 'SuperLarge'
    });

    const review1 = await Review.create({
      movie: movie1._id,
      authorName: 'Guy Guy',
      comment: 'It was alright',
    });

    expect(review1.toJSON()).toEqual({
      _id: review1._id,
      movie: movie1._id,
      authorName: 'Guy Guy',
      comment: 'It was alright',
      reviewDate: expect.any(Date),
      latestUpdate: expect.any(Date),
      __v: 0
    });
  });

  it('checks if 5 movies are created', async() => {
    await seedData();
    expect(await Movie.find()).toHaveLength(5);
  });

  it('checks if 100 reviews are created', async() => {
    await seedData();
    expect(await Review.find()).toHaveLength(100);
  });

  // it('checks if number of reviews/movies can be changed', async() => {

  //   expect().toEqual();
  // });
});
