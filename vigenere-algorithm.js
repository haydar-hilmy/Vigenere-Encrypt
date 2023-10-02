class Vigenere {
    constructor() {
        this.piArr = [], this.ciArr = [], this.generate_key = [];
        this.getChiper;
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
    encrypt(key, pi) {
        let j = 0;
        for (let i = 0; i < pi.length; i++) {
            this.generate_key.push(key[j]);
            this.piArr.push(pi[i]);

            if (j >= key.length - 1) {
                j = 0;
            } else {
                j++;
            }
            this.ciArr.push(
                (
                    (this.convert_into_dec(this.piArr[i]) - 65) +
                    (this.convert_into_dec(this.generate_key[i]) - 65)
                ) % 26
            );
        }
        console.log(`\n== Result ==`);
        console.log(`Plaintext: `, this.piArr);
        console.log(`Key: `, this.generate_key);
        console.log(`Chipertext: `, this.convert_into_char(this.ciArr));
    }
    decrypt(key, ci) {
        let j = 0;
        for (let i = 0; i < ci.length; i++) {
            this.generate_key.push(key[j]);
            this.ciArr.push(ci[i]);
            if (j >= key.length - 1) {
                j = 0;
            } else {
                j++;
            }
            this.piArr.push(
                ((
                    (this.convert_into_dec(this.ciArr[i]) - 65) -
                    (this.convert_into_dec(this.generate_key[i]) - 65)
                ) + 26) % 26
            );
        }
        console.log(`\n== Result ==`);
        console.log(`Chipertext: `, this.ciArr);
        console.log(`Key: `, this.generate_key);
        console.log(`Plaintext: `, this.convert_into_char(this.piArr));
    }
}
module.exports = Vigenere;