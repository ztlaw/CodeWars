/*
  
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

  */






let wordArray = [["o","a","a","n"], // this is an m x n word array ( 4 x 4)
                 ["e","t","a","e"],
                 ["i","h","k","r"],
                 ["i","f","l","v"]]
let words = ["oath","pea","eat","rain"] //we are looking to find

function findWords(board, words){ // function declaration
  let result = [] // pushing the created words into an array
  let root = buildTrie(words) // root variable references the function buildTrie(words) using the same arg in the findWords function
  for(let i = 0; i < board.length; i++){ // looping through the rows, aka wordArray[i]
    for(let j = 0; j < board[0].length; j++){ // looping through the columns aka wordArray[0][i]
      dfs(root, i, j, result, board)// during each loop of each letter, run this function, which takes in another function reference (root), the i/j looped index, the result array, and the board argument
    }
  } return result
}

function dfs(node, i, j, result, board){
  if(node.word){
    result.push(node.word);
    node.word = null
  }
  if(i < 0|| j < 0 || i > board.length -1 || j > board[0].length -1) return;
  if(!node[board[i][j]]) return;

  let c = board[i][j];
  board[i][j] = '#'
  dfs(node[c], i+1, j, result, board)
  dfs(node[c], i-1, j, result, board)
  dfs(node[c], i, j+1, result, board)
  dfs(node[c], i, j-1, result, board)
  board[i][j] = c;
}



function buildTrie(words){ //this function takes in the words array ["oath","pea","eat","rain"]
  let root = {}; // root = an object declaration {} empty object

  for(let word of words){ //looping through each element in the array. for loop
    let currentNode = root; //using root variable aka object

    for(char of word){ //f
      if(!currentNode[char]) currentNode[char] = {};
      currentNode = currentNode[char]
    }
    currentNode.word = word
  }
  return root
}


console.log(findWords(wordArray, words))