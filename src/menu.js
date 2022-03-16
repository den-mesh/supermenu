import { Menu } from './core/menu';
import { ClicksModule } from './modules/clicks.module';
import { RandomMessages } from './modules/randomMessage';
import { animateVisibleEl, animateDownHideEl, animateOpacityHideEl, changeGradient} from './utils';
import { clicksAnalitycs, timer, randomMessage } from './utils';
import {Timer} from './modules/timer'

const screens = document.querySelectorAll('.screen')
const goToNextScreen = document.querySelector('.go-next-screen')
const footerText = document.querySelector('.footer__text')
const btnStartUsing = document.querySelector('.start-using')
const btnSeeCode = document.querySelector('.see-code')
const warningMessage = document.querySelector('.warning-message')
const btnRandomBg = document.querySelector('#background')

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
    }

    open() {
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
        })

        this.el.addEventListener('mouseleave', () => {
            this.close();
        })

        btnRandomBg.addEventListener('click', () => {
            document.body.style.background = changeGradient()
        })

        document.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            let {layerX} = event
            let {layerY} = event

            this.el.classList.remove('hidden')

            if (this.el.classList.contains('opacity-hidden-ease')) {
                this.el.classList.remove('opacity-hidden-ease')
            }

            setTimeout(() => {
                this.el.style.opacity = 1
            }, 100)

            this.el.style.top = `${layerY - 20}px`
            this.el.style.left = `${layerX - 20}px`
        })
    }

    close() {
        if (this.el.style.opacity = 1) {
            this.el.style.opacity = 0

            setTimeout(() => {
                this.el.classList.add('hidden')
            }, 200)
        }
    }

    add() {
        clicksAnalitycs(this.el, ClicksModule);
        timer(this.el, Timer);
        randomMessage(this.el, RandomMessages);
    }
}
