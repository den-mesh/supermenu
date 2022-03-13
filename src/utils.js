const stylesDirection = ['to right', 'to bottom right', '-90deg']

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

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
    <div class="target__click">
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

export function RandomArray(min, max) {
  let randomNumber = min + Math.random() * (max + 1 - min)
  return Math.floor(randomNumber)
}