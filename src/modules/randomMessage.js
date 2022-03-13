import {Module} from '../core/modules';
import { RandomArray } from '../utils';

export class RandomMessages extends Module {
  constructor(type, text){
    super(type, text)
  }

  showMessage() {
    const message = document.createElement('div');
    message.style.position = 'absolute';
    message.style.top = '20%';
    message.style.padding  = '20px';
    message.style.backgroundColor = 'green';
    message.textContent = `Уважаемые разработчики данного курса и Куратор группы №20"Премиум" Андрей 
    Наша команда Тахир , Денис, Лада и Алекс выражаем вам огромную благодарность за проделанный труд =)
    Мы очень рады что учимся у вас и надеемся стать хорошими разработчиками!!!
    Но к сожалению нам не хватило времени чтобы разработать оставшиеся таски. В дальнейшем мы доделаем проект!
    Эот проект дал много понимания о командной разработке и хотелось бы практиковать такое на курсе =)
     -------------Это окно закроется через 10 секунд----------------`;


    document.body.append(message);

    setTimeout( () => {
      message.remove();
    }, 10000)
  }
}