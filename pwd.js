function pwd(func) {
    func(process.cwd());
}
module.exports = pwd;
