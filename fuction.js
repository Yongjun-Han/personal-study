function sayBye(name = "friends"){
  let msg = `Hello, ${name}`
console.log(msg);
}

sayBye();
sayBye("tom");

let add1  = function(a,b) {
  return a+b ;
}
//function 이 사라지고 화살표함수가 생김 
let add2 = (a,b) => {
  return a+b
}
//코드 본문이 한줄이고 리턴문이 있기때문에 return 을 소괄호로 바꿀수 있다. --여기 
let add3 = (a,b) => (a+b)
//return 이 한줄이면 괄호도 생략가능
let add4 = (a,b) => a+b;
//인수가 하나라면 괄호도 생략 가능 
let sayBye = name => `Bye,${name}`;

//인수가 없다면 괄호 생략 불가 
let showError = () => { 
  alert('error')
}

let add = function(a,b) {
  const result = a+b;
  return result;
}
//return 이 있어도 그 전에 여러줄의 코드가 있다면 소괄호로 변경 불가  --여기 
let addd= (a,b) => {
  const result = a+b;
  return result;
}

//함수 표현식
showName(); 
// --> 표현식일때 showName 은 아직 선언되지 않아서 error 가 난다 

//함수를 선언하고  변수에 할당 
let showName1 = function() {
  console.log('name');
}

//함수 선언문 

function showName2() {
  console.log('name');
}

//화살표 함수 
let showName3 = () => {
  console.log("name")
}

const sayhello1 = function(name) {
  const msg = `hello , ${name}`;
  console.log(msg);
}

//화살표 함수로 

const sayHello2 = (name) => {
  const msg = `hello , ${name}`;
  console.log(msg);
}


const add11 = function(num1,num2) {
  const result = num1+num2;
  return result;
};

//화살표 함수로 

const add22 = (num1,num2)=> {
  const result = num1+num2;
  return result;
}

// return 한줄로 변경 
const add222 = (num1,num2)=> {
  return  num1+num2;
}

//return 이 한줄이면 중괄호를 소괄호로 
const add2222 = (num1,num2)=> (num1+num2);

const add22222 = (num1,num2) => num1+num2;


//콜백함수 코딩애플 
// 정의 : 함수에 파라미터로 들어가는 함수 
// 용도 : 순차적으로 실행하고 싶을때 사용한다 


document.querySelector(".button").addEventListener("click", function() {
  //얘 함수임                함수의 파라미터에 함수 = "콜백함수 "
  
}) //클릭을 했을때  코드 실행 -> 순차적

setTimeout(function() {
           // 콜백함수 

},1000); //1초 경과후에 코드 실행 -> 순차적 

// 콜백 함수의 자리에는 다른곳에서 만든 함수명을 불러올수도있고, 
// 콜백함수 자리에서 함수를 작명해도 되고 
// 콜백함수를 아무곳에나 쓰는것은 아니고 넣어야 하는 함수가 정해져 있다?


function first(parameter) {
  console.log(1)
  parameter();
}
function second () {
  console.log(2)
}

first(second);
// 함수 first 실행해주세요 근데 파라미터는 second 함수에요!
// function first() {
//   second()
// }
