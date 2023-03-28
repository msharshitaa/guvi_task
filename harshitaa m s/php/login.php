<?php
// start session
session_start();

// check if email and password are set
if(isset($_POST['email']) && isset($_POST['pwd'])){
    // get email and password from POST request
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];

    // create database connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "guvi";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // prepare SQL statement with prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM register WHERE email = ? AND pwd = ?");
    $stmt->bind_param("ss", $email, $pwd);
    $stmt->execute();

    // get result
    $result = $stmt->get_result();

    // check if there is a user with the given email and password
    if($result->num_rows == 1){
        // set session variables and redirect to dashboard page
        $user = $result->fetch_assoc();
        $_SESSION['user_id'] = $user['id'];
        echo "success";
    }else{
        echo "Invalid email or password";
    }
    // close database connection
    $stmt->close();
    $conn->close();
}
?> 
