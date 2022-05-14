/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

*/

function DNAStrand(dna){
    return dna.split('').map(letter => {
      if (letter == 'A'){
        return 'T'
      } else if (letter == 'T'){
        return 'A'
      } else if (letter == 'C'){
        return 'G'
      } else if (letter == 'G'){
        return 'C'
      }
    }).join('')
  }
  //problem: we are given strings of the letters ATCG, A complements to T (vice versa) and
  // C complements to G (vice versa), we have to return the complementary letter depending on the 
  //letter that is given in the argument
  
  // PREP -- 
  // P Parameters: Parameters that are given are the four letters only A, T, C, and G. Can only be 
  //passed as a string 
  //R Return: The return of the function with the proper arguments passed are the strings, A, T, C or G.
  //E Example: AAATGCT should return TTTACGA
  // TCGATTC should return AGCTAAC
  //Pseudo: since strings are immutable, it's possible to just return a new string
  //string can be split into an array, and then array can be mapped to replace the letters, and then joined back together with the join method.

  /* BEST PRACTICE METHOD vvv

  function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = { //using object methods and properties to define complements instead of using if/else statments
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
