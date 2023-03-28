$(document).ready(function() {
    $("#sub").click(function() {
      var uname = $("#uname").val();
      var pwd = $("#pwd").val();
      var userData = JSON.parse(localStorage.getItem("userData"));
  
      if (userData) {
        for (var i = 0; i < userData.length; i++) {
          if (uname === userData[i].uname && pwd === userData[i].pwd) {
            alert("Logged in successfully!");
            window.location.href = "./profile.html";
            return;
          }
        }
        alert("Invalid username or password.");
      } else {
        alert("No user data found.");
      }
    });
  });
  