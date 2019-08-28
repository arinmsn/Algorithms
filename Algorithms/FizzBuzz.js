/*
    Write a function that will output numbers from 1-num.
    If the number is divisable by 3, print Fizz instead.
    If the number is divisable by 5, print Buzz instead.
    If the number is divisable by both 3 and 5, print FizzBuzz instead.
*/
function fizBuzz(num){
    for (i = 1; i <= num; i++){
        //  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
        if (i % 15 === 0) console.log('FizzBuzz');
        else if (i % 5 === 0) console.log('Bizz');
        else if (i % 3 === 0) console.log('Fizz');
        else console.log(i);
    }
}

fizBuzz(15);