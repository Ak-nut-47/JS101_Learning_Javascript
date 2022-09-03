let storedName = "akish123@ymail.com";
let storedPassword = "***_***_***_*";

let inputUname = "akish123@ymail.com"
let inputPwd = "***_***_***";

if (inputUname === storedName && inputPwd === storedPassword) {
  console.log("Login Successful");
} else if (inputUname === storedName && inputPwd !== storedPassword) {
  console.log("Incorrect Password");
} else {
  console.log("Invalid Credentials");
}