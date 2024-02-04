function maxSize(string){
    let longestWord='';
    let len=0;
   const str=string.split(' ');
   for(const i of str){
    if(i.length>len){
      len=i.length;
      longestWord=i;
    }
    
   }
   
 return longestWord;

}


const l=maxSize('I am learning programming to become a programmar');
console.log(l);