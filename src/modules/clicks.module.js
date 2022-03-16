import {Module} from '../core/modules';
import { generateCounterClickhtml } from '../utils';

export class ClicksModule extends Module {
  constructor(type, text){
    super(type, text)
  }

  trigger() {
    const timerWrapper = document.querySelector('.timer__wrapper');
    if (timerWrapper.innerHTML === '') {
      let time = 5;
      let click = 0;
      let dblClick = 0;
      
      const timer = document.querySelector('.timer');
      const timerWrapper = document.querySelector('.timer__wrapper');
      
      timer.style.visibility = 'visible';
      timerWrapper.insertAdjacentHTML('afterbegin', generateCounterClickhtml(time, click, dblClick));
      const timeHtml = document?.querySelector('.time');
      const clickNum = document?.querySelector('.click__number');
      const dblClickNum = document?.querySelector('.dblclick__number');
      const clickBlok = document?.querySelector('.target__click');

      clickBlok.addEventListener('click', () => {
        click += 1;
      })
      clickBlok.addEventListener('dblclick', () => {
        dblClick += 1;
      })

      const interval = setInterval(() => {
        timeHtml.textContent = time;
        clickNum.textContent = click;
        dblClickNum.textContent = dblClick;

        if(time < 0){
          timerWrapper.innerHTML = '';
          timer.style.visibility = 'hidden';
          time = 5;
          clearInterval(interval);
        }

        time -= 1;
      }, 1000);
    }
  }
}