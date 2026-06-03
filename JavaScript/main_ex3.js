// Task 3: Control Flow, Loops, and Exception Handling
// Project Theme: Civic Events Hub

// Step 1: Define a dataset with upcoming, past, and full events
const upcomingEvents = [
    { id: 101, name: "Summer Jazz Picnic",     date: "August 18, 2026",    slots: 15, expired: false },
    { id: 102, name: "Sunset Beach Yoga",      date: "June 05, 2025",      slots: 30, expired: true  }, // Past event
    { id: 103, name: "Civic Hackathon",        date: "September 22, 2026", slots: 0,  expired: false }, // Fully booked
    { id: 104, name: "Home Baking Workshop",   date: "October 10, 2026",   slots: 5,  expired: false },
    { id: 105, name: "Neighborhood Cleanup",   date: "May 10, 2025",       slots: 0,  expired: true  }  // Expired & Full
];

// Step 2: Iterate through events and render only valid upcoming ones with open slots
function buildEventList() {
    const displayArea = document.getElementById("events-container");
    if (!displayArea) return;

    displayArea.innerHTML = ""; // Clear placeholder text

    upcomingEvents.forEach(function(ev) {
        // Condition: skip past events and fully booked ones
        if (!ev.expired && ev.slots > 0) {
            const tile = document.createElement("div");
            tile.className = "event-item";
            tile.innerHTML = `
                <h4 style="margin: 0 0 8px 0; color: #f8fafc;">${ev.name}</h4>
                <div style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 12px;">Date: ${ev.date}</div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: #10b981; font-size: 0.9rem; font-weight: 600;">Seats Left: ${ev.slots}</span>
                    <button class="register-btn" onclick="processBooking(${ev.id})">Register</button>
                </div>
            `;
            displayArea.appendChild(tile);
        }
    });
}

// Step 3: Wrap booking logic inside try-catch to handle runtime errors safely
function processBooking(targetId) {
    const selectedEvent = upcomingEvents.find(function(ev) { return ev.id === targetId; });
    const msgBox = document.getElementById("registration-feedback");

    try {
        if (!selectedEvent) {
            throw new Error("Event not found in repository.");
        }
        if (selectedEvent.expired) {
            throw new Error("Registration closed. This is a past event.");
        }
        if (selectedEvent.slots <= 0) {
            throw new Error(`Registration failed. "${selectedEvent.name}" is completely full.`);
        }

        // On success: decrement slot count and refresh the list
        selectedEvent.slots--;
        msgBox.className = "feedback success";
        msgBox.textContent = `Successfully registered for "${selectedEvent.name}"! Seat confirmed.`;
        buildEventList();

    } catch (err) {
        // Display caught error message in the UI
        msgBox.className = "feedback error";
        msgBox.textContent = `Error: ${err.message}`;
    }
}

document.addEventListener("DOMContentLoaded", buildEventList);
