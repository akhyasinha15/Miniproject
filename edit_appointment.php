<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "appointment_db";

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get appointment ID
$id = $_GET['id'];
$sql = "SELECT * FROM appointments WHERE id=$id";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
?>

<form action="update_appointment.php" method="POST">
    <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
    
    <label>Name:</label>
    <input type="text" name="name" value="<?php echo $row['name']; ?>" required>
    
    <label>Email:</label>
    <input type="email" name="email" value="<?php echo $row['email']; ?>" required>
    
    <label>Phone:</label>
    <input type="text" name="phone" value="<?php echo $row['phone']; ?>" required>
    
    <label>Date:</label>
    <input type="date" name="date" value="<?php echo $row['date']; ?>" required>
    
    <label>Time:</label>
    <input type="time" name="time" value="<?php echo $row['time']; ?>" required>
    
    <label>Message:</label>
    <textarea name="message"><?php echo $row['message']; ?></textarea>

    <button type="submit">Update</button>
</form>
