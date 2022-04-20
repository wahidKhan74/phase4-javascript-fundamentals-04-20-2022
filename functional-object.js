// object literals
let user = {
    id : 10001,
    username: "johnsmith",
    password : "john@123",
    email :"john@magical.com"
}

console.log(user);

function UserInfo(id,username,password,email) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
}

let userInfo = new UserInfo(10001,"mikesmith","mik@123","mik.smith@gmail.com");

console.log(userInfo);