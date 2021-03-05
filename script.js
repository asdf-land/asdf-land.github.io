const articles = {
  "A": {
    "title": "About us",
    "subtitle": "ASDF를 소개합니다",
    "article": ""
  },
  "S": {
    "title": "See us",
    "subtitle": "ASDF의 큰그림",
    "article": ""
  },
  "D": {
    "title": "Do with us",
    "subtitle": "당신의 꿈, ASDF와 함께",
    "article": ""
  },
  "F": {
    "title": "Feel us",
    "subtitle": "ASDF 멤버들의 열정",
    "article": ""
  },
}

const d = new Date();

Pace.on('done', () => {
  if(new Date() - d < 1000) {
    setTimeout(initialize, 1000);
  } else {
    initialize();
  }
});

const initialize = () => {
  loadingContainer.classList.add('hide');
  setTimeout(() => {
    loadingContainer.style.display = 'none';
  }, 500);
  setTimeout(() => {
    welcome.classList.add('fadeIn');
  }, 1000);
  setTimeout(() => {
    welcome.classList.add('fadeOut');
    welcomeContainer.classList.add('fadeOut');
  }, 3000);
};

window.addEventListener('DOMContentLoaded', () => {
  resize();
});

window.onresize = () => {
  resize();
};

const resize = () => {
  if(window.innerHeight / window.innerWidth >= 0.7) {
    bottomRight.style.display = 'none';
    bottomLeft.style.justifyContent = 'center';
    articleContents.style.width = '100vw';
  } else {
    bottomRight.style.display = 'flex';
    bottomLeft.style.justifyContent = 'flex-start';
    articleContents.style.width = '65vw';
  }
};

const showArticle = (letter) => {
  articleTitle.textContent = articles[letter].title;
  articleSubtitle.textContent = articles[letter].subtitle;
  articleContent.innerHTML = articles[letter].article;
  articleContainer.classList.add('show');
  for(const e of document.getElementsByClassName('hideOnArticle')) {
    e.style.opacity = "0";
  }
};

const closeArticle = () => {
  articleContainer.classList.remove('show');
  for(const e of document.getElementsByClassName('hideOnArticle')) {
    e.style.opacity = "1";
  }
};