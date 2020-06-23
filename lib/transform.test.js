const transform = require('./transform');
const fs = require('fs/promises');

describe('transform test', () => {
  beforeAll(() => {
    return fs.writeFile('./transform-tester.txt', 'Big Bumblebees');
  });

  afterAll(() => {
    return fs.unlink('./transform-tester.txt');
  });
  
  
  it('transforms a file', async() => {
    await transform('./transform-tester.txt');
    const transformedText = await fs.readFile('./transform-tester.txt', { encoding: 'utf8' });

    expect(transformedText).toEqual('SEEBELBMU GI');

  });
});
