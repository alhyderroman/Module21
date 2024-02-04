// Code to remove duplicates from an array
const numbers= [43,67,23,12,67];
const unique=[];
for(const item of numbers){
if(unique.includes(item)===false){
    unique.push(item);
}
}
console.log(unique);

console.log('.............................')
const number= [43,67,23,12,67,10];
const duplicate=[];
for(const item of number){
if(duplicate.includes(item)===true){
    console.log('Found duplicate item. the duplicate item is=',item);
    duplicate.push(item);
}
}
