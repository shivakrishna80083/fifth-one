
function updateClock() {
    const now = new Date();

    // Get current time
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Convert to 12-hour format
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    const formattedHours = String(hours).padStart(2, "0");

    // Display time
    document.getElementById("clock").textContent =
        `${formattedHours}:${minutes}:${seconds} ${ampm}`;

    // Get day name
    const dayName = now.toLocaleDateString("en-IN", {
        weekday: "long"
    });

    document.getElementById("day").textContent = dayName;

    // Get complete date
    const formattedDate = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    document.getElementById("date").textContent = formattedDate;
}

// Show immediately when the page opens
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
