console.log('welcom')
// alert('Hello and welcom');
var a=9;
var a=10;
console.log(a);
var a=9;
console.log(a); //Block 1
{
    var a=20;
    console.log(a);          //Block 2
}
let b=23;
console.log(b);
{
    let b=34;
    console.log(b);
}
console.log(b);
// const
const t=30;

console.log(t);
{
    const t=90;
    console.log(t);
}
console.log
(t);
// Data Type
var nam='welcom to js';
console.log(typeof(nam));
var count=10;
console.log(typeof(count));
// numbers
var count=10;
console.log(typeof(count));
// Boolean
var bb=true;
console .log(typeof(bb));
var gtype;
console .log(typeof(gtype));
//arrays
let arr=['red','Blue','white',10]
console.log(arr[3]);
console.log(arr.length);
 arr.push('violet');
 console.log(arr);
 arr.pop();
 console.log(arr);
//  Javascript objects
let car={    
mileage:100,
model:'110',
color:'red'
}
console.log(car);
console.log(car.model);
let person=new Object();
person.genter='male';
person.height=180;
console.log(person);
var a=5
var c=3;
console.log(a+c);
console.log(a-c);
console.log(a/c);
console.log(a*c);
var d=10;
var c=a++;
console.log(d);
console.log(c);
// if else
if (d==c) {
    console.log('d is equal to c')
} else {
    console.log('d not equal to c')
}
var e=6;
var f=8;
if (e>=6||f==8) {
    console.log('e is greater than or equal to f')
} else { 
    console.log('e is greater than f  and not equal to f')
}
let add=6;
    add -= 3
let g=12;
let h=32;
let i=45;
let j=73;
//  console.log(add);
 var exp=g+h*(i-j)-7;
 console.log(exp);
//Functions
function display(name){
    console.log('Hi '+name+' welcom to js');
}
 display('gopika');//Function call
 function addition(t,s){
    var result=t+s;
    return result;
}
var result=addition(10,30);
console.log('the sum is'+ result);

function subtraction(k,s){
    var result=k-s;
    return result;
}
var result=subtraction(20,40);
console.log('the sum is'+ result);
