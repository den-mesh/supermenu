import { Module } from '../core/modules';
import { dropDown, randomPath } from '../utils';

export class SoundModule extends Module {
  constructor(type, text){
    super(type, text)
  }

  sound() {
    const randomSaundBlock = document.querySelector('.random__sound');
    const img = document.querySelector('.random__sound--img');
    const close = document.querySelector('.sound__close');
    const playSound = document.querySelector('.random__audio');
    // const audioSubTitle = document.querySelector('.random__sound--text');
    const audioArr = [
      '../assets/saundModule/sondtracks/Shoop.mp3',
      '../assets/saundModule/sondtracks/Taxi.mp3',
      '../assets/saundModule/sondtracks/ironMan.mp3',
      '../assets/saundModule/sondtracks/men_in_black.mp3',
      '../assets/saundModule/sondtracks/pirates.mp3',
      '../assets/saundModule/sondtracks/the_broken_people.mp3',
      '../assets/saundModule/sondtracks/venom.mp3',
      '../assets/saundModule/sondtracks/fast.mp3',
      '../assets/saundModule/sondtracks/alien.mp3',
      '../assets/saundModule/sondtracks/comton.mp3',
      '../assets/saundModule/sondtracks/negrozi.mp3',
      '../assets/saundModule/sondtracks/stepup.mp3'
    ];

    playSound.src = '';
    randomSaundBlock.style.visibility = 'visible';
    playSound.src = randomPath(audioArr);
    playSound.play();
    playSound.controls = true;
    
    switch (playSound.src) {
      case 'http://localhost:3000/assets/saundModule/sondtracks/pirates.mp3':
        img.src = '../assets/saundModule/films_Pict/pirates.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/Shoop.mp3':
        img.src = '../assets/saundModule/films_Pict/Deadpool.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/men_in_black.mp3':
        img.src = '../assets/saundModule/films_Pict/meninblack.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/the_broken_people.mp3':
        img.src = '../assets/saundModule/films_Pict/Bright.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/ironMan.mp3':
        img.src = '../assets/saundModule/films_Pict/ironMan.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/venom.mp3':
        img.src = '../assets/saundModule/films_Pict/venom.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/Taxi.mp3':
        img.src = '../assets/saundModule/films_Pict/taxi.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/fast.mp3':
        img.src = '../assets/saundModule/films_Pict/fast.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/alien.mp3':
        img.src = '../assets/saundModule/films_Pict/alien.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/comton.mp3':
        img.src = '../assets/saundModule/films_Pict/compton.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/negrozi.mp3':
        img.src = '../assets/saundModule/films_Pict/neGrozi.jpg';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/stepup.mp3':
        img.src = '../assets/saundModule/films_Pict/step.jpg';
        break;
    }

    dropDown(randomSaundBlock);

    close.addEventListener('click', () => {
      randomSaundBlock.style.visibility = 'hidden';
      setTimeout( () => {
        randomSaundBlock.style.left = '50%';
        randomSaundBlock.style.transform = 'translateX(-50%)';
        randomSaundBlock.style.top = '100px';
      }, 400)
      playSound.pause();
    })
  }
}
