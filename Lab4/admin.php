<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" />
    <title>Новостной портал</title>
</head>
<body>

<ul>
    <li><a class="menu" href="index.php">Home</a></li>
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

$sql = "SELECT id, news_title, news_text FROM News";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo '<h1>' . $row["news_title"] . '</h1>';
        echo '<p>' . $row["news_text"] .  '</p>';
        echo '<a class="delete_news" href="delete.php?id=' . $row['id'] . '"><button>Удалить</button></a>';
    }
} else {
    echo "<h1>No news</h1>";
}

mysqli_close($conn);

?>

<form action="add.php" method="post">
    <h2>Добавить новость</h2>
    <p>Заголовок новости:</p>
    <input type="text" name="news_title" style="width: 90%; margin-left: 5%" required>
    <p>Новость:</p>
    <textarea name="news_text" rows="7" style="width: 90%; margin-left: 5%" required></textarea>
    <p><button>Добавить</button></p>
</form>


</body>
</html>



