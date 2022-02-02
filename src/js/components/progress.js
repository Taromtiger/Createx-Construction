// const circle = document.querySelector('.progress');

// const progressAnimation = () => {
//   let percentageProgress = Math.floor(98);

//   let radius = circle.getAttribute('r');
//   let circleLength = 2 * Math.PI * radius;
//   circle.setAttribute('stroke-dasharray', circleLength);
//   circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
// };

// progressAnimation();

const circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(el => {

  let percentageProgress;

  if (el.dataset.percentage == 'true') {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.facts-element__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let full = el.dataset.full;
    let value = e.dataset.value;
    let percentageProgress = Math.floor(value / full * 100 );
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress .setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.facts-element__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let percent = el.dataset.percent;
    let percentageProgress = Math.floor(percent);
    valueBlock.textContent = percent + '%';
    console.log(percentageProgress)
    progress.setAttribute('stroke-dasharray', circleLength);
    progress .setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }
});