export const boardAnimation = () => {
  const items = document.querySelectorAll('.board__img');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      } else {
        entry.target.style.animationPlayState = 'paused';
      }
    });
  }, observerOptions);

  items.forEach(item => {
    observer.observe(item);
  });
};

