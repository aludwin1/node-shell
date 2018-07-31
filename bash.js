let pwd = require("./pwd.js");
let ls = require('./ls.js');
let cat = require('./cat.js');
let curl = require('./curl.js');

process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmds = data.toString().trim().split(' ');

    if (cmds[0] === "pwd") {
        pwd();
    }
    if (cmds[0] === 'ls') {
        ls();
    }
    if (cmds[0] === 'cat') {
        cat(cmds[1]);
    }
    if (cmds[0] === 'curl') {
        curl(cmds[1]);
    }
    setTimeout(() => { process.stdout.write('\nprompt >') }, 1000)
})