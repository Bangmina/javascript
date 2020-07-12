// return을 사용하면 함수가 끝난다
// return 뒤에는 실행되지 않는다.
function add(a,b) {
    return a + b;
}

const sum = add(1,2);
console.log(sum);

function hello(name) {
    console.log(`hello ${name} !`)
}

hello('velopert')