// Task 5: Object Constructors and Prototypes
// Project Theme: Civic Events Hub

// Step 1: Define a constructor function to create event objects using 'this'
function EventRecord(id, title, scheduledDate, openSlots) {
    this.id = id;
    this.name = title;
    this.date = scheduledDate;
    this.seats = openSlots;
}

// Step 2: Attach a shared method to the prototype (memory-efficient — not copied per instance)
EventRecord.prototype.checkAvailability = function () {
    return this.seats > 0;
};

// Instantiate event records using the constructor
const eventsDatabase = [
    new EventRecord(101, "Acoustic Sunset Concert", "July 12, 2026",    15),
    new EventRecord(102, "Solar Grid Masterclass",  "September 08, 2026", 0), // Sold out
    new EventRecord(103, "Kids Pottery Workshop",   "October 14, 2026",   4)
];

// Step 3: Extract all property key-value pairs using Object.entries() and render them
function inspectEvent(chosenId) {
    const record = eventsDatabase.find(function(e) { return e.id === parseInt(chosenId); });
    const outputPanel = document.getElementById("inspection-output");

    if (!record || !outputPanel) return;

    // Invoke prototype method to check seat availability
    const hasSeats = record.checkAvailability();

    // Convert object to array of [key, value] pairs
    const fieldPairs = Object.entries(record);

    // Build the HTML output
    let tableHtml = `
        <div style="margin-bottom: 15px; padding: 10px; border-radius: 6px; background-color: ${hasSeats ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'}; color: ${hasSeats ? '#10b981' : '#f87171'}; text-align: center; font-weight: 600;">
            Prototype checkAvailability(): ${hasSeats ? 'SEATS AVAILABLE' : 'EVENT SOLD OUT'}
        </div>
        <table style="width: 100%; border-collapse: collapse; font-family: monospace; font-size: 0.9rem;">
            <thead>
                <tr style="border-bottom: 1.5px solid rgba(255,255,255,0.15); color: #a78bfa; text-align: left;">
                    <th style="padding: 8px 5px;">Property Key</th>
                    <th style="padding: 8px 5px;">Property Value</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Iterate through each key-value pair from Object.entries
    fieldPairs.forEach(function([key, val]) {
        tableHtml += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); color: #cbd5e1;">
                <td style="padding: 8px 5px; font-weight: bold; color: #38bdf8;">${key}</td>
                <td style="padding: 8px 5px;">${val}</td>
            </tr>
        `;
    });

    tableHtml += `
            </tbody>
        </table>
    `;

    outputPanel.innerHTML = tableHtml;
}

// Populate the dropdown and trigger first inspection
function initDropdown() {
    const dropdown = document.getElementById("event-selector");
    if (!dropdown) return;

    dropdown.innerHTML = eventsDatabase.map(function(e) {
        return `<option value="${e.id}">${e.name}</option>`;
    }).join("");

    // Auto-inspect the first entry on load
    inspectEvent(eventsDatabase[0].id);
}

document.addEventListener("DOMContentLoaded", initDropdown);
