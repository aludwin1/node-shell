let pwd = require("./pwd.js");
let ls = require('./ls.js');
let cat = require('./cat.js');
let curl = require('./curl.js');


const done = output => {
    process.stdout.write(output);
};


process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmds = data.toString().trim().split(' ');

    if (cmds[0] === "pwd") pwd(done);
    if (cmds[0] === 'ls') ls(done);
    if (cmds[0] === 'cat') cat(done, cmds[1]);
    if (cmds[0] === 'curl') curl(done, cmds[1]);

    setTimeout(() => { process.stdout.write('\nprompt >') }, 1000)
})

module.exports = done;
