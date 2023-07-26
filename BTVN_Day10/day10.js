//Bai 1
var total = function(...args) {
    var result = 0;
    for(var i = 0; i < args.length; i++) {
        if(typeof args[i] !== 'number') {
            console.log('Dữ liệu không hợp lệ');
        }
        else {
             result += args[i];
        }
    }
    return result;
};
try {
    var result = total(1, 3, 5, 6, 7, 8);
    console.log(result);
} catch (error){
    console.log(error.message);
};

//Bai 2

Callback
function openFile(fn) {
   setTimeout(() => {
    console.log('File đã được mở');
    fn();
   }, 2000);
};
function readFile(fn) {
    setTimeout(() => {
        console.log('F8 - Học lập trình để đi làm');
        fn();
       }, 1000);
};
function closeFile() {
    setTimeout(() => {
        console.log('File đã đóng');
    }, 1000);
}
const run = openFile(() => readFile(() => closeFile() ));

// Promise

function openFile() {
    return new Promise(function(resolve){
        setTimeout(() => {
            var data = 'File đã được mở';
            resolve(data);
        }, 2000);
    });
};
function readFile() {
    return new Promise(function(resolve){
        setTimeout(() => {
            var data = 'F8 - Học lập trình để đi làm';
            resolve(data);
        }, 1000);
    });
};
function closeFile() {
    return new Promise(function(resolve){
        setTimeout(() => {
            var data = 'File đã được đóng';
            resolve(data);
        }, 1000);
    });
};
openFile().then(function(response){
    console.log(response);
    return readFile();
})
 .then(function(response){
    console.log(response);
    return closeFile();
 })
 .then(function(response){
    console.log(response);
 })