'use script';
function success() {
    let login = [];
    let value1=document.getElementById("email").value;
    let value2=document.getElementById("pass").value;
    login.push(value1);
    login.push(value2);
    console.log(login);


    alert("You have Logged in!");

}
