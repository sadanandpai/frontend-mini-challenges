// HTML ELEMENTS
const container = document.querySelector('.post-container');
const loader = document.querySelector('.loader');
const endOfContentEl = document.querySelector('.end-of-content');
const errorEl = document.querySelector('.fetch-error');

// LOCAL STATE
let startIndex = 0;
let endIndex = getNextPostsCount(startIndex);
let isFetching = false;
let isError = false;
let endOfContent = false;
let attempt = 0;
const MAX_RETRIES = 3;

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

function toggleError(display) {
  errorEl.style.display = display;
}

// Show/Hide Loading text on DOM
function toggleLoader(loaderStatus) {
  loader.style.display = loaderStatus;
}

// Fetch posts by start and end numbers from server
function fetchPostsApi(start, end) {
  const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`;
  isFetching = true;
  toggleError('none');
  toggleLoader('block');
  setTimeout(async () => {
    try {
      const res = await fetch(url);
      const posts = await res.json();

      // End of content when posts are less than requested posts
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
      attempt = 0;
      isError = false;
    } catch (err) {
      console.log(err);

      // Retry incase of API error
      attempt++;
      const renderedPosts = document.getElementsByClassName('post').length;

      if (attempt > MAX_RETRIES) {
        toggleError('block');
        isError = true;
      } else if (renderedPosts === 0) {
        fetchPostsApi(start, end);
      }

      toggleLoader('none');
    } finally {
      isFetching = false;
    }
  }, 500);
}

// Fetch initial posts on page load
fetchPostsApi(startIndex, endIndex);

// verify app state and call fetch posts api
function checkAndGetPosts() {
  if (isFetching || endOfContent || isError) return;
  const scrolledHeight = Math.ceil(window.innerHeight + window.scrollY);
  const docOffset = window.document.body.offsetHeight - 36;
  if (scrolledHeight >= docOffset) {
    fetchPostsApi(startIndex, endIndex);
  }
}

//scroll eventListener
window.addEventListener('scroll', checkAndGetPosts);

// resize eventListener
window.addEventListener('resize', checkAndGetPosts);
