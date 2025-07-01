// sample data (in reality, this will be obtained from an api)
const data = {
    fiction: [
    { book: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Available" },
    { book: "1984", author: "George Orwell", status: "Checked Out" }
    ],
    nonfiction: [
    { book: "Sapiens", author: "Yuval Noah Harari", status: "Available" },
    { book: "Educated", author: "Tara Westover", status: "Available" }
    ],
    academic: [
    { book: "Introduction to Algorithms", author: "CLRS", status: "Checked Out" },
    { book: "Linear Algebra Done Right", author: "Sheldon Axler", status: "Available" }
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