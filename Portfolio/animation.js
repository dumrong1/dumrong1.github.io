const frontWrapper = document.getElementById('front-wrapper');

frontWrapper.addEventListener('click', function() {
  this.classList.toggle('is-open');
});