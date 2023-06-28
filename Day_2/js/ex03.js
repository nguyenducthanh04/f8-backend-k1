//Nullish
// var a = false;
// console.log(a);
// var b = a ?? 'Khong co gi';
// console.log(b);
//Chuyen nullish thanh toan tu 3 ngoi
// var a;
// var b = a !== undefined && a !== null ? a : 'Khong co gi';
// console.log(b); 
// Toán tử &&
// var a = 0;
// // var result = a >= 1 && 'F8-Hoc lap trinh';
// var result = a && 'F8-Hoc lap trinh';
// console.log(result);
//Câu lệnh rẽ nhánh
//if else ===> if(condition){
    //body
//}
/* if(){
    //
}
else {
    //
}
*/
//switch case
// var age = 2;
// if (age >= 20) {
//     console.log('Đủ tuổi lấy vợ');
// }
//  else {
//    console.log('Chưa đủ tuổi');
//  }
 


//Btap tinh luong
/*
Input : Bien luongcoban, thue
Output: Tinh luong thuc nhan
Công thức 
- Lương <= 5tr ==> Thuế = 5%;
- Lương > 5tr và <= 10tr => Thuế = 7%
- Lương trên 10tr ==> Thuế = 10%
Lương thực nhận = lương cơ bản - thuế
 */
// var luongcoban, thue, luongthucnhan;
// var luongcoban = 5
// if(luongcoban <= 5) {
//     luongthucnhan = luongcoban - luongcoban*5/100;
// }
//   else {
//     if(luongcoban > 5 && luongcoban <= 10) {
//         luongthucnhan = luongcoban - luongcoban*7/100;
//     }
//     else {
//         luongthucnhan = luongcoban - luongcoban*10/100;
//     }
//   }
//   console.log(luongthucnhan);

//Switch case 
/*
Chỉ chấp nhận biểu thức logic(===)
Áp dụng khi có quá nhiều nhánh, điều kiện OR
 */
// var action = 'edit';
// if(action === 'add' || action === 'create' || action === 'insert') {
//     console.log('Thêm');
// }
// else if(action === 'update' || action === 'edit'){
//     console.log('Sửa');
// }
// else if(action === 'delete' || action === 'destroy' || action === 'remove') {
//    console.log('Xóa');
//  }
//  else {
//     console.log('Xem');
//  }
//Bài tập : Cho trước 1 tháng ==> hiển thị tháng đó có bnhieu ngày
/*
Tháng 31 ngày : 1, 3, 5, 7, 8, 10, 12
Tháng 30 ngày : 4, 6, 9 ,11
Tháng 28, 29 ngày :
+ 28 ngày : Năm k chia hết cho 4
+ 29 ngày : Năm chia hết cho 4
 */
var day, month, year;
var month = 3;
var year = 2023;
if (month % 1 === 0 && year % 1 === 0 && month >= 1 && month <= 12){
    switch(month) {
        case 2: 
        if(year % 4 === 0){
            day = 29;
        }
        else {
            day = 28;
        }
        break;
        case 4:
        case 6:
        case 9:
        case 11:
        day = 30;
        break;
        default:
       day = 31;
       break;
     }
     if(day){
        console.log(`Tháng ${month} trong năm ${year} có ${day} ngày`);
     }
} else {
    console.log('Không hợp lệ')
}
 //Tìm hiểu vòng lặp for, while, do while