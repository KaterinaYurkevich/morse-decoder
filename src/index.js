const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i+=10) {
        let element = expr.substring(i, i+10);
        if (element === '**********') {
            result = result + ' ';
        } else {
            let letter = '';
            for (let j = 0; j < 9; j+=2) {
                let twoElements = element.substring(j, j+2);
                if (twoElements === '10') {
                    letter = letter + '.';                
                } else if (twoElements === '11') {
                    letter = letter + '-';                
                }
            }
            result = result + MORSE_TABLE[letter];
        }
    }
    return result;
}

module.exports = {
    decode
}