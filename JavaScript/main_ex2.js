// Task 2: Variables, Data Types, and Arithmetic Operators
// Project Theme: Civic Events Hub

// Step 1: Declare fixed event details with const, and mutable seat count with let
const eventTitle = "Community Food Truck Festival";
const eventSchedule = "August 12, 2026";
let availableSlots = 50;

// Refresh DOM elements with latest values
function refreshView() {
    const titleEl = document.getElementById("event-info");
    const slotEl = document.getElementById("seat-count");

    if (titleEl && slotEl) {
        // Step 2: Build display string using template literals
        titleEl.textContent = `${eventTitle} scheduled on ${eventSchedule}.`;
        slotEl.textContent = availableSlots;
    }
}

// Step 3: Reduce available slots by 1 using decrement operator
function registerSeat() {
    if (availableSlots > 0) {
        availableSlots--;
        refreshView();
    } else {
        alert("Sorry! No seats remaining for this event.");
    }
}

// Increase available slots by 1 using increment operator
function cancelRegistration() {
    if (availableSlots < 50) {
        availableSlots++;
        refreshView();
    } else {
        alert("No current registrations to cancel.");
    }
}

// Trigger initial view once DOM is ready
document.addEventListener("DOMContentLoaded", refreshView);
