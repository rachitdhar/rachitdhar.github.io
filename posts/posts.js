const API_URL = "https://unified-jennet-mildly.ngrok-free.app/api";
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
const container = document.querySelector(".posts-container");

function getDateString(date_str) {
    const [year, month, date] = date_str.split(" ")[0].split("-").map(Number); // remove the time component, and split the date part
    return `${monthStringMap[month]} ${date}, ${year}`;
}

function populatePostsContainer(data) {
    container.innerHTML = "";

    data.forEach((post, index) => {
      const formattedDate = getDateString(post.created_on);

      const link = document.createElement("a");
      link.href = `post/index.html?id=${post.id}`;
      link.className = "post-link";

      const section = document.createElement("section");
      section.className = "post-section";

      const heading = document.createElement("div");
      heading.className = "heading";

      const title = document.createElement("h2");
      title.textContent = post.title;

      const date = document.createElement("p");
      date.textContent = formattedDate;

      heading.appendChild(title);
      heading.appendChild(date);

      const desc = document.createElement("div");
      desc.className = "post-description";
      desc.textContent = post.description;

      section.appendChild(heading);
      section.appendChild(desc);
      link.appendChild(section);
      container.appendChild(link);

      // Add separator if not the last post
      if (index < data.length - 1) {
        const hr = document.createElement("hr");
        hr.className = "separator";
        container.appendChild(hr);
      }
    });
    
    loader.style.display = 'none';
}

// entry point
fetch(`${API_URL}/posts`, {
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
  .then(res => populatePostsContainer(res.data))
  .catch(error => {
    console.error('GET Error: ', error);
  });