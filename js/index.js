const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
/**const progressBar = wrapper.querySelector(".progress-bar");**/



// play para reproductor

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".bi-play-fill").classList.toggle("hide");
    playPause.querySelector(".bi-pause-fill").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".bi-play-fill").classList.toggle("hide");
    playPause.querySelector(".bi-pause-fill").classList.toggle("hide");
  }
});

// falta logica de progressbar