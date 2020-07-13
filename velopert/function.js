// return을 사용하면 함수가 끝난다
// return 뒤에는 실행되지 않는다.
function getGrade(score) {
    if (score === 100) {
        return 'A+'
    } else if(score >= 90) {
        return 'A';
    } else if (score ===89 ) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if ( score === 79) {
        return 'C+'
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D'
    } else {
        return 'F'
    }
}

const grade = getGrade(69);
console.log(grade);

// 화살표 함수
//
const add = (a,b) => a + b;
const sum = add(1,2);
console.log(sum) // 3
//
const hello = (name) => {
    console.log(`hello, ${name}!`)
}
hello('velopert');