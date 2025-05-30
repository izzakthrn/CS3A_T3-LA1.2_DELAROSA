document.addEventListener('DOMContentLoaded', function () {
  // Logout button functionality
  const logoutBtn = document.querySelector('.logout-btn');
  logoutBtn.addEventListener('click', function () {
    alert('Logging out...');
    // In a real app, redirect to logout endpoint
  });

  // Post creation functionality
  const postInput = document.querySelector('.post-input input');
  postInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
      createNewPost(this.value);
      this.value = '';
    }
  });

  function createNewPost(content) {
    const feedContainer = document.querySelector('.feed-container');
    const newPost = document.createElement('div');
    newPost.className = 'post';

    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    newPost.innerHTML = `
      <div class="post-header">
        <div class="post-user">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Avatar" />
          <div class="user-info">
            <h4>You</h4>
            <p>Just now</p>
          </div>
        </div>
      </div>
      <div class="post-content">
        <p>${content}</p>
      </div>
      <div class="post-stats">
        <span>0 interactions</span>
      </div>
    `;

    feedContainer.insertBefore(newPost, feedContainer.children[1]);
  }
});
