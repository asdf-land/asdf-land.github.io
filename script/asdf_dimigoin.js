let tag = document.createElement("script");
tag.src = "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js";
document.getElementsByTagName("head")[0].appendChild(tag);

let options = {
    strings: ['asdf', 'asdfasdf', 'asdfasdfasdfasdfasdf', '...', '...asdf', '...', '............asdf'],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity
};

tag.addEventListener('load', () => {
    let typed = new Typed('#introTyping', options);
});