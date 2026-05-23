function login(){

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // Username and Password
  let correctUser = "MK";
  let correctPass = "12345";

  if(user === correctUser && pass === correctPass){

    // Open index.html
    window.location.href = "index.html";

  }else{

    document.getElementById("error").innerHTML =
    "Invalid Username or Password";

  }

}