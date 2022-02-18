const isPangram = (str = '') => {
    str = str.toLowerCase();
    const { length } = str;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabets.split('');
    for(let i = 0; i < length; i++){
       const e = str[i];
       const index = alphaArr.indexOf(e);
       if(index !== -1){
          alphaArr.splice(index, 1);
       };
    };
    return !alphaArr.length;
 };

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("There aren't anymore mangos"));

// O(n^2) 