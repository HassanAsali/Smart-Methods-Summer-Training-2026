<?php
$host = "DATABASE_HOSTNAME";
$user = "DATABASE_USERNAME";
$password = "DATABASE_PASSWORD";
$database = "DATABASE_NAME";

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("Database connection failed.");
}

/* Change the status between 0 and 1 */
if (isset($_GET["toggle"])) {
    $id = (int) $_GET["toggle"];

    $sql = "UPDATE Task2 SET Status = 1 - Status WHERE ID = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);

    header("Location: index.php");
    exit();
}

/* Save a new name and age */
if (isset($_GET["name"]) && isset($_GET["age"])) {
    $name = trim($_GET["name"]);
    $age = (int) $_GET["age"];

    if ($name !== "" && $age > 0) {
        $sql = "INSERT INTO Task2 (Name, Age) VALUES (?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "si", $name, $age);
        mysqli_stmt_execute($stmt);
    }

    header("Location: index.php");
    exit();
}

/* Read all records */
$result = mysqli_query($conn, "SELECT * FROM Task2");
?>

<!DOCTYPE html>
<html>
<head>
    <title>User Information</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<h2>User Information</h2>

<form action="index.php" method="get">
    <label for="name">Name:</label><br>
    <input
        type="text"
        id="name"
        name="name"
        placeholder="Type your name"
        required
    ><br>

    <label for="age">Age:</label><br>
    <input
        type="text"
        id="age"
        name="age"
        placeholder="Type your age"
        required
    ><br><br>

    <input type="submit" value="Submit">
</form>

<h2>User Records</h2>

<table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Status</th>
        <th>Action</th>
    </tr>

    <?php while ($row = mysqli_fetch_assoc($result)) { ?>
        <tr>
            <td><?php echo $row["ID"]; ?></td>
            <td><?php echo htmlspecialchars($row["Name"]); ?></td>
            <td><?php echo $row["Age"]; ?></td>
            <td><?php echo $row["Status"]; ?></td>

            <td>
                <form action="index.php" method="get">
                    <input
                        type="hidden"
                        name="toggle"
                        value="<?php echo $row["ID"]; ?>"
                    >
                    <input type="submit" value="Toggle">
                </form>
            </td>
        </tr>
    <?php } ?>
</table>

</body>
</html>
