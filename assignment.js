/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
// const numbers=[3, 7, 2, 9, 1];

// function findLargestElement(numbers) {

//     let max=0;
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]>max){
//             max=numbers[i];
//         }
//     }

//     return max;   
// }

// let maximumNumber=findLargestElement(numbers);
// console.log(maximumNumber);

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// let count=0;
// function isAnagram(str1, str2) {

//     if(str1.length!==str2.length){
//         return false;
//     }

//    for(let i=0;i<str1.length;i++){
//     for(let j=0;j<str2.length;j++){
//         if(str1[i].charCodeAt(0)==str2[j].charCodeAt(0)){
//             ++count;
//         }
//     }
//    }

//    if(count == str1.length){
//     return true;
//    }

//    return false;
// }

// let k=isAnagram("ecat","tace");
// console.log(k);

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// const transactions = [
//     {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 10,
//       category: 'Food',
//       itemName: 'Pizza',
//     },
//     {
//       id: 2,
//       timestamp: 1656076800000,
//       price: 15,
//       category: 'Clothing',
//       itemName: 'T-shirt',
//     },
//     {
//       id: 3,
//       timestamp: 1656076800000,
//       price: 20,
//       category: 'Food',
//       itemName: 'Burger',
//     },
//   ];



let arr=[1,1,1,1,1];

const ans=arr.map((i)=>{
  return i*5;
})
console.log(ans);

let arr1=[2,4,5,7,9];

const ans1=arr1.filter((i)=>{
  if(i%2==0){
    return true;
  }else{
    return false;
  }
  
})

console.log(ans1);