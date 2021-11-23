function reverseString(word){
    const arrayOfCharacters = Array.from(word);
    return arrayOfCharacters.reduce((prev,curr) => {
        return curr + prev;
    }, '')
}

export { reverseString as default }