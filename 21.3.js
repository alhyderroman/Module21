function checkLeapYear(year){
    
    if(year%100==0&&year%400==0){
        return year+'is Leap Year';
        
    }
    else if(year%100!==0&&year%4===0){
        return year+' is Leap Year';
    }
    else{
        return year+ ' is Not Leap year';
    }
}

const output=checkLeapYear(1900);
console.log(output);
