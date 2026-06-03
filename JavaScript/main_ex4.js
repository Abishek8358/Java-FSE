// Task 4: Functions, Scope, Closures, and Higher-Order Functions
// Project Theme: Civic Events Hub

// Application state: list of available events
let eventCatalog = [
    { id: 1, name: "Summer Jazz Picnic",  category: "Music",       seats: 15 },
    { id: 2, name: "Civic App Hackathon", category: "Technology",  seats: 10 },
    { id: 3, name: "Home Baking Workshop",category: "Education",   seats: 8  }
];

// Step 1: Closure — wraps a private counter per category inside a returned function
function buildRegistrationTracker(label) {
    let bookingCount = 0; // Enclosed private variable — not accessible from outside

    return function () {
        bookingCount++;
        return `Total registrations in "${label}": ${bookingCount}`;
    };
}

// Pre-initialise trackers for default categories
const trackerMap = {
    "Music":      buildRegistrationTracker("Music"),
    "Technology": buildRegistrationTracker("Technology"),
    "Education":  buildRegistrationTracker("Education")
};

// Step 2: Add a new event entry to the catalog
function addEvent(name, category, seats) {
    const entry = {
        id: eventCatalog.length + 1,
        name: name,
        category: category,
        seats: parseInt(seats) || 10
    };
    eventCatalog.push(entry);

    // Dynamically create a tracker if the category is new
    if (!trackerMap[category]) {
        trackerMap[category] = buildRegistrationTracker(category);
    }

    drawEventList();
}

// Step 3: Book a seat and invoke the closure-based tracker
function registerUser(eventId) {
    const target = eventCatalog.find(function(e) { return e.id === eventId; });

    if (target && target.seats > 0) {
        target.seats--;

        let statusText = "Category statistics unavailable.";
        if (trackerMap[target.category]) {
            statusText = trackerMap[target.category](); // Calls closure, bumps private count
        }

        const statPanel = document.getElementById("tracker-stats");
        if (statPanel) {
            statPanel.textContent = statusText;
            statPanel.style.display = "block";
        }

        drawEventList();
    }
}

// Step 4: Higher-Order Function — accepts a callback to determine filtering logic
function applyFilter(matchFn) {
    return eventCatalog.filter(matchFn);
}

// Rebuild the events table in the DOM
function drawEventList() {
    const container = document.getElementById("functional-list");
    if (!container) return;

    container.innerHTML = "";

    eventCatalog.forEach(function(ev) {
        const row = document.createElement("div");
        row.className = "event-row";
        row.innerHTML = `
            <div>
                <strong style="color: #f8fafc;">${ev.name}</strong>
                <span class="category-pill">${ev.category}</span>
            </div>
            <div>
                <span style="color: #94a3b8; margin-right: 15px; font-size: 0.85rem;">Seats: ${ev.seats}</span>
                <button class="book-btn" onclick="registerUser(${ev.id})">Register</button>
            </div>
        `;
        container.appendChild(row);
    });
}

// Apply filter and display matching results
function triggerFilter(criteria) {
    const outputBox = document.getElementById("filter-output");
    if (!outputBox) return;

    let matchFn;
    if (criteria === "all") {
        matchFn = function() { return true; };
    } else {
        matchFn = function(ev) { return ev.category === criteria; };
    }

    const matched = applyFilter(matchFn);

    outputBox.innerHTML = matched.map(function(r) {
        return `<div class="filter-item">${r.name} (${r.category})</div>`;
    }).join("") || '<div class="filter-item text-muted">No matching events.</div>';
}

// Initialise page
document.addEventListener("DOMContentLoaded", function () {
    drawEventList();
    triggerFilter("all");
});
