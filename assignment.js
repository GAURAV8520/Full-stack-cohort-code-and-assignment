const numbers=[3, 7, 2, 9, 1];

function findLargestElement(numbers) {

    let max=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>max){
            max=numbers[i];
        }
    }

    return max;   
}

let maximumNumber=findLargestElement(numbers);
console.log(maximumNumber);
