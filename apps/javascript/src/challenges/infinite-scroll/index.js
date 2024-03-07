// HTML ELEMENTS
const container = document.querySelector('.post-container');
const loader = document.querySelector('.loader');
const endOfContentEl = document.querySelector('.end-of-content');

// LOCAL STATE
let isFetching = false;
let startIndex = 0;
let endIndex = getNextPostsCount(startIndex);
let endOfContent = false;

// Calculate window's height and get posts count based on start number
function getNextPostsCount(start) {
  const postHeight = 90;
  const newPostCount = Math.ceil(window.innerHeight / postHeight);
  return start + newPostCount;
}

// Add Posts to DOM
function addPosts(posts = []) {
  posts.forEach((post, index) => {
    const postContainer = document.createElement('div');
    postContainer.className = 'post';

    const postNumberEl = document.createElement('span');
    postNumberEl.className = 'post-number';
    postNumberEl.textContent = startIndex + index + 1;

    const postContentEl = document.createElement('span');
    postContentEl.className = 'post-body';
    postContentEl.textContent = post.body;

    postContainer.appendChild(postNumberEl);
    postContainer.appendChild(postContentEl);
    container.appendChild(postContainer);
  });
}

// Show end of content on DOM
function showEndContent() {
  endOfContentEl.style.display = 'block';
}

// Show/Hide Loading text on DOM
function toggleLoader(loaderStatus) {
  loader.style.display = loaderStatus;
}

// Fetch posts by start and end numbers from server
function getPosts(start, end) {
  const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`;
  isFetching = true;
  toggleLoader('block');
  setTimeout(async () => {
    try {
      const res = await fetch(url);
      const posts = await res.json();

      if (posts.length < end - start) {
        endOfContent = true;
        toggleLoader('none');
        if (posts.length > 0) {
          addPosts(posts);
        }
        showEndContent();
      } else {
        addPosts(posts);
        startIndex = end;
        endIndex = getNextPostsCount(startIndex);
      }
    } catch (err) {
      console.log(err);
    } finally {
      isFetching = false;
    }
  }, 500);
}

// Get initial posts on page load
getPosts(startIndex, endIndex);

//scroll eventListener
window.addEventListener('scroll', () => {
  if (isFetching || endOfContent) return;

  if (Math.ceil(window.innerHeight + window.scrollY) >= window.document.body.offsetHeight - 1) {
    getPosts(startIndex, endIndex);
  }
});
