//Bài 1
var n = 10;
var evenNumber= "";
var oddNumber = "";
if(Number.isInteger(n) && n > 0) {
for(var i = 1; i <= n; i++) {
    if(i % 2 === 0) {
        evenNumber += i + " ";
    }
    else {
        oddNumber += i + " ";
    }
}
console.log(`Số chẵn là: ${evenNumber}`);
console.log(`Số lẻ là: ${oddNumber}`);
}
//Bài 2
var n = 8;
var S = 0;
if (Number.isInteger(n) && n > 0) {
for (var i = 1; i <= n; i++) {
    S += i * (i + 1);
}
}
console.log(`Tổng của S là ${S}`);
//Bài tập 3
var a = 5;
var b = 9;
var evenTotal = 0;
var oddTotal = 0;
for (var i = a; i <= b; i++) {
    if(i % 2 === 0) {
    evenTotal += i;
}
  } 
  console.log(`Tổng số chẵn là: ${evenTotal}`);
  for(var i = a; i <= b; i++ ) {
    if(i % 2 !== 0) {
        oddTotal += i;
    }
  }
console.log(`Tổng số lẻ là: ${oddTotal}`);
//Bài tập 4
 function getPrime() {
    if(n === 1)
    {
        return false;
    }

    for(var i = 2; i <= Math.sqrt(n); i++)
    {
        if(n % i === 0)
        {
            return false;
        }
    }
    return true;
 }
 var n = 7;
 if(Number.isInteger(n) && n > 0)
 {
    if(getPrime(n))
    {
        console.log(`${n} là số nguyên tố`);
    }
    else
    {
        console.log(`${n} không là số nguyên tố`);
    }
 }
 else
 {
    console.log('Số không hợp lệ');
 }
//Bài 5
var S = 0;

function total(n) {
  if (n <= 0) {
    return;
  }

  S += 1 / n;
  total(n - 1);
  return S;
}
console.log(total(4));

