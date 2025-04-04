const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shobit@123",
  database: "appointments_db",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// API to save appointment
app.post("/api/appointments", (req, res) => {
  const { name, email, date, time, doctor } = req.body;
  const sql = "INSERT INTO appointments (name, email, date, time, doctor) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, email, date, time, doctor], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Appointment added successfully!" });
  });
});

// API to fetch all appointments
app.get("/api/appointments", (req, res) => {
  const sql = "SELECT * FROM appointments";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
