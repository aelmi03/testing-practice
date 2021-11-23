function analyzeArray(arrayOfNumbers){
    return {
        average : average(arrayOfNumbers),
        min : minimum(arrayOfNumbers), 
        max : maximum(arrayOfNumbers), 
        length : arrayOfNumbers.length
    }
}

function average(arrayOfNumbers){
    return arrayOfNumbers.reduce((prev,curr) => prev + curr, 0) / arrayOfNumbers.length;
}
function minimum(arrayOfNumbers){
    return arrayOfNumbers.reduce((prev, curr) => {
        return (prev > curr) ? curr : prev;
    },arrayOfNumbers[0])
}
function maximum(arrayOfNumbers){
    return arrayOfNumbers.reduce((prev, curr) => {
        return (prev < curr) ? curr : prev;
    },arrayOfNumbers[0])
}

export{ analyzeArray as default }