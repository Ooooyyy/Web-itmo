<?php

if (isset($_POST['news_title']) && isset($_POST['news_text'])){

    $news_title_news = $_POST['news_title'];
    $news_text_news = $_POST['news_text'];

    $servername = "localhost";
    $username = "user";
    $password = "1234";
    $dbname = "lab4";
    $port = 8888;
    $conn = mysqli_connect($servername, $username, $password, $dbname, $port);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT id FROM news ORDER BY id DESC";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        $id = $row['id'] + 1;
    } else{
        $id = 0;
    }

    $sql = "INSERT INTO news (id, news_title, news_text) VALUES ('$id', '$news_title_news', '$news_text_news')";
    $result = mysqli_query($conn, $sql);

    mysqli_close($conn);

    header("Location: admin.php");
}