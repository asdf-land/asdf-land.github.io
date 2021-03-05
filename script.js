let d = new Date();

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