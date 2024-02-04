function findVowels(str){
 let count=0;
    const lower=str.toLowerCase();
    const string=lower.split('');
 for(const letter of string){
    if(letter==='a'||letter==='e'||letter==='i'||letter==='o'||letter==='u'){
        count++;
    }
 }
 return count;
 }


const vowel=findVowels('i love my country');
console.log(vowel);