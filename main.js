const generateMemeBtn = document.querySelector(
  '.meme-generator .generate-meme-btn'
);

const memeImage = document.querySelector('.meme-generator img');

const memeTitle = document.querySelector('.meme-generator .meme-title');

const memeAuthor = document.querySelector('.meme-generator .meme-author');

function updateDetails(data) {
  memeImage.setAttribute('src', data.url);
  memeTitle.innerHTML = data.title;
  memeAuthor.innerHTML = `Meme By: ${data.author}`;
}

function generateMeme() {
  fetch('https://meme-api.com/gimme/wholesomememes')
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data);
    });
}

generateMemeBtn.addEventListener('click', generateMeme);

generateMeme();
