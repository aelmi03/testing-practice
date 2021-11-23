const calculator = {
    add(firstNumber, secondNumber){
        return firstNumber + secondNumber;
    },
    subtract(firstNumber, secondNumber){
        return firstNumber - secondNumber;
    },
    multiply(firstNumber, secondNumber){
        return firstNumber * secondNumber;
    },
    divide(firstNumber, secondNumber){
        if(secondNumber === 0){ 
            throw new Error('Number cannot be divided by 0');
        };
        return firstNumber / secondNumber;
    }
}

export { calculator as default };