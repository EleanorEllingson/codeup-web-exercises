//Define a function named `isANumber` that takes in a value and returns true if the input is numeric or not. Numeric strings are not considered as numbers and should return false.

function isANumber(input){
    if(!isNaN(input)){
        return true
    } return false
}

//Define a function named `increment` that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
function increment(input){
    if (isANumber(input)){
        return input +++ 1
    }
}

//Define a function named `decrement`. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, `decrement` should return false.
    function decrement(input){
    if(isANumber(input)){
        return input --- 1
    }
    }


//Write a function named `getHighestNumber` that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return `false`.
    function getHighestNumber(x, y, z){
    if(isANumber(x) && isANumber(y) && isANumber(z)){
        return Math.max(x, y, z);
    }
    }


//Define a function named `parseNumber` that parses (converts) a numeric String and returns it's value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.
    function parseNumber(input){
    return parseInt(input)
    }

//Write a function named `add` that takes in two inputs. If both inputs provided are numeric, `add` will return the sum of both inputs. If one or both inputs is not numeric, `add` should return false.
    function add(x, y){
    if(parseFloat(x) && parseFloat(y)){
        return parseNumber(x) + parseNumber(y)
    }
    }


//Write a function named `multiply` that takes in two inputs. If both inputs provided are numeric, `multiply` returns the product of the first input multiplied by the second. If either or both inputs are not numeric, `multiply` should return false.
function multiply(x, y){
    if(parseFloat(x) && parseFloat(y)){
        return parseNumber(x) * parseNumber(y)
    } else{
        return false
    }
}

//Define a function named `square`. If the provided input is numeric, `square` should return the number multiplied by itself. If the input is not numeric, `square`, should return false.
    function square(input){
    if(isANumber(input)){
        return Math.pow(input, 2);
    } else{
        return false;
    }
    }


//Write a function named `sumOfSquares` that takes in two inputs. If both inputs are numeric, `sumOfSquares` should square each input and return the sum of them added together. For example, if we pass `a` and `b` then we should square `a` and add it to the square of `b`. If either or both inputs are not numeric, `sumOfSquares` should return false.
    function sumOfSquares(x, y){
        if(isANumber(x) && isANumber(y)){
            var square1 = Math.pow(x, 2);
            var square2 = Math.pow(y, 2)
            return square1 +++ square2 ;
        } else{
            return false;
        }
    }


//Write a function named `isPalindrome` that takes in a single input. If the input is a numeric string, then return `false`. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
function isPalindrome(input){
    if(typeof input == "number") {
        return false
    }
        var stringSplit = input.split("");
        var reverseArray = stringSplit.reverse()
        var joinArray = reverseArray.join("")
        if(joinArray === input){
            return true

        } return false

}