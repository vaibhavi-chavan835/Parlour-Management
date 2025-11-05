function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  document.getElementById("confirmation").innerText = 
    `✅ Thank you, ${name}! Your ${service} appointment is booked for ${date} at ${time}.`;

  document.getElementById("bookingForm").reset();
});
