<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" />
    <title>lab4</title>
</head>
<body>
<ul>
    <li><a class="menu" href="admin.php">Admin</a></li>
</ul>

<?php

$servername = "localhost";
$username = "user";
$password = "1234";
$dbname = "lab4";
$port = 8888;

$conn = mysqli_connect($servername, $username, $password, $dbname, $port);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT id, news_title, news_text FROM news";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo '<h1>' . $row["news_title"] . '</h1>';
        echo '<p>' . $row["news_text"] .  '</p>';
    }
} else {
    echo "<h1>No news</h1>";
}

mysqli_close($conn);

?>

</body>
</html>

