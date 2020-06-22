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
    
  });

  it('checks to see if a Review model is created correctly', async() => {

  });
});
