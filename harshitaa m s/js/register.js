$(document).ready(function() {
  // Initialize user data array
  var userData = [];
  
  // Check if user data is stored in local storage and load it into userData array if present
  if (localStorage.getItem("userData")) {
      userData = JSON.parse(localStorage.getItem("userData"));
  }
  $("#uname").on("input",function() {
    // Get entered username
    var count=0;
    var uname = $("#uname").val();
    uname=uname.toLowerCase()
    let ue=""
    console.log(uname+uname.toLowerCase());
    for (var i = 0; i < userData.length; i++) {
      ue=String(userData[i].uname).toLowerCase()
      console.log(ue+"==="+uname);
      if (ue == uname) {
        count=count+1;
      }}

    // Log result to console
    if (count!=0) {
      $("#u").text("User Name Already Exists!");
      console.log("Username already exists");
    
    } else {
      console.log("Username does not exist");
    }
  });
  $("#email").on("input",function() {
    // Get entered username
    var email = $("#email").val();
    var count1=0;
    for (var i = 0; i < userData.length; i++) {
      if (String(userData[i].email).toLowerCase() === email.toLowerCase()) {
        count1=count1+1;
      }}

    // Log result to console
    if (count1!=0) {
    $("#ee").text("email already exists");
      console.log("email already exists");
    } else {
      $("#ee").text("email does not exists");
      console.log("email does not exist");
    }
  });

  // Trigger the submit button
  $("#sub").click(function() {
      // Get form data
      
      var uname = $("#uname").val();
      var email = $("#email").val();
      var pwd = $("#pwd").val();
      var confirmpwd = $("#confirmpwd").val();

      // Validate input fields
      if (uname == "" || email == "" || pwd == "" || confirmpwd == "") {
          alert("All fields are required!");
          return false;
      } else if (pwd != confirmpwd) {
          alert("Passwords do not match!");
          return false;
      }

     // var hashedPwd = sha256(pwd);
 

      // Add user data to userData array
      userData.push({
          "uname": uname,
          "email": email,
          "pwd": pwd
      });

      // Save userData array to local storage
      localStorage.setItem("userData", JSON.stringify(userData));


      // Create a new XMLHttpRequest object
      var xhttp = new XMLHttpRequest();

      // Define the function to be called when the response is received
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              // Display success message
              alert(this.responseText);
              window.location.href="./login.html";
          } else if (this.readyState == 4) {
              // Display error message
              alert("Error sending data!");
          }
      };

      // Open a POST request to the server
      xhttp.open("POST", "./php/register.php", true);

      // Set the content type of the request
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      // Send the form data to the server
      xhttp.send("uname=" + uname + "&email=" + email + "&pwd=" + pwd + "&confirmpwd=" + confirmpwd);
      
  });
});