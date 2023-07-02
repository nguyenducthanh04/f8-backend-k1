// Định nghĩa hàm
// function getMessage(){
    //Nội dung hàm
    // console.log('Hello F8');
// }
// getMessage();
// function setMessage(){
//     console.log('Khóa học BE NodeJS');
// }
// setMessage();
// function getMessage(msg, type) {
//     console.log(`Xin chào F8 ${msg}`);
//     console.log(`Type = ${type}`);
// }
// getMessage('Đức Thanh', 'success');



//Return 
function getTotal(a, b = 0) {
    if(b !== 0) {
        return a + b;
    }
    return `Không có kết quả`
}
console.log(`Total = ${getTotal(8, 12)}`);


function getTotal(a, b ){
    var total = a + b; //total biến cục bộ
    return total;
}
console.log(`total = ${getTotal(5, 10)}`);


var msg = 'F8 - Học lập trình để đi làm';
function getMessage() {
    return msg;
}
console.log(`Message = ${getMessage()}`);

var getMessage = function (msg) {
    return `F8-Học lập trình: ${msg}`;
}
console.log(getMessage('Thanh Nguyễn'));

var A = function () {
    console.log(`A Func`);
};
var B = function (fn){
    fn();
};
// B(A);
B(function ()
{
    console.log(`F8-Học lập trình`);
}
);

var makeTotal = function () {
    console.log(arguments);

};
makeTotal(1, 5, 2, 10, 8);
//Buổi sau: Callback, closure, đệ quy