import SplitSlider from "./split-slider.js";

function indexPage() {
  console.log("HELLOOOO");

  const SPLIT_SLIDER_PARAMS = {
    sliderSelector: ".slider",
    sliderWrapperSelector: ".slider__wrapper",
    slidesSelector: ".slide",
    btnNextSelector: ".slider__next-btn",
    btnPrevSelector: ".slider__prev-btn",
    progressBarSelector: ".slider__progressbar",
    progressBarStatusSelector: ".slider__progressstatus",
    // animationDuration: 300, default
    // nextSlideClass: "slide_next", default
    // prevSlideClass: "slide_prev", default
  };

  const splitSlider = new SplitSlider(SPLIT_SLIDER_PARAMS);
  splitSlider.init();
}

indexPage();
