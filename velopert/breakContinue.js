'use strict';
// break continue
// 반복문에서 벗어나거나 다음 loop를 돌게끔 함

for (let i= 0; i < 10; i++ ) {
    // 특정 조건이 만족 되었을때 다음 loop 실행 
    // 조건 구간은 skip  
    if (i ===2) continue;

    console.log(i)
    if(i ===5) break;
}

// Quiz

function sumOf (numbers) {
    let sum = 0;
    for (let i =0; i <numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
} 

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);