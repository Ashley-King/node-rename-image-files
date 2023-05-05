const fs = require('fs');
const path = require('path');

// Replace this with the path to your folder containing the images
const folderPath = path.join(__dirname, 'path/to/your/folder');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file, index) => {
    if (file.startsWith('Daryl_') && file.endsWith('.png')) {
      const oldPath = path.join(folderPath, file);
      const newFileName = `${index + 1}Daryl.png`;
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
