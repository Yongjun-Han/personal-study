//sort -- 요소를 문자열로 취급하여 배열을 재정렬한다 : 배열 자체가 변경된다 . 함수를 인수로 받는다 

let arr = [1,5,4,3,8,5]; //문자열 숫자 모두 가능 
arr.sort();
console.log(arr); //[ 1, 3, 4, 5, 5, 8 ]



let arr2 = [5,25,4,15]; // sort 하면 [ 15, 25, 4, 5 ]


function calc(a,b) {

  console.log(a,b);
  return a-b;

} //Lodash 라이브러리 

arr2.sort(calc);

console.log(arr2);





