# Сплит-слайдер для слайдов в 2 колонки (заготовка) v 1.0.0
Проект кастомного слайдера с мнимальной адаптацией под другие экраны. Без использования библиотек и npm пакетов.

HTML, Javascript, CSS

[Посмотреть пример](https://alexeygamovwvs.github.io/split-slider/)

## Использование:

1. Скачать архив с шаблоном
2. Скопировать в проект split-slider.js
3. Импортировать класс в файл скрипта вашего приложения
4. Создать объект данных для класса (см. пример в script.js)
5. Скопировать styles.css в проект и доработать стили.

Пример использования:

```javascript
import SplitSlider from './split-slider.js';

const SPLIT_SLIDER_PARAMS = {
  sliderSelector: '.slider',
  sliderWrapperSelector: '.slider__wrapper',
  slidesSelector: '.slide',
  btnNextSelector: '.slider__next-btn',
  btnPrevSelector: '.slider__prev-btn',
  progressBarSelector: '.slider__progressbar',
  progressBarStatusSelector: '.slider__progressstatus',
  // animationDuration: 300, default
  // nextSlideClass: "slide_next", default
  // prevSlideClass: "slide_prev", default
};

const splitSlider = new SplitSlider(SPLIT_SLIDER_PARAMS);
splitSlider.init();
```

## Пропсы для конструктора класса:

- *sliderSelector* — селектор блока, в котором всё расположено
- *sliderWrapperSelector* — селектор «карусели»
- *slidesSelector* — общий селектор слайдов
- *btnNextSelector*, *btnPrevSelector* — селекторы кнопок
- *progressBarSelector*, *progressBarStatusSelector* — селекторы некликабельного прогресс-бара, отображающего текущий объём прокрутки.
- *animationDuration* — длительность задержки перехода от одного слайда к другому, позволяющая отыграть транзишены из CSS, задаётся в миллисекундах, дефолтно - 300ms
- *nextSlideClass* — класс слайда, следующего за активным, дефолтно *'slide_next'*,
- *prevSlideClass* — класс слайда, идущего перед активным, дефолтно *'slide_prev'*,

## Публичные методы класса SplitSlider:

- *init()* — используется для запуска слайдера и слушателей
- *rollToNextSlide()* – может быть назначен отдельно на свою кнопку, используется для перехода к следующему слайду
- *rollToPrevSlide()* – может быть назначен отдельно на свою кнопку, используется для перехода к предыдущему слайду
