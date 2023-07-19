//Bai 1
function Customer(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  
  const memberOne = new Customer("Nguyễn Văn A", 11, "Ha Noi");
  const memberTwo = new Customer("Nguyễn Văn B", 2, "Hai Phong");
  const memberThree = new Customer("Nguyễn Văn C", 12, "TP.HCM");
  
  const customers = [
    memberOne,
    memberTwo,
    memberThree
  ];
  
  function createCustomers(customers) {
    customers.forEach((customer) => {
      const nameArr = customer.name.split(" ");
      customer.shortName = nameArr[0] + " " + nameArr[nameArr.length - 1];
    });
    return customers.sort((memberOne, memberTwo) => memberOne.age - memberTwo.age);
  }
  
  const result = createCustomers(customers);
  console.log(result);

//Bai 2

const data = [];
function User(name, email, password) {
  this.name = name;
  this.password = password;
  this.email = email;
}

function handleRegister(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;

  const result = data.filter(function (user) {
    return user.email === email;
  });

  if (name === undefined || password === undefined || email === undefined) {
    return "Dữ liệu không hợp lệ, đăng ký không thành công";
  }
  else if(result.length !== 0){
    return "Tài khoản đã tồn tại";
  } 
  else {
    console.log("Đăng ký thành công");
    const user = new User(name, email, password);
    user.role = "User";
    data.push(user);
    return data;
  }
}

console.log(handleRegister("hehehe", 188290));
console.log(handleRegister("Đức Thanh", "dducthanh04@gmai.conm", 79797979));
console.log(handleRegister("Thanh Tùng", "thanhtung7979@gmail.conm", 86868686));
console.log(handleRegister("Quốc Minh", "qminh04@gmai.conm", 69696969));

function handleLogin(email, password) {
  this.email = email;
  this.password = password;

  const result = data.filter(function (user) {
    return user.email === email && user.password === password;
  });

  if (result.length === 0) {
    return "Thông tin đăng nhập không hợp lệ";
  } else return result;
}

console.log(handleLogin("abcgdds@gmail.comz", 5465646));
console.log(handleLogin("xyzah@gmail.comy", 6565));