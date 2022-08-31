let a = "age";

const user = {
  name : "jason",
  age : 25 
  // age 대신 [a] 를 대입해도 된다 --> 대괄호로 감싸면 변수 a 가 대입된다. 이것을 computed property 라고 한다 
}

//대괄호에 식 자체를 대입할 수도 있다.
const method = {
  [2+3] : 5,
  ["안녕하세요"] : "bonjour"
}

console.log(method);

//Object.assign() 객체복제

const assign = {
  name : "jason",
  age : 80
}

//위의 객체를 복제하려면 

const newAssign = Object.assign({},assign);
//                              {}는 초기값 , 두번째 인수부터 병합된다 
newAssign.name = "judy";

// console.log(assign);
// console.log(newAssign);
//assign !==  newAssign 

const assign2 = {
  gender : "male",
}

const assignSum = Object.assign(assign, assign2);
console.log(assignSum);