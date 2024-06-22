// 1번
// 문제 : 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.
// 설명 : 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.

// 문제 풀이
// function getValueAtObject(obj, key) {
//   // 객체에서 변수로 해당 값을 가져올 때는 [] 방식을 사용한다.
//   if(obj[key] != undefined){
//     return obj[key]
//   } else throw new Error('객체 내의 해당 키가 존재하지 않습니다!')

// }

// 범쌤 답
// function isObject(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object'
// }

// function getValueAtObject(obj,key){

//   if(typeof key !== 'string'){
//     throw new TypeError('getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
//   }
  
//   if(isObject(obj)){
//     if(Object.prototype.hasOwnProperty.call(obj,key)){
//       return obj[key];
//     }
//     else{
//       throw new Error(`getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`);
//     }
//   }
//   else{
//     throw new TypeError('getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다.');
//   }
  
// }

// // 예시 코드
// const person = {
//   name: 'Alice',
//   age: 25,
//   city: 'Wonderland'
// };

// console.log(getValueAtObject(person, 'name')); // 'Alice'
// console.log(getValueAtObject(person, 'age'));  // 25
// console.log(getValueAtObject(person, 'city')); // 'Wonderland'
// console.log(getValueAtObject(person, 'country')); // Error !




// 2번
// 문제 : 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.
// 설명 : 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.

// 문제 풀이
function getNumberAtArray(arr, index) {
  if (Array.isArray(arr) != true) throw new Error('배열이 아닙니다. ')
  
  if (index >= arr.length || index < 0) throw new Error('유효한 인덱스가 아닙니다.') 
  else return arr[index]

}


// 예시 코드
const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!

// 범쌤 답
// 1. arr 변수가 배열인지 확인하기
// 2. 0보다 크거나 같음 && 배열의 길이보다 작을 때

// function getNumberAtArray(arr, index){

//   if(Array.isArray(arr)){
//     if(index >= 0 && index < arr.length){
//       return arr[index];
//     }
//     else{
//       throw new Error('배열에 없는 index입니다.');
//     }
//   }
//   else{
//     throw new TypeError('getNumberAtArray 함수의 첫 번째 인수는 배열 타입 이어야 합니다.')
//   }
  
// }

// 주어진 인덱스가 배열의 유효한 범위 내에 있는지 확인해야 합니다.
// 인수로 받은 대상이 배열이 아닐 경우 에러를 생성, 생성한 에러를 반환
// 유효한 인덱스일 경우, 해당 인덱스의 값을 반환하고 그렇지 않으면 에러를 생성하고 생성한 에러를 반환. 