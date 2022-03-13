import { Menu } from './core/menu';
import { ClicksModule } from './modules/clicks.module';
import { RandomMessages } from './modules/randomMessage';
import {animateVisibleEl, animateDownHideEl, animateOpacityHideEl, changeGradient} from './utils';
import {Timer} from './modules/timer'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
    }

    open() {
        const screens = document.querySelectorAll('.screen')
        const goToNextScreen = document.querySelector('.go-next-screen')
        const footerText = document.querySelector('.footer__text')
        const btnStartUsing = document.querySelector('.start-using')
        const btnSeeCode = document.querySelector('.see-code')
        const warningMessage = document.querySelector('.warning-message')
        const btnRandomBg = document.querySelector('#background')

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
        // clicksModule
        const clicksModule = new ClicksModule('clicksModule', 'Click Analytics')
        this.el.querySelector('.supermenu__list').insertAdjacentHTML('afterbegin', clicksModule.toHTML())
        const counterClick = document?.querySelector(`[data-type="clicksModule"]`);
        counterClick.addEventListener('click', () => {
            const timerWrapper = document.querySelector('.timer__wrapper');
            if (timerWrapper.innerHTML === '') {
                clicksModule.trigger();
            }
        })

        // tomerModule
        const timer = new Timer('user-timer', 'Countdown timer')
        this.el.querySelector('.supermenu__list').insertAdjacentHTML('afterbegin', timer.toHTML())
        const timerClick = document?.querySelector(`[data-type="user-timer"]`);
        timerClick.addEventListener('click', () => {
            timer.timer();
        })

        // Random message
        const randomMessage = new RandomMessages('message', 'Random message')
        this.el.querySelector('.supermenu__list').insertAdjacentHTML('afterbegin', randomMessage.toHTML())
        const message = document?.querySelector(`[data-type="message"]`);
        message.addEventListener('click', () => {
        randomMessage.showMessage();
        })
        // Random message
    }
}
