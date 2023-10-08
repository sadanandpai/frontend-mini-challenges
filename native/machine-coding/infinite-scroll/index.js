const container = document.querySelector('.image-container');
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

function showLoader() {
  loader.style.display = 'block';
}

//api call
const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`;
async function getPosts() {
  console.log('inside');
  isFetching = true;
  try {
    const res = await fetch(url);
    const json = await res.json();
    posts = json;
    addPosts(posts);
    console.log(posts);
    start = end;
    end = start + 14;
  } catch (err) {
    console.log(err);
  } finally {
    isFetching = false;
  }
}

//initial Load for posts
getPosts();

//scroll eventListener
window.addEventListener('scroll', () => {
  if (isFetching) {
    showLoader();
    return;
  }

  if (
    window.innerHeight + window.scrollY >=
    window.document.body.offsetHeight
  ) {
   
    console.log('end');
    getPosts();
  }
});
