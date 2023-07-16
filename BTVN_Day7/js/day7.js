//Bài 1
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var arrC = arrA.reduce(function(prev, current){
    if(arrB.includes(current)){
        prev.push(current);
    }
    return prev;
}, []);
console.log(arrC);

//Bài 2
function mergeArray(arr) {
    return arr.reduce((prev, current) => {
      return prev.concat(Array.isArray(current) ? mergeArray(current) : current)
    }, [])
  }
  
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  console.log(mergeArray(arr))
 
//Bài 3
var arr = [["a", 1, true], ["b", 2, false]];
var newArr = arr.reduce(function(prev, current){
    current.forEach(function(val, index){
      if(!prev[index]){
        prev[index] = [];
      }
      prev[index].push(val);
    })
    return prev;
}, []);
console.log(newArr);