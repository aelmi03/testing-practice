function capitalize(word){
 const firstLetter = word.charAt(0).toUpperCase();
 return `${firstLetter}${word.slice(1)}`;
}

export { capitalize as default }