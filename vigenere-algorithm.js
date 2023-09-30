// key adalah kunci enkripsi
// pi adalah plainteks (teks yang bisa dibaca) / belum tereknripsi
// ci adalah chipertext (teks yang susah dibaca) / sudah tereknripsi

const chalk = require("chalk");

class Vigenere {
    constructor() {
        this.piArr = []; // wadah untuk menampung plaintext
        this.ciArr = []; // wadah untuk menampung chipertext
        this.generate_key = []; // wadah untuk menampung kunci
        this.getChiper; // hasil dari (pi + ki) % 26

        // Konverter Decimal <-> Char
        this.convert_into_dec = (str) => {
            let decArr = [];
            for (let i = 0; i < str.length; i++) {
                decArr.push(str[i].charCodeAt());
            }
            return decArr;
        };
        this.convert_into_char = (dec) => {
            let strArr = [];
            for (let i = 0; i < dec.length; i++) {
                strArr.push(String.fromCharCode(dec[i] + 65));
            }
            return strArr;
        }

    }

    // rumus = (Pi + Ki) % 26
    encrypt(key, pi) {
        let j = 0;
        for (let i = 0; i < pi.length; i++) {
            // menyamakan panjang key dengan plaintext
            this.generate_key.push(key[j]); // menambahkan key ke array dgn panjang = plaintext.length
            this.piArr.push(pi[i]); // menambahkan plainteks ke array

            if (j >= key.length - 1) {
                j = 0;
            } else {
                j++;
            }
            this.ciArr.push(
                (
                    (this.convert_into_dec(this.piArr[i]) - 65) +
                    (this.convert_into_dec(this.generate_key[i]) - 65)
                ) % 26 // modulus 26 untuk 
            );
        }

        console.log(chalk.greenBright(`\n== Result ==`));
        console.log(`Plaintext: `, this.piArr);
        console.log(`Key: `, this.generate_key);
        console.log(`Chipertext: `, this.convert_into_char(this.ciArr));

        console.log(`\n${chalk.blueBright('Programmed by Haydar')}`);
    }

    // rumus = ((Ci - Ki)+26) % 26
    decrypt(key, ci) {
        let j = 0;
        for (let i = 0; i < ci.length; i++) {
            // menyamakan panjang key dengan plaintext
            this.generate_key.push(key[j]); // menambahkan key ke array dgn panjang = plaintext.length
            this.ciArr.push(ci[i]); // menambahkan plainteks ke array

            if (j >= key.length - 1) {
                j = 0;
            } else {
                j++;
            }
            this.piArr.push(
                ((
                    (this.convert_into_dec(this.ciArr[i]) - 65) -
                    (this.convert_into_dec(this.generate_key[i]) - 65)
                ) + 26) % 26 // modulus 26 untuk 
            );
        }
        console.log(chalk.greenBright(`\n== Result ==`));
        console.log(`Chipertext: `, this.ciArr);
        console.log(`Key: `, this.generate_key);
        console.log(`Plaintext: `, this.convert_into_char(this.piArr));

        console.log(`\n${chalk.blueBright('Programmed by Haydar')}`);
    }
}


module.exports = Vigenere;