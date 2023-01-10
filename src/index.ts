const ip=document.querySelectorAll('input')
console.log(ip)
ip.forEach(i=>{
    console.log(i)
})

let a=10;
// a='vikas';

const cir=(d:number) =>{return d*Math.PI}
console.log(cir(1))

//arrays
let names = ["vikas","sanjeev",1];
names.push(2);

//objects 
let ninja={
    name:'vikas',
    age:210
}
ninja.name='sanjeev'
ninja.age=10


// explicit types
let char:string;
let age:number;
let flag:boolean;

//arrays
let ninjas:string[]=[]

//union types
let mixed:(string|number|boolean)[]=[]

let uid:string|number;

//Dynamic Types
 let b:any=25;
 b="vikas"

 let mixed1:any[]=[]
mixed.push(5)
mixed.push('vikas')

let ninja1:{a:any,age:any};
let greet:Function;
greet=()=>{
    console.log('greetings')
}

const add=(a:number,b:number,c:number|string=10)=>{
    console.log(a+b)
    console.log(c)
}
add(5,5)

const minus=(a:number,b:number):number=>{
    return a+b;
}
let res=minus(10,78)



//Aliases

type strOrNum =string | number;

const greet1=(user:strOrNum)=>{
    console.log(`${user} says hello`)
}
let calc:(a:number,b:number,c:string) => number;
calc=(numOne:number,numTwo:number,action:string)=>{
    if(action==='add'){
        return numOne+numTwo
    }
    else{
        return numOne-numTwo
    }
}