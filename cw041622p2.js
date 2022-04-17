/* The Story:

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:

You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:

cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting 
*/



//problem: a bus can hold (a) number of individuals, currently, there is (b) number of
//people on the bus. (c) is the number of people waiting to get on the bus.
//write a program that returns 0 if the bus CAN fit all passengers
//return the number of passengers not able to fit if it CANNOT fit all passengers

//for example: a = 50, b = 5, c == 46 --- returns 1
//for example: a = 50, b = 5, c = 40 == 0 because it CAN fit all passengers

//pseudo/solution: in order to return 0, (a) must be MORE (>) than b+c
//in order to return the NUMBER of passengers not avaiable to fit: a < b+c

let enough = (a, b, c) =>  a > b+c ? 0 : (b+c) - a