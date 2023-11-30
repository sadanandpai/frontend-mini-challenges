const container = document.querySelector('.post-container');
const loader = document.querySelector('.loader');
let start = 0;
let end = start + 14;
let posts = [];
let isFetching = false;

//Add Posts to DOM
function addPosts() {
  posts.forEach((post, ind) => {
    const postContainer = document.createElement('p');
    postContainer.className = 'post';
    const postContent = document.createTextNode(post.body + ind);
    postContainer.appendChild(postContent);
    container.appendChild(postContainer);
  });
}

function handleLoader(loaderStatus) {
  loader.style.display = loaderStatus;
}

//api call
const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`;

function getPosts() {
  isFetching = true;
  handleLoader('block');
  setTimeout(async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      posts = json;
      addPosts(posts);
      start = end;
      end = start + 14;
    } catch (err) {
      console.log(err);
    } finally {
      isFetching = false;
      handleLoader('none');
    }
  }, 500);
}

//initial Load for posts
getPosts();

//scroll eventListener
window.addEventListener('scroll', () => {
  if (isFetching) {
    handleLoader('block');
    return;
  }

  if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight) {
    getPosts();
  }
});
