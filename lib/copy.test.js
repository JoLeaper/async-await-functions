const copy = require('./copy');
const fs = require('fs/promises');

describe('copy test', () => {
  beforeAll(() => {
    return fs.writeFile('./copy-tester.txt', 'how do you do fellow coders');
  });

  afterAll(() => {
    Promise.all([
      fs.unlink('./copy-tester.txt'),
      fs.unlink('./copy-of-copy-tester.txt')
    ]);
  });
  
  
  it('copies a file', async() => {
    await copy('./copy-tester.txt', './copy-of-copy-tester.txt');
    const copiedFileText = await fs.readFile('./copy-of-copy-tester.txt', { encoding: 'utf8' });

    expect(copiedFileText).toEqual('how do you do fellow coders');

  });
});
