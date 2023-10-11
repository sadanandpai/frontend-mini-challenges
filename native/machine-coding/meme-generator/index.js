const generateMemebtn = document.querySelector('.meme-generator .generate-meme-btn');
const body = document.querySelector('body');
const memeImg = document.querySelector('.meme-generator img');
const memeTitle = document.querySelector('.meme-generator .meme-title');
const memeAuthor = document.querySelector('.meme-generator .meme-author');
const memeDiv = document.querySelector('.meme');

const updateDetails = (url, title, author) => {
  memeImg.setAttribute('src', url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};
const generateMeme = () => {
  memeDiv.style.backgroundColor = '#F7EEEE';
  memeDiv.style.boxShadow = '10px 10px 16px rgb(0, 0, 0, 0.2)';
  fetch(' https://meme-api.com/gimme/wholesomememes')
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemebtn.addEventListener('click', generateMeme);
generateMeme();
