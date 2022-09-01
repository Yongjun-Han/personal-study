let arr = [1,2,3,4,5];

const result = arr.filter(function(item) {
  return item % 2 === 0;
})

console.log(result)

// find 는 첫번째 true 만 반환 filter 는 true 값 모두 반환