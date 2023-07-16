//Bài 1 
 var myNumber = [1, 9, 6, 8, 12];
 var max = myNumber[0];
 var addressMax = [0];
 var min = myNumber[0];
 var addressMin = [0];
 for(var i = 0; i < myNumber.length; i++) {
    if(max < myNumber[i] ){
        max = myNumber[i];
        addressMax = [i];
    }
    if(min > myNumber[i]) {
        min = myNumber[i];
        addressMin = [i];
    }
 }
 console.log(`Số lớn nhất là ${max} tại vị trí ${addressMax}`);
 console.log(`Số nhỏ nhất là ${min} tại vị trí ${addressMin}`);

//Bài 2
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function isNum(n) {
    if(n < 2) {
        return false;
    }
    for(var i = 2; i <= Math.sqrt(n); i++) {
    
        if(n % 2 === 0) {
           return false;
       }
   }
           return true;
   
}
function isArray(num) {
    var S = 0;
    var count = 0;
 num.forEach(function(a){
    if(isNum(a)){
        S += a;
        count++;
    }
});
if(count === 0) {
    return `Không có số nguyên tố`;
}
    return parseFloat(S / count);

}
console.log(`Trung bình số nguyên tố là: ${isArray(num)}`);

//Bài 3

var names = [
    'Thanh',
    'Đức',
    'Thanh',
    'Nam',
]
var newNames = [...new Set(names)];
console.log(newNames);

//Bài 4

var numbers = [5, 1, 9, 8, 10];
var element = 4;
numbers.sort(function(a, b){
    if(a > b) {
        return 1;
    }
    return -1;
});
var i = 0;
while (numbers[i] < element){
    i++;
}
numbers.splice(i, 0, element);
console.log(numbers);


