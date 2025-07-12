const API_URL = "http://localhost:8000/api";
const tbody_fic = document.getElementById('fiction-body');
const tbody_nfic = document.getElementById('nonfiction-body');
const tbody_acad = document.getElementById('academic-body');

const book_status = {
    NR: 'NR',
    CR: 'CR',
    RD: 'RD'
};
const book_classification = {
    FIC: 'FIC',
    NFIC: 'NFIC',
    ACAD: 'ACAD'
};


function populateTables(books) {
    books.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.name}</td>
            <td>${row.author_name}</td>
            <td>${row.status}</td>
        `;

        switch (row.classification_code) {
        case book_classification.FIC:
            tbody_fic.appendChild(tr);
            break;
        case book_classification.NFIC:
            tbody_nfic.appendChild(tr);
            break;
        case book_classification.ACAD:
            tbody_acad.appendChild(tr);
            break;
        }
    });
}

function handleStatusInfoClick() {
    alert('Not Read / Currently Reading / Read');
}

// entry point
fetch(`${API_URL}/books`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(res => populateTables(res.data))
  .catch(error => {
    console.error('GET Error: ', error);
  });