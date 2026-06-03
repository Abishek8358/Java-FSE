// Task 6: Array Methods — push(), filter(), map()
// Project Theme: Civic Events Hub

// Initial collection of civic events stored as an array of objects
let eventRegistry = [
    { name: "Jazz Picnic",       category: "Music"    },
    { name: "Baking Bread",      category: "Workshop" },
    { name: "Guitar Basics",     category: "Music"    },
    { name: "Digital Painting",  category: "Workshop" }
];

// Step 1: Append a new event object to the array using .push()
function addNewEvent(title, type) {
    if (!title || !type) return;

    // Build new entry and push it into the array
    eventRegistry.push({ name: title, category: type });

    // Re-render both display panels
    renderLists();
}

// Render all-events list and music-only list
function renderLists() {
    const allPanel  = document.getElementById("all-events-list");
    const musicPanel = document.getElementById("music-events-list");

    if (!allPanel || !musicPanel) return;

    // Step 2: Transform every entry into an HTML card using .map()
    const allCards = eventRegistry.map(function(item) {
        const label = item.category === "Workshop" ? "Workshop on " : "Session of ";
        return `
            <div class="event-pill-item">
                <span class="pill-category">${item.category}</span>
                <strong style="color: #ffffff;">${label}${item.name}</strong>
            </div>
        `;
    });

    allPanel.innerHTML = allCards.join("");

    // Step 3: Narrow the array to Music entries only using .filter()
    const musicOnly = eventRegistry.filter(function(item) {
        return item.category === "Music";
    });

    // Then format the filtered results using .map()
    const musicCards = musicOnly.map(function(item) {
        return `
            <div class="event-pill-item music">
                <span class="pill-category music">Music</span>
                <strong style="color: #ffffff;">Session of ${item.name}</strong>
            </div>
        `;
    });

    musicPanel.innerHTML = musicCards.join("") || '<div class="text-muted">No music events active.</div>';
}

document.addEventListener("DOMContentLoaded", renderLists);
