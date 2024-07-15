import { boardAnimation } from "./boardAnimation.js";
import { changeContentMedia } from "./changeContentMedia.js";
import { sliderPlayers } from "./sliderPlayers.js";
import { stepSlider } from "./stepSlider.js";
import { tiker } from "./tiker.js";

document.addEventListener('DOMContentLoaded', () => {

  tiker();
  sliderPlayers();
  changeContentMedia();
  boardAnimation();

  window.innerWidth <= 768 ? stepSlider() : null;
});

