export const stepSlider = () => {
  const ul = document.querySelector('.step__list')
  ul.innerHTML = `
          <li class="step__item">
            <p class="step__descr">Строительство железнодорожной магистрали Москва-Васюки</p>
            <p class="step__descr">Открытие фешенебельной гостиницы «Проходная пешка» и&nbsp;других небоскрёбов</p>
          </li>
          <li class="step__item">
            <p class="step__descr">
              Поднятие сельского хозяйства в&nbsp;радиусе на&nbsp;тысячу километров: производство овощей, фруктов, икры,
              шоколадных конфет
            </p>
          </li>
          <li class="step__item">
            <p class="step__descr">Строительство дворца для&nbsp;турнира</p>
            <p class="step__descr">Размещение гаражей для&nbsp;гостевого автотранспорта</p>
          </li>
          
          <li class="step__item">
            <p class="step__descr">Постройка сверхмощной радиостанции для&nbsp;передачи всему миру сенсационных результатов</p>
          </li>
          <li class="step__item">
            <p class="step__descr">Создание аэропорта «Большие Васюки» с&nbsp;регулярным отправлением почтовых самолётов
              и&nbsp;дирижаблей
              во&nbsp;все&nbsp;концы света, включая Лос-Анжелос и&nbsp;Мельбурн</p>
          </li>
        `
  const li = document.querySelectorAll('.step__item');
  const counter = document.querySelector('.step__counter');
  const btns = document.getElementById('step-btns');
  const nextBtn = document.getElementById('step-next');
  const prevBtn = document.getElementById('step-prev');
  prevBtn.setAttribute('disabled', 'disabled')

  li[0].classList.add('step__item--active')
  li.forEach(() => {
    counter.innerHTML += `
  <div class="step__pagination"></div>
  `
  })

  const pagination = counter.querySelectorAll('.step__pagination')
  pagination[0].classList.add('step__pagination--active')

  const mobileSlider = (li, btn) => {
    const elements = document.querySelectorAll('.step__item.step__item--active');
    const elementsPagination = document.querySelectorAll('.step__pagination.step__pagination--active');
    const firstIndex = Array.from(li).findIndex(e => e.classList.contains('step__item--active'));

    const nextSlide = () => {
      const startIndex = firstIndex === -1 ? 0 : (firstIndex + 1) % li.length;
      prevBtn.removeAttribute('disabled', 'disabled')

      elements.forEach(e => {
        e.classList.remove('step__item--active');
      });
      elementsPagination.forEach(e => {
        e.classList.remove('step__pagination--active');
      });
      startIndex + 1 == li.length ? nextBtn.setAttribute('disabled', 'disabled') :

        nextBtn.removeAttribute('disabled', 'disabled')
      li[startIndex].classList.add('step__item--active');
      pagination[startIndex].classList.add('step__pagination--active');

    }

    const prevSlide = () => {
      const startIndex = firstIndex === -1 ? li.length - 1 : (firstIndex - 1 + li.length) % li.length;
      nextBtn.removeAttribute('disabled', 'disabled')

      elements.forEach(e => {
        e.classList.remove('step__item--active');
      });
      elementsPagination.forEach(e => {
        e.classList.remove('step__pagination--active');
      });
      startIndex == 0 ? prevBtn.setAttribute('disabled', 'disabled') :
        prevBtn.removeAttribute('disabled', 'disabled')
      li[startIndex].classList.add('step__item--active');
      pagination[startIndex].classList.add('step__pagination--active');
    }
    btn.id === 'step-next' ? nextSlide() : null
    btn.id === 'step-prev' ? prevSlide() : null
  }

  btns.addEventListener('click', (e) => {
    const btn = e.target.closest('button')
    btn && mobileSlider(li, btn);
    return
  })
}
