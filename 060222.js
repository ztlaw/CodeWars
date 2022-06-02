/*

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!
*/

function fixTheMeerkat(arr) {
    [arr[0], arr[2]] = [arr[2], arr[0]];
      return arr
    }
    
    //problem: at the zoo, the animals (array) heads and tails are switched. they need to be switched back
    //currently, they are at [tail(3), body(2), head(1)], they need to be [head(1), body(2), tail(3)]
    
    // PREP ----
    
    //parameters: the argument that is being passed is a 3-index array. The array will always have an index of 3
    //return: the return should be the same array, but mutated. or a completely different array, but with the 
    //same elements, just switched
    //example: [3, 2, 1] should return [1, 2, 3]. 
    //example: [tail, body, head] should return [head, body, tail]
    //pseudo: we can redeclare the variables using the = sign, so arr0, arr2 now equals arr2, arr0