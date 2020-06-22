const fs = require('fs/promises');

module.exports = async(src) => {
  const textToTransform = await fs.readFile(src, { encoding: 'utf8' });
  const transformedText = textToTransform
    .split('')
    .filter(letter => (letter.toUpperCase() !== letter) || letter === ' ')
    .map(letter => letter.toUpperCase())
    .reverse()
    .join('');
    
  await fs.writeFile(src, transformedText);
};
