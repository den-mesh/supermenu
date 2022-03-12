import './styles.css'

const screens = document.querySelectorAll('.screen')
const goToNextScreen = document.querySelector('.go-next-screen')
const footerText = document.querySelector('.footer__text')
const btnStartUsing = document.querySelector('.start-using')
const btnSeeCode = document.querySelector('.see-code')
const warningMessage = document.querySelector('.warning-message')
const supermenu = document.querySelector('#supermenu')

function animateVisibleEl (el) {
  setTimeout(() => {
    el.classList.remove('hidden')
  }, 500)
  
  setTimeout(() => {
    el.classList.add('visible')
  }, 2000)
}

function animateDownHideEl (el) {
  el.classList.add('down-hide-ease')

  setTimeout(() => {
    el.classList.add('hidden')
  }, 2000)
}

function animateOpacityHideEl (el) {
  el.classList.add('opacity-hidden-ease')

  setTimeout(() => {
    el.classList.add('hidden')
  }, 2000)
}

function animateOpacityVisibleEl (el) {
  el.classList.add('visible')
}

goToNextScreen.addEventListener('click', () => {
  screens[0].classList.add('up')
  screens[1].classList.remove('right')

  animateDownHideEl(footerText)
  animateVisibleEl(btnStartUsing)
  animateOpacityHideEl(warningMessage)
})

btnStartUsing.addEventListener('click', function (btn) {
  screens[1].classList.add('up')
  screens[2].classList.remove('right')

  animateDownHideEl(this)
  animateDownHideEl(btnStartUsing)
  animateVisibleEl(btnSeeCode)

  onContextMenu()
})

function onContextMenu () {
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault()

    let { layerX } = event
    let { layerY } = event

    supermenu.classList.remove('hidden')

    if (supermenu.classList.contains('opacity-hidden-ease')) {
      supermenu.classList.remove('opacity-hidden-ease')
    }

    setTimeout(() => {
      supermenu.style.opacity = 1
    }, 300)

    supermenu.style.top = `${layerY}px`
    supermenu.style.left = `${layerX}px`
  })
}

document.addEventListener('click', () => {
  if (supermenu.style.opacity = 1) {
    supermenu.style.opacity = 0

    setTimeout(() => {
      supermenu.classList.add('hidden')
    }, 700)
  }
})

const btnRandomBg = document.querySelector('#background')

const stylesDirection = ['to right', 'to bottom right', '-90deg']

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

function changeGradient () {
  let colorOne = getRandomColor()
  let colorTwo = getRandomColor()
  return getRandomLinearGradient(colorOne, colorTwo)
}

btnRandomBg.addEventListener('click', () => {
  document.body.style.background = changeGradient()
})