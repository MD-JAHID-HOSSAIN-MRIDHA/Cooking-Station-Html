const preloader = document.querySelector('#preloader');

function showHidePreloader() {
  preloader.classList.remove('d-none');
  setTimeout(() => {
    preloader.classList.add('d-none');
  }, 0); // 5000 milliseconds = 5 seconds
}

window.addEventListener('load', showHidePreloader);
