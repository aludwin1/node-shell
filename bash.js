const pwd = require("./pwd");
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');


const done = output => {
    process.stdout.write(output);
    process.stdout.write('\nprompt >');
};


process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmds = data.toString().trim().split(' ');
    if (cmds[0] === "pwd") pwd(done);
    if (cmds[0] === 'ls') ls(done);
    if (cmds[0] === 'cat') cat(done, cmds[1]);
    if (cmds[0] === 'curl') curl(done, cmds[1]);
});

module.exports = done;
