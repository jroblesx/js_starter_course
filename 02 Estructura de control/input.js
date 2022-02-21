const readline = require("readline");

module.exports = async (message) => {
    const rl = readline.createInterface(process.stdin, process.stdout);

    return new Promise((resolve, reject) => {
        rl.question(
            message,
            (answer) => {
                resolve(answer);
            })
    })
}