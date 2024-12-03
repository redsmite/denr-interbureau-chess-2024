// Target date and time: November 26, 2024, 9:30 AM
const targetDate = new Date("November 28, 2024 09:30:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime(); // Current time
  const timeDifference = targetDate - now; // Time difference in milliseconds

  if (timeDifference <= 0) {
    // Countdown complete
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = `<a href="https://flipsimu.com/" target="_blank" class="custom-link-btn">TOSS COIN</a>
`;
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the HTML
  document.getElementById("jsDays").textContent = days;
  document.getElementById("jsHours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("jsMinutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("jsSeconds").textContent = seconds.toString().padStart(2, "0");
}, 1000);
