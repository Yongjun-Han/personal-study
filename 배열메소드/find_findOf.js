//indexof 보다 복잡한 연산이 가능하도록 함수를 지원한다 
// 첫번째 true 값만 반환  없으면 undefined 반환
let arr = [1,2,3,4,5];

const result = arr.find(function(item) {
  return item % 2 === 0;
})

//첫번째 짝수를 반환 --> 2

// 해당인덱스를 반환하고 없으면 undefined  반환
const userList = [
  {name : 'mike', age : 17},
  {name : 'mikel', age : 27},
  {name : 'mikelen', age : 37}
];

const result2 = userList.find((user)=> {
  if(user.age < 19) {
    return true;
  } 
  return false;
})
console.log(result2);

//findIndex

const userList2 = [
  {name : 'tike', age : 27},
  {name : 'tikel', age : 27},
  {name : 'tikelen', age : 37}
];

const result3 = userList2.findIndex((user)=> {
  if(user.age < 19) {
    return true;
  } 
  return false;
})
console.log(result3);
//true 가 없다면 -1 반환 
