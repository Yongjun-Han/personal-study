// 생성자 함수 new 의 알고리즘 
//생성자 함수의 이름의 첫 글자는 대문자로 작성하는것이 관례
function User(name,age) {

  //1. 빈객체를 만들고 this ={} 에 할당한다 

  this.name = name;
  this.age = age;
  // 2.함수를 실행하며 this에 porperty들을 추가한다
  // 3. return this; 
  this.sayName = () => {console.log(this.name)}
  //                          여기서의 this 는 user2
}

const user1 = new User("jason", 23);
const user2 = new User("han", 12);

console.log(user1);
user2.sayName();


// 객체리터럴보다 훨씬 편리하고 빠르게 객체를 안정적으로 생성할 수 있으며 유지보수 하기에 좋다 