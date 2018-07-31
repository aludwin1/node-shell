const fs = require('fs');

function cat(func, file) {
  fs.readFile(`./${file}`, 'utf8', (err, data) => {
    if (err) throw err;
    func(data);
  });
}

module.exports = cat;
