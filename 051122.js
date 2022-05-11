/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/



//problem: we are given an emoji of a card suit. we have to return (in a string) of the card suit
//clubs, diamonds, hearts, spades

//example: ('9♣') -> return 'clubs'
//example2: ('K♥') -> return 'hearts'

//pseudo/solution: we can use the .includes method to return the correct suit name. 
//also, we can use an if/else statements.
//IF emoji.incldues(the suit emoji), return the correct string.
//instead of using an if statement, maybe we can use switch/break cases

function defineSuit(card){
    if(card.includes('♣')){
      return 'clubs'
    } else if(card.includes('♦')){
      return 'diamonds'
    }else if(card.includes('♥')){
      return 'hearts'
    } else if(card.includes('♠')){
      return 'spades'
    }
  }