function rot13(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  let word = str.toLowerCase().split('');
  console.log(word);
  let cipher = '';
  
  for (var i = 0; i < word.length; i++){
      let oldIndex = alphabet.indexOf(word[i]);
      console.log(oldIndex);
      if (oldIndex == -1){
        cipher += " ";
        continue;
      }
      let newIndex = oldIndex + 13;
      if (newIndex > 25){
        newIndex -=26;
      }
      
      let newLetter = alphabet[newIndex];
      console.log(newLetter);
      cipher += newLetter;
  }
  return cipher.toUpperCase();
}

console.log(rot13("SERR PBQR PNZC"));

