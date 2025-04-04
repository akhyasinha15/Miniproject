document.addEventListener("DOMContentLoaded", function () {
    fetchAppointments();
    
    document.getElementById("appointmentForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const doctor = document.getElementById("doctor").value;

        const response = await fetch("http://localhost:5000/api/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, date, time, doctor }),
        });

        if (response.ok) {
            alert("Appointment booked successfully!");
            document.getElementById("appointmentForm").reset();
            fetchAppointments();
        } else {
            alert("Error booking appointment.");
        }
    });
});

async function fetchAppointments() {
    const response = await fetch("http://localhost:5000/api/appointments");
    const appointments = await response.json();

    const appointmentsList = document.getElementById("appointmentsList");
    appointmentsList.innerHTML = "";

    appointments.forEach((appointment) => {
        const li = document.createElement("li");
        li.textContent = `${appointment.name} - ${appointment.email} - ${appointment.date} - ${appointment.time} - ${appointment.doctor}`;
        appointmentsList.appendChild(li);
    });
}
