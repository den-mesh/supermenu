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
    const audioSubTitle = document.querySelector('.random__sound--text');
    const audioArr = [
      '../assets/saundModule/sondtracks/Shoop.mp3',
      '../assets/saundModule/sondtracks/Taxi.mp3',
      '../assets/saundModule/sondtracks/ironMan.mp3',
      '../assets/saundModule/sondtracks/men_in_black.mp3',
      '../assets/saundModule/sondtracks/pirates.mp3',
      '../assets/saundModule/sondtracks/the_broken_people.mp3',
      '../assets/saundModule/sondtracks/venom.mp3',
    ];

    playSound.src = '';
    randomSaundBlock.style.visibility = 'visible';
    playSound.src = randomPath(audioArr);
    playSound.play();
    playSound.control = true;
    
    switch (playSound.src) {
      case 'http://localhost:3000/assets/saundModule/sondtracks/pirates.mp3':
        img.src = '../assets/saundModule/films_Pict/pirates.jpg';
        audioSubTitle.textContent = 'Pirates of Caribian';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/Shoop.mp3':
        img.src = '../assets/saundModule/films_Pict/Deadpool.jpg';
        audioSubTitle.textContent = 'Saundtrack of DeadPool';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/men_in_black.mp3':
        img.src = '../assets/saundModule/films_Pict/meninblack.jpg';
        audioSubTitle.textContent = 'Saundtrack of Men In Black';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/the_broken_people.mp3':
        img.src = '../assets/saundModule/films_Pict/Bright.jpg';
        audioSubTitle.textContent = 'Saundtrack of Brigth';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/ironMan.mp3':
        img.src = '../assets/saundModule/films_Pict/ironMan.jpg';
        audioSubTitle.textContent = 'Saundtrack of Iron Man';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/venom.mp3':
        img.src = '../assets/saundModule/films_Pict/venom.jpg';
        audioSubTitle.textContent = 'Saundtrack of Venom';
        break;
      case 'http://localhost:3000/assets/saundModule/sondtracks/Taxi.mp3':
        img.src = '../assets/saundModule/films_Pict/taxi.jpg';
        audioSubTitle.textContent = 'Saundtrack of Taxi';
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
