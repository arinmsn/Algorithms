/*
What are the order in which these numbers are run?

function logNumbers() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
}

logNumbers();

*/

/*  Solution: 1, 4, 3, 2
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);

    even loop  - events are pushed to the queue
    Console.log(3) waits and (4) is run straight away.

*/
