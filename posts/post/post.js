const API_URL = "https://unified-jennet-mildly.ngrok-free.app/api";
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
const post_title = document.querySelector(".post-title");
const post_date = document.querySelector(".post-date");
const post_content = document.querySelector(".post-content");
const loader = document.querySelector('.loader-overlay');

const monthStringMap = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
};

function getDateString(date_str) {
    const [year, month, date] = date_str.split(" ")[0].split("-").map(Number); // remove the time component, and split the date part
    return `${monthStringMap[month]} ${date}, ${year}`;
}

function populateContent(content) {
    if (typeof content === 'string') {
      post_content.innerHTML = marked.parse(content);
    }
    loader.style.display = 'none';
}

function populateInfo(data) {
    post_title.textContent = data.title;
    post_date.textContent = getDateString(data.created_on);
}

// entry point

// get post info (title, description, ...)
fetch(`${API_URL}/posts/info?id=${postId}`, {
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(res => populateInfo(res.data[0]))
  .catch(error => {
    console.error('GET Error: ', error);
    loader.style.display = 'none';
  });

// get post content
fetch(`${API_URL}/posts?id=${postId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const contentType = response.headers.get('Content-Type');
    if (!contentType.includes('text/plain')) {  // to handle cases where API may fail, and return an HTML or JSON response
      throw new Error('Failed to get valid content type');
    }
    return response.text();
  })
  .then(content => populateContent(content))
  .catch(error => {
    console.error('GET Error: ', error);
    loader.style.display = 'none';
    toastr.error('Failed to retrieve post content', 'Error');
  });