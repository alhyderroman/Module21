// let count=0;
// numbers=[34,5,78,23,5,100,23];
// for(const num of numbers){
//  if(num==5){
//     count++;
//  }   
// }
// console.log(count);

function reapeatCheck(numbers,find){
    let count=0;
    for(const num of numbers){
        if(num===find){
            count++;
        }
    }
    return 'The number '+find+' repeated '+count+' times.';
}

console.log(reapeatCheck([4,6,7,8,9,2,3,4,5,6,7,6,5,4],25));



