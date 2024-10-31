export default class SplitSlider {
  constructor({
    sliderSelector,
    sliderWrapperSelector,
    slidesSelector,
    btnNextSelector,
    btnPrevSelector,
    progressBarSelector,
    progressBarStatusSelector,
    animationDuration = 300,
    nextSlideClass = "slide_next",
    prevSlideClass = "slide_prev",
  }) {
    this._slider = document.querySelector(sliderSelector);
    this._sliderWrapper = this._slider.querySelector(sliderWrapperSelector);
    this._slides = this._sliderWrapper.querySelectorAll(slidesSelector);
    this._btnNext = this._slider.querySelector(btnNextSelector);
    this._btnPrev = this._slider.querySelector(btnPrevSelector);
    this._progressBar = this._slider.querySelector(progressBarSelector);
    this._progressBarStatus = this._progressBar.querySelector(
      progressBarStatusSelector
    );
    this._animationDuration = animationDuration;
    this._nextSlideClass = nextSlideClass;
    this._prevSlideClass = prevSlideClass;
    this._currIndex = 0;
    this._amountSlides = this._slides.length;
  }

  init() {
    this._resizeSlides();
    this._restyleSlides();
    this._addEventListeners();
  }

  rollToNextSlide = () => {
    this._slides[this._currIndex].classList.add(this._prevSlideClass);

    setTimeout(() => {
      this._currIndex++;
      if (this._currIndex >= this._amountSlides) {
        this._currIndex = 0;
      }
      this._rollWrapper();
      // Удаление .slide__next у нового текущего слайда, назначение его следующему
      this._slides[this._currIndex].classList.remove(this._nextSlideClass);
      const nextSlideIndex = (this._currIndex + 1) % this._amountSlides;
      this._slides[nextSlideIndex].classList.add(this._nextSlideClass);
    }, this._animationDuration);
  };

  rollToPrevSlide = () => {
    this._slides[this._currIndex].classList.add(this._nextSlideClass);

    setTimeout(() => {
      this._currIndex--;
      if (this._currIndex < 0) {
        this._currIndex = this._amountSlides - 1;
      }
      this._rollWrapper();
      // Удаление .slide__prev у нового текущего слайда, назначение его предыдущему
      this._slides[this._currIndex].classList.remove(this._prevSlideClass);
      const prevSlideIndex =
        (this._currIndex - 1 + this._amountSlides) % this._amountSlides;
      this._slides[prevSlideIndex].classList.add(this._prevSlideClass);
    }, this._animationDuration);
  };

  _addEventListeners() {
    window.addEventListener("resize", this._resizeSlides);
    this._btnNext.addEventListener("click", this.rollToNextSlide);
    this._btnPrev.addEventListener("click", this.rollToPrevSlide);
  }

  _rollWrapper() {
    this._sliderWrapper.style.transform = `translateX(${
      -this._currIndex * this._wrapperWidth
    }px)`;
    this._restyleSlides();
    this._setProgressBarStatus();
  }

  _resizeSlides = () => {
    this._wrapperWidth = this._slider.offsetWidth;
    this._sliderWrapper.style.width = `${
      this._wrapperWidth * this._amountSlides
    }px`;
    // this._slides.forEach((slide) => (slide.style.width = `${this._wrapperWidth}px`));
    this._rollWrapper();
  };

  _restyleSlides() {
    this._slides.forEach((slide, index) => {
      slide.classList.remove(this._nextSlideClass, this._prevSlideClass);

      if (index === (this._currIndex + 1) % this._amountSlides) {
        slide.classList.add(this._nextSlideClass);
      }

      if (
        index ===
        (this._currIndex - 1 + this._amountSlides) % this._amountSlides
      ) {
        slide.classList.add(this._prevSlideClass);
      }
    });
  }

  _setProgressBarStatus = () => {
    this._progressBarWidth = this._progressBar.offsetWidth;
    this._progressBarStatus.style.width = `${
      (this._progressBarWidth / this._amountSlides) * (this._currIndex + 1)
    }px`;
  };
}
