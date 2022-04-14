
    
    //problem - there are three parameters. first number = beginning number
    //second number = end number, third number = what iterations to add it by
    //example: 2,8,2 .. , solution: 2 + 2 + 2 + 2..
    
    //pseudo/solution? - loop using a,b,c . let i = a, i<=b, i+=c
    //starts at a, adds all the way to b, iterates using c




    const sequenceSum = (begin, end, step) => {
        let sum = 0;
          for ( let i = begin; i <= end; i+=step){
            sum += i;
          } return sum
        };