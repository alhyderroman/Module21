function inchToFeet(inch){
const feet=parseInt(inch/12);
const feetRemaining=inch%12;
const result=feet+' feet '+feetRemaining+' inch. ';
return result;
}

const feetResult=inchToFeet(75);
console.log('Height in Feet:',feetResult);

console.log('..................');

function milesToKilometer(){

}