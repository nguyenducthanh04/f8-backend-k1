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


// var content = 'Chủ tịch UBND tỉnh Thừa Thiên-Huế Nguyễn Văn Phương báo cáo về tình tình thực hiện Nghị quyết Đại hội Đảng bộ tỉnh lần thứ XVI nhiệm kỳ 2020-2025 gắn với Nghị quyết Đại hội XIII của Đảng';
// var customer = content.split(' ').slice(0, 24).join(' ');
// console.log(customer);
// document.write(customer);

// //Vòng lặp reduce
// var numbers = [2, 5, 7, 8, 9, 100];
// var searchMax = numbers.reduce(function(prev, current){
//   max = prev;//2
//   if(prev < current){
//     //2      //5
//     max = current;//5
//   } //Lần lượt lặp cho đến ptu cuối 
//   return max;
//   //Cách 2 dùng toán tử 3 ngôi
//   //return prev > current ? prev : current;
// });
// console.log(searchMax);


// var arr1 = [1, 2, 5, 7, 9];
// var arr2 = [1, 5, 2];
// var newArr = arr1.reduce(function(prev, current){
//     // if(!arr2.includes(current)){
//     //   prev.push(current);
//     // }
//     // return prev;
//     return !arr2.includes(current) && prev.push(current), prev;
// }, []);
// console.log(newArr);