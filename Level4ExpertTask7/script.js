// Elements
const loading = document.getElementById('loading');
const postContainer = document.getElementById('posts');
const showMoreBtn = document.getElementById('showMoreBtn');
let currentLimit = 5;

// Load posts using fetch
function loadPosts(limit = 5) {
  loading.style.display = 'block'; // Show loading text

  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    .then(res => res.json())
    .then(data => {
      loading.style.display = 'none'; // Hide loading
      postContainer.innerHTML = ''; // Clear existing posts

      data.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'col-md-6 col-lg-4';
        postCard.innerHTML = `
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
            </div>
          </div>
        `;
        postContainer.appendChild(postCard);
      });
    })
    .catch(error => {
      loading.textContent = 'Failed to load posts.';
      console.error('API Error:', error);
    });
}

// Load 5 posts on page load
loadPosts(currentLimit);

// Show more posts on button click
showMoreBtn.addEventListener('click', () => {
  currentLimit += 5;
  loadPosts(currentLimit);
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  // Validation
  if (name === '' || email === '' || message === '') {
    feedback.textContent = '❌ Please fill in all fields.';
    feedback.style.color = 'red';
    return;
  }

  // Basic email check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = '❌ Invalid email address.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = '✅ Form submitted successfully!';
  feedback.style.color = 'green';
  this.reset();
});
