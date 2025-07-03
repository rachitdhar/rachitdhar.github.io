// sample data (in reality, this will be obtained from an api)
const data = {
    fiction: [
    ],
    nonfiction: [
    ],
    academic: [
    ]
};

function populateTable(sectionId, books) {
    const tbody = document.getElementById(sectionId);
    books.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${entry.book}</td>
        <td>${entry.author}</td>
        <td>${entry.status}</td>
    `;
    tbody.appendChild(tr);
    });
}

populateTable("fiction-body", data.fiction);
populateTable("nonfiction-body", data.nonfiction);
populateTable("academic-body", data.academic);

function handleStatusInfoClick() {
    alert('Not Read / Reading / Read');
}