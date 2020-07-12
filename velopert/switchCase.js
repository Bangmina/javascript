'use strict';
// switch case
// break 반드시 입력
// 입력하지 않으면 다음 코드까지 실행
const device = 'ipho2ne';
switch (device) {
    case 'iphone' :
        console.log('아이폰')
        break;
    case 'ipad' :
        console.log('아이패드');
        break;
    case 'galaxy note':
        console.log(갤럭시노트);
        break;

    // 아무것도 일치하지 않을경우 default
    default :
        console.log('모르겠네요');
}