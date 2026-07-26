// This code will generate a username with format: @<username-without-spaces><username-length-without-spaces>

let userName = prompt("Enter Your Full Name");

while (!userName) {
    if (userName === "") {
        userName = prompt("Username Cannot be Empty. Try Again");
    } else if (userName === null) {
        userName = prompt("Username is required. Try Again");
    }
}

let newUserName = userName.replaceAll(" ", "");
let formattedUserName = "@" + newUserName + newUserName.length;
alert("Your Username is: " + formattedUserName);