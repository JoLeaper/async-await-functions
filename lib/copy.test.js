const copy = require('./copy');
const fs = require('fs/promises');

describe('copy test', () => {
  beforeAll(() => {
    return fs.writeFile('./tester.txt', 'how do you do fellow coders');
  });

  afterAll(() => {
    return fs.unlink('./tester.txt');
  });
  
  
  it('copies a file', async() => {
    await copy('./tester.txt', './copy-tester.txt');
    const copiedFileText = await fs.readFile('./copy-tester.txt', { encoding: 'utf8' });

    expect(copiedFileText).toEqual('how do you do fellow coders');

  });
});
