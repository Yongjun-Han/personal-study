//reduce : 인수로 함수를 받는다 .

const arr = [1,2,3,4,5];

// 배열의 모든 값을 더하는방법 

// let result = 0;

// arr.forEach(num => {
//   result += num;
// });


const result = arr.reduce(function(previous,current) {
  return previous + current ;
},0) // 0은 초기값 만약 100이라면 115
console.log(result); //15



const fruits = [
  { name : 'apple', price : 30},
  { name : 'peach', price : 40},
  { name : 'orange', price : 20},
  { name : 'lime', price : 10},
  { name : 'blueberry', price : 20},
  { name : 'cherry', price : 10},
];
// 가격이 10이 넘는 과일 
const resultFruits =  fruits.reduce(function(one,two) {
  if(two.price > 10) {
    one.push(two.name);
  }
  return one;
},[])

console.log(resultFruits)

//5글자 과일 
const resultFruitsName =  fruits.reduce(function(one,two) {
  if(two.name.length === 5) {
    one.push(two.name);
  }
  return one;
},[])

console.log(resultFruitsName)

//reduceRight 는 reduce 와 동일하며 연산을 우측부터 한다 