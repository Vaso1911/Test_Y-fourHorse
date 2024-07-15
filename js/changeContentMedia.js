export const changeContentMedia = () => {
  const heroTitle = document.querySelector('.hero__title');
  const descrTitle = document.querySelector('.descr__container');

  const isNotDesktop = () => window.innerWidth < 1366 && window.innerWidth > 520;
  const isMobile = () => window.innerWidth < 768;

  isNotDesktop() && heroTitle ?
    heroTitle.innerHTML = `ПРЕВРАТИТЕ УЕЗДНЫЙ ГОРОД В СТОЛИЦУ ЗЕМНОГО&nbsp;ШАРА` :
    `<h2 class="hero__title">Превратите уездный город
              <span class="text-c">в&nbsp;столицу</span>
              <span class="text-r">земного шара</span>
            </h2>
    `;

  isMobile() && descrTitle ?
    descrTitle.innerHTML = `
            <h2 class="title descr__title">
                Чтобы поддержать Международный васюкинский турнир
                <img class="descr__img" src="./img/descr.png" alt="descr" aria-hidden="true">
                посетите лекцию на&nbsp;тему:
                <a class="accent-color" href="https://ya.ru/" target="_blank">
                  &laquo;Плодотворная дебютная&nbsp;идея&raquo;
                </a>
            </h2>` : null
}

