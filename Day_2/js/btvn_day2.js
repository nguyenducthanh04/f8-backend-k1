//Bai tap 1

var soKm, price;
var soKm = 6;
if(soKm <= 1) {
      price = soKm * 15000;
}
else {
      if(soKm > 1 && soKm <= 5) {
            price = 1 * 15000 + (soKm - 1) * 13500;
      }
      else {
            price = 1 * 15000 + (5 - 1) * 13500 + (soKm - 5) * 11000;
            if(soKm > 120) {
                  price = price * (1 - 0.1);
            }
      }
}
console.log(`Giá tiền phải trả là: ${price}`);

//Bai tap 2

var sokWh, price;
var sokWh = 50;
if(sokWh <= 50) {
   price = sokWh * 1678;
}
else 
      if(sokWh > 50 && sokWh <= 100) {
            price = 50 * 1678 + (sokWh - 50) * 1734;
      }
else if(sokWh > 100 && sokWh <= 200) {
      price = 50 * 1678 + 50 * 1734 + (sokWh - 100) * 2014;
}
else if(sokWh > 200 && sokWh <= 300) {
      price = 50 * 1678 + 50 * 1734 + 100 * 2014 + (sokWh - 200) * 2536;
}
else if(sokWh > 300 && sokWh <= 400) {
      price = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (sokWh - 300) * 2834;
}
else {
      price = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2834 + (sokWh - 400) * 2927;
}
console.log(`Giá tiền điện phải trả là: ${price}`);

//Bai tap 3

var n = 6, result = 1;
var i = n
while(i > 1){
    result = result * i
    console.log(result);
    i = i- 1
}
console.log(`Giai thua cua ${n} la ${result}`);

//Bai tap 4

var n = 7, count = 0;

if(n < 2){
    console.log(`${n} không phải là số nguyên tố`);
}
else{
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            count++;
        }
    }
    if(count !== 0){
        console.log(`${n} không là số nguyên tố`);
    }
    else{
        console.log(`${n} là số nguyên tố`);
    }
}