// // // for ( var i = 1; i <= 10; i++) {
// // //     console.log(`Xin chào F8 ${i}`);
// // // }
// // // for ( var i = 1; i <= 10; i+=3) {
// // //     console.log(`Xin chào F8 ${i}`);
// // // }
// // // for ( var i = 10; i > 1; i--) {
// // //     console.log(`Xin chào F8 ${i}`);
// // // }

// // for (var i = 1; i <= 5; i++){
// //     for (var j = 1; j <= 5; j++){
// //         for(var k = 1; k <= 5; k++) {
// //             console.log(`i= ${i} - j = ${j} - k = ${k}`);
// //         }
// //     }
// // }
  
// //Bài tập S =  1 + 2 + 3 + 4 +.....+ n
// //n = 20
// // var n = 20;
// // var s = 0;
// //    for(var i = 1; i <= n; i++){
// //       s += i; //Mỗi lần chạy qua cộng thêm giá trị i vào
// //    }
// //    console.log(s);

// // var n = 20;
// // var s = 0;
// // for(var i = 1; i <= n; i+=2) {
// //     s += i;
// // }
// // console.log(s);
// //


// ///baitap3
// //1 + 1 *2 + 1*2*3 + 1*2*3*4 +...+ 1*2*3*4*5*...*n

//  var n = 5;
//  var total = 0;
//  var factorial = 1;
//  for(var i = 1; i <= n; i++ ) {
//     factorial *= i;
//     // console.log(factorial);
//     total += factorial;
//  }
//  console.log(`total = ${total}`);


    // var n = 11, count = 0;
    // if(n <= 1) {
    //     console.log('Không là số nguyên tố');
    // } 
    // else {
    //     for(var i = 2; i <= n - 1; i++) {
    //         if(n % i === 0) {
    //             check = false;
    //             count++;
    //         }
    //     }
    // }




    //Lặp while
    // var n = 10;
    // var i = 1;
    // var total = 0;
    // while (i <= n) {
    //     total += i;
    //     i++;
    // }
    // console.log(`Total = ${total}`);


//    var n = 1;
//    var i = 10;
//    do {
//     console.log(`i = ${i}`);
//    } while (i <= n);


//Từ khóa continue 
for (var index = 1; index <= 10; index++){
    if (index === 5) {
        continue;
    }
    console.log(`Thanh = ${index}`);
    console.log(`F8 = ${index}`);
}
//Break
var n = 9;
var start = 1;
var end = 5;
var result = null;
for(var index = start; index <= end; index++) {
    if(index % 2 === 0) {
        result = index;
        break;
    }
}
console.log(`Result = ${result}`);