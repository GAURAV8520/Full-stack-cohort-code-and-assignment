//var let const 
// console.log("hello world ");
// const  a=9; 
//  a=7;
// console.log(a);



// let fname ="gaurav";
// let age=3;

// let ismarried =true;

// console.log("this person name is "+ fname +"and their age is "+ age +"is it married "+ismarried);


// if(ismarried == true){
//     console.log(fname+"is married ");
// }else{
//     console.log(fname+"not married");
// }

// for(let ans=0;ans<100;ans++){
//     console.log(ans);
// }

//programme 

// let firstName = "gaurav";
// let lastName ="deshmukh";
// let gender ="male";

// console.log("your first name is "+firstName+"and last name is "
// +lastName);

// if(gender =="male"){
//     console.log(firstName+"is boy");
// }else{
//     console.log(firstName+"is girl");
// }

// for(let i=0;i<=1000;i++){
//     console.log(i);
// }


//even number in an array 

// const ages=[21, 22,23,44,56,55,1,6,8];

// for(let i=0;i<ages.length;i++){
//     if(ages[i]%2==0){
//         console.log(ages[i]);
//     }
// }


// maximum number in an array
// let max=0;

// for(let i=0;i<ages.length;i++){
//     if(ages[i]>max){
//         max=ages[i];
//     }
// }

// console.log("maximum number is"+max);

// object 
// const user1={
//     firstName :"gaurav ",
//     gender:"male"
// }

// //console.log(user1["firstName"]);

// const user2=[{
//     firstName :"gaurav ",
//     gender:"male"
// },
// {
//     firstName:"sakshi",
//     gender:"female"
// },
// {
//     firstName:"ganesh",
//     gender:"male"
// }
   
// ]

// for(let i=0;i<user2.length;i++){
//     if(user2[i]["gender"]=="male"){
//         console.log(user2[i]["firstName"]);
//     }
// }

//write an programme to reverse an element in an array 





//function 

// function sum(a,b){
//     return a+b;
// }

// let value =sum(1,22);
// let value1 =sum(40,22);

// console.log(value);
// console.log(value1);


// let sum=0;
// for(let i=0;i<100000000;i++){
//     sum+=i;
// }

// console.log(sum);


// function sum1(num1 , num2,fnToCall){
//     let result =num1+num2;

//     fnToCall(result);
// }

// function displaydata(data ){
//     console.log("data is  "+data);
// }
// let value=sum1(4,7,displaydata);

function calculate(a,b,type){

    if(type=="sum"){
        const result =sum(a,b);
        return result;
    }
    if(type=="minus"){
        const result =minus(a,b);
        return result;
    }
}


function sum(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}


let ans3=calculate(45,10,"minus");
console.log(ans3);



//set timeout function 

function sakshi(){
    console.log("sakshi hiii");
}

setTimeout(sakshi, 4*1000);
// setInterval(sakshi,1*1000);
