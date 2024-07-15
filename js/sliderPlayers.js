export const sliderPlayers = () => {
  const li = document.querySelectorAll('.players__item');
  const btns = document.getElementById('players-btns');
  const counter = document.getElementById('counter');

  const isDesktop = () => window.innerWidth > 1365;
  const isTablet = () => window.innerWidth >= 768 && window.innerWidth <= 1365;


  const liDesktop = (li) => {
    li[0].classList.add('players__item--active');
    li[1].classList.add('players__item--active');
    li[2].classList.add('players__item--active');
  };

  const liTablet = (li) => {
    li[0].classList.add('players__item--active');
    li[1].classList.add('players__item--active');
  }

  const liMobile = (li) => li[0].classList.add('players__item--active');

  isDesktop() ? liDesktop(li) : isTablet() ? liTablet(li) : liMobile(li);

  const updateCounter = (counter) => {
    const firstIndex = Array.from(li).findIndex(e => e.classList.contains('players__item--active'));
    const count = isDesktop() ? 3 : isTablet() ? 2 : 1;
    counter.textContent = `${firstIndex + count} / ${li.length}`;
  };

  const desktopSlider = (li) => {
    li.forEach(el => {
      el.className === 'players__item players__item--active' ? el.classList.remove('players__item--active') : el.className !== 'players__item players__item--active' ? el.classList.add('players__item--active') : null
    });
    updateCounter(counter);
  }

  const tabletSlider = (li, btn) => {
    const elements = document.querySelectorAll('.players__item.players__item--active');
    const firstIndex = Array.from(li).findIndex(e => e.classList.contains('players__item--active'));

    const nextSlide = () => {
      const startIndex = firstIndex === -1 ? 0 : firstIndex + 2;
      elements.forEach(e => {
        e.classList.remove('players__item--active');
      });

      let count = 0;
      for (let i = startIndex; count < 2; i++) {
        if (i >= li.length) {
          i = 0;
        }
        li[i].classList.add('players__item--active');
        count++
      }

    };
    const prevSlide = () => {
      const startIndex = firstIndex === -1 ? li.length - 1 : (firstIndex - 1 + li.length) % li.length;

      elements.forEach(e => {
        e.classList.remove('players__item--active');
      });

      let count = 0;
      for (let i = startIndex; count < 2; i--) {
        if (i < 0) {
          i = li.length - 1;
        }
        li[i].classList.add('players__item--active');
        count++
      }

    };

    btn.id === 'next' ? nextSlide() : prevSlide()
    updateCounter(counter)
  }

  const mobileSlider = (li, btn) => {
    const elements = document.querySelectorAll('.players__item.players__item--active');
    const firstIndex = Array.from(li).findIndex(e => e.classList.contains('players__item--active'));
    const nextSlide = () => {
      const startIndex = firstIndex === -1 ? 0 : (firstIndex + 1) % li.length;

      elements.forEach(e => {
        e.classList.remove('players__item--active');
      });

      li[startIndex].classList.add('players__item--active');

    }
    const prevSlide = () => {
      const startIndex = firstIndex === -1 ? li.length - 1 : (firstIndex - 1 + li.length) % li.length;

      elements.forEach(e => {
        e.classList.remove('players__item--active');
      });

      li[startIndex].classList.add('players__item--active');

    }
    btn.id === 'next' ? nextSlide() : prevSlide();
    updateCounter(counter)
  }

  updateCounter(counter);

  let slideInterval = setInterval(() => {
    isDesktop() ? desktopSlider(li) :
      isTablet() ? tabletSlider(li, { id: 'next' }) :
        mobileSlider(li, { id: 'next' });
  }, 4000);

  btns.addEventListener('click', (e) => {
    const btn = e.target.closest('button')
    if (btn) {
      clearInterval(slideInterval);
      isDesktop() ? desktopSlider(li) :
        isTablet() ? tabletSlider(li, btn) :
          mobileSlider(li, btn);

      slideInterval = setInterval(() => {
        isDesktop() ? desktopSlider(li) :
          isTablet() ? tabletSlider(li, { id: 'next' }) :
            mobileSlider(li, { id: 'next' });
      }, 4000);
    }

    return
  })
}
