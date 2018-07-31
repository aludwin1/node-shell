const fs = require('fs');


function ls(func) {

    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err
        } else {
            func(files.join('\n'));
        }
    })
}

module.exports = ls;
