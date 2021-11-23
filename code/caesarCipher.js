function caesarCipher(word,shift){
    if(word === '') return '';
    if(shift > 25) throw new Error('There are only 26 letters in the alphabet the max shift is 25 letters');
    return Array.from(word).reduce((prev,curr) => {
       if(curr === ' ') return prev + curr;
       if(curr.charCodeAt(0) < 65 || curr.charCodeAt(0) > 122) throw new Error('String must only contain spaces or letters');
       if(curr.charCodeAt(0) > 90){
           return prev + shiftLowerCaseLetter(curr, shift)
       }
       else{
           return prev + shiftUpperCaseLetter(curr, shift);
       }
    }, '');
}

function shiftUpperCaseLetter(letter, shift){
    const number = letter.charCodeAt(0) + shift;
    if(number > 90){
        return String.fromCharCode(number - 26);
    }
    return String.fromCharCode(number);
}

function shiftLowerCaseLetter(letter, shift){
    const number  = letter.charCodeAt(0) + shift;
    if(number > 122){
        return String.fromCharCode(number -26);
    }
    return String.fromCharCode(number);
}


export { caesarCipher as default };