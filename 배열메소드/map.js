// map 은 함수를 받아 특정 기능을 시행하고 새로운배열을 반환한다.

const userList = [
  {name : 'mike', age : 17},
  {name : 'mikel', age : 27},
  {name : 'mikelen', age : 37}
];

const newUserList = userList.map((user,index)=>{
  return Object.assign({},user,{
    isAdult : user.age >19,
  })
})

console.log(newUserList);
console.log(userList);
