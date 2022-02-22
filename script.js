let article = '';
let remember = '';
let isMobile = false;
let lottieAnim;
let interval2;

let options = {
  strings: ['asdf', 'asdfasdf', 'asdfasdfasdfasdfasdf', '...', '...asdf', '...', '............asdf'],
  typeSpeed: 30,
  backSpeed: 20,
  loop: true,
  loopCount: Infinity
};

let typed = new Typed('#introTyping', options);

const articles = {
  "A": {
    "title": "About us",
    "subtitle": "ASDF를 소개합니다",
    "article": `아이디어가 생각나지 않을 때, 찾아보려던 것이 생각나지 않을 때 우리는 습관적으로 키보드의 <i>asdf</i> 를 누릅니다.<br>
    그러다 아이디어가 떠오르거나 할일이 떠오르면 작업을 시작하죠.<br>
    <strong>저희의 이름 ASDF</strong>는 여기서 따온 이름입니다. 순간순간 스쳐가는, 갑자기 떠오르는 그 <span class="hightLightBlue">아이디어</span>를 실현해요.<br>
    <span class="hightLightBlue">무의식에서 떠오른 그 아이디어</span>를 바로 실현 시키고자 하는 갈망을 가지고 있죠.<br>
    멤버들의 멋진 아이디어를 실현시키기 위하여 디미고의 전문가들이 뭉쳤습니다.`
  },
  "S": {
    "title": "See us",
    "subtitle": "ASDF의 큰그림",
    "article": `우리는 2022년에 이런 활동을 할 예정이에요.
    <ol>
      <li>
        <strong>앱&웹 개발 📱</strong>
        <dd>- 2022년에는 <span class="hightLightGreen">앱&웹 개발을 위주</span>로 활동할 예정이에요.<br>&nbsp;&nbsp;우리가 상상했던 앱들을 스스로 <span class="hightLightGreen">눈으로 보고 손으로 만질 수 있게 구현</span>할 수 있어요.<br>&nbsp;&nbsp;<span class="hightLightGreen">iOS를 주로 할 예정</span>이고, 맥북이 없어도 된답니다.</dd>
      </li>
      <li>
        <strong>앱&웹 디자인 🎨</strong>
        <dd>- 유저 친화적인 디자인을 배우고, 여러 인터렉션과 재미있는 요소들을 활용해 <span class="hightLightGreen">다채로운 디자인</span>을 해봐요.<br>&nbsp;&nbsp;여러분이 디자인한 것이 실제 서비스까지 이루어질거에요.</dd>
      </li>
      <li>
        <strong>아이디어 실현 🎈</strong>
        <dd>- 서비스, 게임, 그 무엇이든 여러분이 생각한 <span class="hightLightGreen">아이디어를 ASDF에서 실현</span>해요.<br>&nbsp;&nbsp;떠올린 아이디어를 실현하는데 필요한 능력을 기르고, 기획단계부터 서비스 런칭까지의 모든 작업을 여러분이 해보아요.</dd>
      </li>
      <li>
        <strong>대회 🏆</strong>
        <dd>- 디미고 전문가들로 뭉친 멤버들과 함께 <span class="hightLightGreen">대회에서 추억</span>을 쌓아보아요.</dd>
      </li>
    </ol>`
  },
  "D": {
    "title": "Do with us",
    "subtitle": "당신의 꿈, ASDF와 함께",
    "article": `프로그래밍이나 디자인의 전문가가 아니어도 괜찮습니다.<br>
    ASDF에는 각 분야에 도움을 줄 멤버들이 있습니다.<br>
    <span class="hightLightYellow">개발의 기초</span>부터 본격적인 앱 및 웹 서비스 개발, Adobe XD, Illustraor과 같은 <span class="hightLightYellow">디자인 툴</span>까지,<br>ASDF가 여러분을 도와줄 수 있습니다.<br>
    선배 멘토와 여러분이 크고 작은 팀을 구성하여 여러분의 아이디어가 실현되는 순간을<br>기획단계부터 서비스 런칭 단계까지, <span class="hightLightYellow">모든 부분에 참여할 수 있습니다.</span>`
  },
  "F": {
    "title": "Feel us",
    "subtitle": "ASDF 멤버들의 열정",
    "article": `동아리 설립 전부터 ASDF 멤버들은 자신의 분야에 <span class="hightLightRed">최선을 다해 열정적으로 참여</span>했습니다.<br>ASDF 멤버들이 이루어낸 <span class="hightLightRed">작품들 중 일부</span>를 여러분께 소개해 드립니다.
    <h2>디자인</h2>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/1.jpg" class="image image1">
        <img src="resources/images/projects/2.jpg" class="image image1">
      </div>
    </div>
    <div class="imageDescription">웹 컨셉 디자인 <span class="grayText">- 김세령 디자인</span></div>
    <br><br>
    <span class="description">웹페이지의 <span class="hightLightRed">컨셉 디자인 이미지</span>입니다. Adobe XD, Illustrator 를 이용하여 웹 페이지의 <span class="hightLightRed">디테일을 구체화</span>했습니다.</span>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/3.png" class="image image1">
        <img src="resources/images/projects/4.png" class="image image1">
      </div>
    </div>
    <div class="imageDescription">카드뉴스 디자인 <span class="grayText">- 김세령 디자인</span></div>
    <br><br>
    <span class="description">디미고 기숙사 생활에서의 <span class="hightLightRed">주의 사항이나 조언</span>을 카드뉴스로 디자인하여 소개하였습니다. XD와 일러스트레이터 등을 사용해 디자인하였습니다.</span>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/5.png" class="image image1">
        <img src="resources/images/projects/6.png" class="image image1">
      </div>
    </div>
    <div class="imageDescription">카드 뉴스, 일러스트 디자인 <span class="grayText">- 강채린 디자인</span></div>
    <br><br>
    <span class="description">디미고 익명 게시판인 디대숲에서 생기는 문제점과 해결방안을 <span class="hightLightRed">포토샵을 통해 카드뉴스로 디자인</span>하여 소개하였습니다.</span>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/7.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription">아이콘 디자인 <span class="grayText">- 강채린 디자인</span></div>
    <br><br>
    <span class="description">일러스트레이터의 <span class="hightLightRed">펜툴/도형으로 만든 아이콘</span>입니다.</span>
    <h2>웹</h2>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/8.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription">자동 줌 수업 접속 웹페이지, Online Schedule <span class="grayText">- 강혁진 디자인, 개발</span></div>
    <br>
    <span class="description">2020년, 코로나 19 사태로 인해 전국 모든 학교가 원격으로 수업을 진행하게 되었습니다. 매번 Zoom 코드를 수동으로 입력하여 접속하기 번거로웠던 문제를 해결하기 위해 탄생한 <span class="hightLightRed">Online Schedule</span>은 웹 기반 서비스로, 페이지를 열어두기만 하면 각 반의 시간표에 따라 자동으로 줌 수업에 접속됩니다.</span>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/9.png" class="image image2">
      </div>
    </div>
    <span class="description">원격 기간 중, <strong>19기 학생 약 80% 이상</strong>이 이 서비스를 이용해 원격 수업에 접속하였습니다.<br>
    <h2>게임</h2>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/10.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription">웹 기반 리듬게임, <strong>URLATE</strong> <span class="grayText">- 강혁진 디자인, 개발중</span></div>
    <br><br>
    <span class="description">URLATE는 <span class="hightLightRed">리듬탄막슈팅게임</span>입니다. 순수 웹기술로만 제작된 리듬게임 URLATE는 크라우드 펀딩 플랫폼에서 <span class="hightLightRed">목표액 대비 122%를 성공적으로 펀딩</span>받아 현재 출시를 준비하고 있습니다.</span>
    <h2>하드웨어</h2>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/11.jpg" class="image image2">
      </div>
    </div>
    <div class="imageDescription">프로펠러 하나만으로 비행하는 드론, <strong>Wing-One</strong> <span class="grayText">- 이원호 설계, 개발중</span></div>
    <br><br>
    <span class="description">기존의 4윙 드론과 다르게 <span class="hightLightRed">하나의 프로펠러만으로 비행</span>하는 드론을 개발중입니다. 반작용을 상쇄하는 리액션 휠을 추가하여 기술적인 문제를 해결한 설계를 하였습니다. 현제 프로토타입 제작을 완료하여 테스트 중입니다.</span>
    `
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
  }, 300);
  setTimeout(() => {
    welcome1.classList.add('fadeIn');
    welcome2.classList.add('fadeIn');
  }, 700);
  setTimeout(() => {
    welcome1.classList.add('fadeOut');
    welcome2.classList.add('fadeOut');
    welcomeContainer.classList.add('fadeOut');
    article = 'empty';
  }, 3000);
};

window.addEventListener('DOMContentLoaded', () => {
  let widthWidth = window.innerWidth;
  let heightWidth = window.innerHeight / 9 * 16;
  if(widthWidth > heightWidth) {
    animContainer.style.width = `${widthWidth}px`;
    animContainer.style.height = `${widthWidth / 16 * 9}px`;
  } else {
    animContainer.style.width = `${heightWidth}px`;
    animContainer.style.height = `${heightWidth / 16 * 9}px`;
  }
  lottieAnim = bodymovin.loadAnimation({
    wrapper: animContainer,
    animType: 'canvas',
    loop: true,
    path: 'resources/lottie/wave.json'
  });
  lottieAnim.addEventListener('DOMLoaded', () => {
    canvasResize();
  });
  resize();
});

const airplaneAnimate = () => {
  airplaneSvg.style.transitionDuration = "0s";
  airplaneSvg.style.marginLeft = `-${airplaneSvg.offsetWidth}px`;
  setTimeout(() => {
    airplaneSvg.style.transitionDuration = "15s";
    airplaneSvg.style.marginLeft = `${articleDDeco.offsetWidth}px`;
  }, 100);
};

const canvasResize = () => {
  let widthWidth = window.innerWidth;
  let heightWidth = window.innerHeight / 9 * 16;
  if(widthWidth > heightWidth) {
    animContainer.style.width = `${widthWidth}px`;
    animContainer.style.height = `${widthWidth / 16 * 9}px`;
  } else {
    animContainer.style.width = `${heightWidth}px`;
    animContainer.style.height = `${heightWidth / 16 * 9}px`;
  }
  let lottieCanvas = animContainer.getElementsByTagName('canvas')[0];
  widthWidth = window.innerWidth * window.devicePixelRatio;
  heightWidth = window.innerHeight * window.devicePixelRatio / 9 * 16;
  if(widthWidth > heightWidth) {
    lottieCanvas.width = widthWidth;
    lottieCanvas.height = widthWidth / 16 * 9;
  } else {
    lottieCanvas.width = heightWidth;
    lottieCanvas.height = heightWidth / 16 * 9;
  }
  lottieAnim.destroy();
  lottieAnim = bodymovin.loadAnimation({
    wrapper: animContainer,
    animType: 'canvas',
    loop: true,
    path: 'resources/lottie/wave.json'
  });
}

window.onresize = () => {
  resize();
  if(!isMobile) canvasResize();
};

const resize = () => {
  if(window.innerHeight / window.innerWidth >= 0.7) {
    lottieAnim.destroy();
    isMobile = true;
    bottomRight.style.display = 'none';
    bottomLeft.style.justifyContent = 'center';
    articleContents.style.width = '100vw';
    articleClose.style.display = 'none';
    articleContents.style.padding = '3vh';
    articleContents.style.height = '94vh';
    closeBtn.style.display = 'initial';
    articleTitle.style.fontSize = "5vh";
    articleContentContainer.style.fontSize = "2vh";
    for(const e of document.getElementsByClassName('imageSplitContainer')) {
      e.style.flexDirection = "column";
    }
    for(const e of document.getElementsByClassName('imageSplit')) {
      e.style.width = "100%";
    }
  } else {
    isMobile = false;
    bottomRight.style.display = 'flex';
    bottomLeft.style.justifyContent = 'flex-start';
    articleContents.style.width = '65vw';
    articleClose.style.display = 'flex';
    articleContents.style.padding = '10vh';
    articleContents.style.height = '80vh';
    closeBtn.style.display = 'none';
    articleTitle.style.fontSize = "7vh";
    articleContentContainer.style.fontSize = "2.5vh";
    for(const e of document.getElementsByClassName('imageSplitContainer')) {
      e.style.flexDirection = "row";
    }
    for(const e of document.getElementsByClassName('imageSplit')) {
      e.style.width = "45%";
    }
  }
};

const showArticle = (letter) => {
  if(article == 'empty') {
    articleTitle.textContent = articles[letter].title;
    articleSubtitle.textContent = articles[letter].subtitle;
    articleContent.innerHTML = articles[letter].article;
    articleContainer.classList.add('show');
    for(const e of document.getElementsByClassName('hideOnArticle')) {
      e.style.opacity = "0";
    }
    let i = ['A', 'S', 'D', 'F'].indexOf(letter);
    for(let j = 0; j < document.getElementsByClassName('island').length; j++) {
      if(j != i) document.getElementsByClassName('island')[j].style.opacity = "0";
    }
    if(!isMobile) centerContainer.classList.add(letter);
    if(remember) document.getElementById(`article${remember}Deco`).style.display = 'none';
    document.getElementById(`article${letter}Deco`).style.display = 'flex';
    airplaneAnimate();
    if(interval2) clearInterval(interval2);
    interval2 = setInterval(airplaneAnimate, 15100);
    article = letter;
    remember = letter;
  }
};

const closeArticle = () => {
  if(!isMobile) centerContainer.classList.remove(article);
  articleContainer.classList.remove('show');
  for(const e of document.getElementsByClassName('hideOnArticle')) {
    e.style.opacity = "1";
  }
  for(const e of document.getElementsByClassName('island')) {
    e.style.opacity = "1";
  }
  article = 'empty';
};

document.onkeydown = e => {
  e = e || window.event;
  let key = e.key.toLowerCase();
  //console.log(key);
  if(key == 'escape') {
    e.preventDefault();
    closeArticle();
  } else {
    if(key == 'a') {
      e.preventDefault();
      if(article != 'empty' && article != '') closeArticle();
      showArticle('A');
    } else if(key == 's') {
      e.preventDefault();
      if(article != 'empty' && article != '') closeArticle();
      showArticle('S');
    } else if(key == 'd') {
      e.preventDefault();
      if(article != 'empty' && article != '') closeArticle();
      showArticle('D');
    } else if(key == 'f') {
      e.preventDefault();
      if(article != 'empty' && article != '') closeArticle();
      showArticle('F');
    }
  }
};