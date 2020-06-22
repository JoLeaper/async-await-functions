const fs = require('fs/promises');

module.exports = async(src, dst) => {
  const copiedText = await fs.readFile(src, { encoding: 'utf8' });
  await fs.writeFile(dst, copiedText);
};
