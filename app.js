const audio = new Audio();

document.querySelector(".play").onclick = () => {
  audio.src = "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one";
  audio.play();
};