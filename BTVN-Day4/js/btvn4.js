//Bai 1

var n = 10;
var numBer = [];
var fibonacci = function (n){
    if(n === 0) {
        return 0;
    }
    if( n === 1 || n === 2) {
        return 1;
    }
    return fibonacci (n - 1) + fibonacci (n - 2);
};
for( var i = 0; i <= n; i++) {
    var a = fibonacci(i);
    numBer.push(a);
}
console.log(`Dãy số là: ${numBer}`);

//Bai 2

function reverseNum(number) {
    var reverse = 0;
  
    while (number !== 0) {
      var num = number % 10;
      reverse = reverse * 10 + num;
      number = Math.floor(number / 10);
    }
  
    return reverse;
  }
  
  var number = 12345;
  var reversedNumber = reverseNum(number);
  
  console.log(reversedNumber);

  //Bai 3

  function convertNumberToWords(number) {
    var result = "";
  
    if (number === 0) {
      return "không";
    }
  
    var units = [
      "",
      "một",
      "hai",
      "ba",
      "bốn",
      "năm",
      "sáu",
      "bảy",
      "tám",
      "chín",
    ];
    var names = [
      "",
      "mười",
      "hai mươi",
      "ba mươi",
      "bốn mươi",
      "năm mươi",
      "sáu mươi",
      "bảy mươi",
      "tám mươi",
      "chín mươi",
    ];
  
    var thousands = Math.floor(number / 1000);
    var hundreds = Math.floor((number % 1000) / 100);
    var namesAndUnits = number % 100;
  
    if (thousands > 0) {
      result += units[thousands] + " nghìn ";
    }
  
    if (hundreds > 0) {
      result += units[hundreds] + " trăm ";
    }
  
    if (namesAndUnits > 0) {
      if (namesAndUnits < 10) {
        result += units[namesAndUnits];
      } else if (namesAndUnits < 20) {
        result += "mười " + units[namesAndUnits % 10];
      } else {
        result +=
          names[Math.floor(namesAndUnits / 10)] + " " + units[namesAndUnits % 10];
      }
    }
  
    return result.trim();
  }
  
  var number = 3345;
  var words = convertNumberToWords(number);
  
  console.log(words);