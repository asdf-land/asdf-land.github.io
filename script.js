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
    "article": `ASDF 멤버들은 2021년 한 해 자신의 분야에 <span class="hightLightRed">최선을 다해 참여</span>했습니다.<br>ASDF 멤버들이 이루어낸 <span class="hightLightRed">작품들 중 일부</span>를 여러분께 소개해 드립니다.
    <h2>웹, 앱 서비스</h2>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/20/1.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription">목표 관리 앱,<strong>모두 리스트</strong><span class="grayText">- 20기 이재한, 19기 강혁진 Front-end | 19기 이택준 Back-end </span>
    <a class="githubLink" href="https://github.com/modoolist" target="_blank"><img class="github" src="resources/images/github.png"></a>
    </div>
    <br>
    <span class="description">원하는 목표의 달성을 도와주는 앱<span class="hightLightRed">모두 리스트</span>를  기획, 디자인, 개발했습니다.</span>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/8.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription">자동 줌 수업 접속 웹페이지, <strong>Online Schedule</strong> <span class="grayText">- 19기 강혁진 디자인, 개발</span><a class="githubLink" href="https://github.com/HyeokjinKang/online-schedule" target="_blank"><img class="github" src="resources/images/github.png"></a></div>
    <br>
    <span class="description">2020년, 코로나 19 사태로 인해 전국 모든 학교가 원격으로 수업을 진행하게 되었습니다. 매번 Zoom 코드를 수동으로 입력하여 접속하기 번거로웠던 문제를 해결하기 위해 탄생한 <span class="hightLightRed">Online Schedule</span>은 웹 기반 서비스로, 페이지를 열어두기만 하면 각 반의 시간표에 따라 자동으로 줌 수업에 접속됩니다.</span>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/9.png" class="image image2">
      </div>
    </div>
    <span class="description">원격 기간 중, <strong>19기 학생 약 80% 이상</strong>이 이 서비스를 이용해 원격 수업에 접속하였습니다.<br>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/20/2.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription">커밋 관리 앱, <strong>초록잔디</strong> <span class="grayText">- 20기 김아인 iOS</span>
    <a class="githubLink" href="https://github.com/kimain050401/green-grass-ios" target="_blank"><img class="github" src="resources/images/github.png"></a>
    </div>
    <br>
    <span class="description">개발자를 위한 1일 1커밋 관리 앱인 <span class="hightLightRed">초록잔디</span>를 개발했습니다.</span>
    <br>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/20/3.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription">자율학습 위치표기 시스템, <strong>디미고미</strong> <span class="grayText">- 20기 김아인 Web, iOS, Back-end, Chatbot</span>
    <a class="githubLink" href="https://github.com/kimain050401/dimigome-web" target="_blank"><img class="github" src="resources/images/github.png"></a>
    </div>
    <br>
    <span class="description">자율학습 시간에 내 위치를 편리하게 등록할 수 있는 <span class="hightLightRed">디미고미</span> 시스템을 개발했습니다.</span>
    <br>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/20/4.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription"><strong>메이커스</strong> <span class="grayText">- 20기 이종민 Front-end</span></div>
    <br>
    <span class="description">프로젝트 아이디어를 공유하고 함께 할 인원을 모집할 수 있는 <span class="hightLightRed">메이커스</span>의 프론트엔드를 개발했습니다.</span>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/19/1.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription"><strong>Liber</strong> <span class="grayText">- 19기 김세령 기획, 디자인, 퍼블리싱</span></div>
    <br>
    <span class="description">자유롭게 멤버를 모아 북클럽을 만들어 보다 효율적으로 독서 활동을 할 수 있는 북클럽 서비스 <span class="hightLightRed">리버</span>을 개발했습니다.</span>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/19/2.png" class="image image2">
      </div>
    </div>
    <br>
    <div class="imageDescription"><span class="imageDescriptionSpan">모두를 위한 키오스크,<strong>Axis</strong> <span class="grayText">- 19기 김세령 기획, 디자인 | 19기 강혁진 Front-end</span></span><span class="imageDescriptionSpan">2021 삼성SDS-JA Hackathon 우수상 수상작</span></div>
    <br>
    <span class="description">사회적 약자부터 사회 구성원 모두가 편리하게 이용할 수 있는 평등한 키오스크 <span class="hightLightRed">Axis</span>을 개발했습니다.</span>
    <br>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/19/3.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription"><span class="imageDescriptionSpan">스마트 분리수거 플랫폼,<strong>버려버려</strong> <span class="grayText">- 19기 민예담 기획, 디자인 | 19기 이택준 기획, 디자인, Back-end</span><a class="githubLink" href="https://github.com/coding-campas-10" target="_blank"><img class="github" src="resources/images/github.png"></a></span><span class="imageDescriptionSpan">2021 삼성SDS-JA Hackathon 결선 진출작</span></div>
    <br>
    <span class="description">올바른 분리수거를 위한 스마트 분리수거 플랫폼 <span class="hightLightRed">버려버려</span>를 개발했습니다.</span>
    <br>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/19/4.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription"><span class="imageDescriptionSpan">AI 기반 도슨팅 서비스,<strong>이게모야</strong> <span class="grayText">- 19기 강혁진 디자인, Front-end | 19기 이택준 디자인, Back-end</span><a class="githubLink" href="https://github.com/igemoya" target="_blank"><img class="github" src="resources/images/github.png"></a></span><span class="imageDescriptionSpan">SK플래닛 2021 STA+C 결선 진출작</span></div>
    <br>
    <span class="description">고궁, 미술관, 박물관 등에서 Vision AI를 이용해 도슨팅을 제공하는 서비스 <span class="hightLightRed">이게모야</span>를 개발했습니다.</span>
    <br>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/19/8.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription"><span class="imageDescriptionSpan"><strong>당신의 작품을, 널리</strong> <span class="grayText">- 19기 김세령 기획, 디자인</span></span><span class="imageDescriptionSpan">SK플래닛 2020 STA+C 우수상 수상작</span></div>
    <br>
    <span class="description">무명 예술가들을 세상에 알리고 관람자가 시각적으로 편리함을 느낄 수 있는 온라인 전시회 서비스 <span class="hightLightRed">널리</span>를 개발했습니다.</span>
    <br>
    <h2>Artworks</h2>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/19/5.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription"><span class="imageDescriptionSpan"><strong>카드뉴스</strong> <span class="grayText">- 19기 강채린 디자인</span></div>
    <br>
    <span class="description">2021년 ASDF 동아리 소개 카드뉴스를 디자인했습니다. Adobe XD와 Illustrator를 이용해 작업했습니다.</span>
    <br>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/19/6.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription"><span class="imageDescriptionSpan"><strong>포스터</strong> <span class="grayText">- 19기 김세령 디자인</span></div>
    <br>
    <span class="description">ASDF 동아리 홍보 포스터와 소설 '서울, 1964년 겨울' 소개 포스터를 디자인했습니다. Adobe Illustrator를 이용해 작업했습니다.</span>
    <br>
    <div class="imageContainer">
      <div class="imageInner">
        <img src="resources/images/projects/19/7.png" class="image image2">
      </div>
    </div>
    <div class="imageDescription"><span class="imageDescriptionSpan"><strong>로고, 아트워크</strong> <span class="grayText">- 19기 김세령 디자인</span></div>
    <br>
    <span class="description">ASDF 동아리 로고와 아트워크를 작업했습니다. 동아리 브랜딩과 정체성에 집중한 작업물입니다. Adobe XD와 Illustrator를 이용해 작업했습니다.</span>
    <br>
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