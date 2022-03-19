const stylesDirection = ['to right', 'to bottom right', '-90deg']

export const generateCounterClickhtml = (time, click, dblClick) => {
  return `
    <div class="timer__counter">
      <span class="timer__title">Time :</span>
      <span class="time">${time}</span>
    </div>
    <div class="counter__clicked">
      <div class="counter__click">
        <span class="click__title">All click :</span>
        <span class="click__number">${click}</span>
      </div>
      <div class="counter__dblclick">
        <span class="dblclick__title">Double click :</span>
        <span class="dblclick__number">${dblClick}</span>
      </div>
    </div>
    <div class="target__click" style="color: #ccc;">
      <p class="target__click--title">Click here</p>
    </div>
  `;
}

export function animateVisibleEl (el) {
  setTimeout(() => {
    el.classList.remove('hidden')
  }, 500)

  setTimeout(() => {
    el.classList.add('visible')
  }, 2000)
}

export function animateDownHideEl (el) {
  el.classList.add('down-hide-ease')

  setTimeout(() => {
    el.classList.add('hidden')
  }, 2000)
}

export function animateOpacityHideEl (el) {
  el.classList.add('opacity-hidden-ease')

  setTimeout(() => {
    el.classList.add('hidden')
  }, 2000)
}

function getRandomColor () {
  let color = '#'
  let letters = '0123456789ABCDEF'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }
  return color
}

function getRandomLinearGradient(color1, color2) {
  let gradient = ''
  let style = Math.floor(Math.random() * stylesDirection.length)
  return gradient = `linear-gradient(${stylesDirection[style]}, ${color1}, ${color2})`
}

export function changeGradient () {
  let colorOne = getRandomColor()
  let colorTwo = getRandomColor()
  return getRandomLinearGradient(colorOne, colorTwo)
}

export const randomPath = (arr) => {
  let index = Math.round(Math.random() * (arr.length - 1));
  return arr[index];
}

export const dropDown = (block) => {
  let offsetX;
  let offsetY;

  block.addEventListener('dragstart', (e) => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  })

  block.addEventListener('dragend', (e) => {
    block.style.top = (e.screenY - offsetY - 100) + 'px';
    block.style.left = (e.screenX - offsetX) + 'px';
    block.style.transform = 'none';
    block.style.cursor = 'grab';
  })

  block.addEventListener('mousedown', () => {
    block.style.cursor = 'grabbing';
  })
}
// modules ---------------------------------------------------------------------------------

export const clicksAnalitycs = (domEl, module) => {
  const clicksModule = new module('clicksModule', 'Click Analytics')
  domEl.querySelector('.supermenu__list').insertAdjacentHTML('afterbegin', clicksModule.toHTML())
  const counterClick = document?.querySelector(`[data-type="clicksModule"]`);
  counterClick.addEventListener('click', () => {
    clicksModule.trigger();
  })
}

export const timer = (domEl, module) => {
  const timer = new module('user-timer', 'Countdown timer')
  domEl.querySelector('.supermenu__list').insertAdjacentHTML('afterbegin', timer.toHTML())
  const timerClick = document?.querySelector(`[data-type="user-timer"]`);
  timerClick.addEventListener('click', () => {
      timer.timer();
  })
}

export const randomMessage = (domEl, module) => {
  const randomMessage = new module('message', 'Random message')
  domEl.querySelector('.supermenu__list').insertAdjacentHTML('afterbegin', randomMessage.toHTML())
  const message = document?.querySelector(`[data-type="message"]`);
  message.addEventListener('click', () => {
    randomMessage.showMessage();
  })
}

export const shapeRender = (domEl, module) => {
  const randomShape = new module('shapes', 'Random shape')
  domEl.querySelector('.supermenu__list').insertAdjacentHTML('afterbegin', randomShape.toHTML())
  const shape = document?.querySelector(`[data-type="shapes"]`);
  shape.addEventListener('click', () => {
    randomShape.trigger();
  })
}

export const randomSaund = (domEl, module) => {
  const saund = new module('random-saund', 'Random saund')
  domEl.querySelector('.supermenu__list').insertAdjacentHTML('afterbegin', saund.toHTML())
  const playSound = document?.querySelector(`[data-type="random-saund"]`);
  playSound.addEventListener('click', () => {
    saund.sound();
  })
}

export const randomBackground = (domEl, module) => {
  const randomBackground = new module('random-background', 'Random backround')
  domEl.querySelector('.supermenu__list').insertAdjacentHTML('afterbegin', randomBackground.toHTML())
  const random = document?.querySelector(`[data-type="random-background"]`);
  random.addEventListener('click', () => {
    randomBackground.chengeBackground();
  })
}

// modules ---------------------------------------------------------------------------------