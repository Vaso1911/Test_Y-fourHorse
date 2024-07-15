export const tiker = () => {
  const marqueeContainer = document.querySelectorAll('.ticker__item');

  marqueeContainer.forEach(e => {
    const marquee = e.querySelector('.ticker__item-descr');
    marquee.textContent = marquee.textContent.repeat(12);

    const textWidth = marquee.offsetWidth;

    const animationDuration = textWidth / 110;

    marquee.style.animationDuration = `${animationDuration}s`;

    e.addEventListener('mouseover', () => {
      marquee.style.animationPlayState = 'paused';
    });

    e.addEventListener('mouseout', () => {
      marquee.style.animationPlayState = 'running';
    });
  })

}





