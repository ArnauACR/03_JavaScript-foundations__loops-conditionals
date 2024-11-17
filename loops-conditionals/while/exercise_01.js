/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

// 1

let number = 10;
while (number <= 40) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}

// 2

number = 10;
while (number <= 40) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}
