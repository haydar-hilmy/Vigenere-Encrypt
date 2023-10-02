const readline = require('readline');
const Vigenere = require('./vigenere-algorithm');
const { exit, config } = require('process');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(chalk.yellowBright("=-=-= VIGENERE =-=-="));
console.log("[1] Encrypt");
console.log("[2] Decrypt");
console.log("[3] Exit");

const vig = new Vigenere;

rl.question("choose: ", (choose) => {
    if (choose == "3") {
        console.log(chalk.blueBright("Programmed by Haydar"));
        rl.close();
        exit(1);
    }
    rl.question("key: ", (key) => {
        rl.question("plain/chiper: ", (plain_chiper) => {
            try {
                if (choose == "1") {
                    vig.encrypt(key, plain_chiper);
                } else if (choose == "2") {
                    vig.decrypt(key, plain_chiper);
                }
            } catch (error) {
                throw error;
            } finally {
                rl.close();
            }
        });
    });
});