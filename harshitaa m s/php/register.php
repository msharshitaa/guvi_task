<?php
// Set database credentials
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "guvi";

// Connect to the MySQL database
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$uname = $_POST["uname"];
$email = $_POST["email"];
$pwd = $_POST["pwd"];
$sql = "INSERT INTO register (name, email, pwd) VALUES ('$uname', '$email', '$pwd')";
if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>
