
"use strict";
// Question 1
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }

}

//Question 2
function maxOFThree(num1, num2, num3) {

    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        }
        else {
            return num3;
        }
    }
    else if (num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

//Question number 3
function isVowel(character) {
    if (character.length != 1) {
        return null;
    }
    if (character == ('a' || 'e' || 'i' || 'o' || 'u')) {
        return true;
    }
    else {
        return false;
    }
}

//Question numnber 4
//Sum
function sum(arrayOfNum) {
    let result = 0;
    for (let i = 0; i < arrayOfNum.length; i++) {
        result += arrayOfNum[i];
    }
    return result;
}

//multiply
function multiply(arrayOfNum) {
    let result = arrayOfNum[0];
    for (let i = 1; i < arrayOfNum.length; i++) {
        result *= arrayOfNum[i];
    }
    return result;
}

//Question number 5
function reverse(string) {
    let leng = string.length;
    let str = "";
    while (leng >= 0) {
        str += string.charAt(leng);
        leng--;
    }
    return str;
}

//Question number 6

function findLongestWord(arrayOfWords) {
    let max = arrayOfWords[0].length;
    for (let i = 1; i < arrayOfWords.length; i++) {
        if (max < arrayOfWords[i].length) {
            max = arrayOfWords[i].length;
        }
    }
    return max;
}
//Question number 7
    //imparative way
    function filterLongWords(arrayOfWords, i) {
        let newArr = [];
        for (let j = 0; j < arrayOfWords.length; j++) {
            if (arrayOfWords[j].length > i) {
                newArr.push(arrayOfWords[j])
            }
        }
        return newArr;
    }
   //functional way
   function filterLongWords2(arrayOfWords, i){
       let newArr= arrayOfWords.filter( words => words.length>i);
       return newArr;
   }



//Question number 8
function computeSumOfSquares(arrayOfNum) {
    return arrayOfNum.map(numbers => numbers * numbers).reduce(function (total, num) {
        return total + num;
    }, 0);
}
//OR
function computeSumOfSquares(arrayOfNum) {
    return arrayOfNum.map(numbers => numbers * numbers).reduce((total, num) => total + num, 0);
}

//Question number 9

function printOddNumbersOnly(arrayOfNum) {
    let newarr = arrayOfNum.filter(function (number) { return (number % 2 != 0) });
    return newarr;
}
//OR
function printOddNumbersOnly(arrayOfNum) {
    let newarr = arrayOfNum.filter(number=>  number % 2 != 0);
    return newarr;
}
//Question number 10

function computeSumOfSquaresOfEvensOnly(arrayOfNum) {
    return arrayOfNum.filter(number=>  number % 2 == 0).map(numbers => numbers * numbers).reduce((total, num) => total + num, 0);
}

//Question number 11
//sum using reduce
function reduceSum(arrayOfNum) {
    return arrayOfNum.reduce(function (total, num) {
        return total + num;
    }, 0);
}
//OR
function reduceSum2(arrayOfNum){
    return arrayOfNum.reduce( number => (total + number),0);
}

//multiplication using reduce
function reduceMultiply(arrayOfNum) {
    return arrayOfNum.reduce(function (total, num) {
        return total * num;
    }, 1);
}
//OR
function reduceMultiply2(arrayOfNum){
    return arrayOfNum.reduce(number => total * number,1);
}

//Question number 12

function findSecondBiggest(arrayOfNum) {
    let biggest = arrayOfNum[0];
    let secondBiggest;
    let i = 0;
    while (i < arrayOfNum.length) {
        if (biggest < arrayOfNum[i]) {
            secondBiggest = biggest;
            biggest = arrayOfNum[i];
        }
        i++;
    }
    return secondBiggest;
}

//Question number 13
"use strict"
function printFibo(n, a, b) {
    console.log(a + "," + b);
    for (let i = 3; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
        console.log(b);
    }
}
