const fs = require('fs');
const path = require('path');
require('dotenv').config()
// Replace this with the path to your folder containing the images
const folderPath = path.join(__dirname, process.env.DIR_PATH);
const imageName = process.env.IMAGE_NAME;
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file, index) => {
    if (file.startsWith(`${imageName}_`) && file.endsWith('.png')) {
      const oldPath = path.join(folderPath, file);
      const newFileName = `${index + 1}${imageName}.png`;
      const newPath = path.join(folderPath, newFileName);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming file "${file}":`, err);
        } else {
          console.log(`Renamed "${file}" to "${newFileName}"`);
        }
      });
    }
  });
});
