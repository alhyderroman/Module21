const today=new Date();
console.log(today);

const day=new Date('2062-10-09');
console.log(day.getDay());

const specificDate= new Date()
console.log(specificDate);
for(var i;i<5;i++){
    setTimeout (function(){
        console.log(i);},100;
    }
}