//Bài tập 1:
 
     var a = 3;
     var b = 6;
     a = a + b;
     b = a - b;
     a = a- b;
     console.log(a, b);

//Bài tập 2:

    var S = 10 + 20 + 5**10 / 2;
    console.log(`Kết quả của tổng S là ${S}`);

//Bài tập 3:
    var a = 3, b = 6, c = 10;
    var max = a;
    if(b > max) {
        max = b;
    }
    if(c > max) {
        max = c;
    }
    console.log(`Số lớn nhất trong 3 số là ${max}`);

//Bài tập 4:
     var a = 3;
     var b = -8;
     if(a * b > 0) {
        console.log("a và b cùng dấu");
     }
     else {
        console.log("a và b khác dấu");
     }
//Bài tập 5:
     var a = 5, b = 9, c = 12;
    if(a > b) {
    var temp = a;
    a = b;
    b = temp;
  }
    if(b > c) {
    var temp = b;
    b = c;
    c = temp;
    }
   if(a > b) {
   var temp = a;
   a = b;
   b = temp;
  }
   console.log(`Thứ tự tăng dần của 3 số là: ${a}, ${b}, ${c}`);