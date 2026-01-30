// Elements
const loading = document.getElementById('loading');
const postContainer = document.getElementById('posts');

// Function to load posts
function loadPosts(limit = 5) {
  loading.style.display = 'block'; // Show spinner

  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    .then(response => response.json())
    .then(data => {
      loading.style.display = 'none'; // Hide spinner
      postContainer.innerHTML = ''; // Clear previous posts

      data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;
        postContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      loading.style.display = 'none';
      postContainer.innerHTML = `<p style="color:red;">Error fetching data.</p>`;
      console.error('Error:', error);
    });
}

// Load 5 posts on page load
loadPosts();
let currentLimit = 5;

document.getElementById('showMoreBtn').addEventListener('click', () => {
  currentLimit += 5;
  loadPosts(currentLimit);
});



