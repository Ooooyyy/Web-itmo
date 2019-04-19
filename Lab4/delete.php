<?php

if (isset($_GET['id'])){

    $servername = "localhost";
    $username = "user";
    $password = "1234";
    $dbname = "lab4";
    $port = 8888;

    $conn = mysqli_connect($servername, $username, $password, $dbname, $port);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $id_del = $_GET['id'];

    $sql = "DELETE FROM news WHERE id = '$id_del'";
    $result = mysqli_query($conn, $sql);

    mysqli_close($conn);

    header("Location: admin.php");
}