import {Module} from '../core/modules';
import { randomPath } from '../utils';

export class ShapeModule extends Module {
  constructor(type, text){
    super(type, text)
  }

  trigger() {
    const shapeBlock = document.querySelector('.random__shapes');
    const shapeImg = document.querySelector('.shape__img');
    shapeBlock.style.visibility = 'visible';
    shapeImg.style.opacity = 1;

    let svgArr = [
      '../assets/shapes/circle.svg',
      '../assets/shapes/polygon.svg',
      '../assets/shapes/rounded.svg',
      '../assets/shapes/square-black.svg',
      '../assets/shapes/star.svg',
      '../assets/shapes/triangle.svg'
    ];

    shapeImg.src = randomPath(svgArr);
    
    setTimeout( () => {
      shapeBlock.style.visibility = 'hidden';
      shapeImg.style.opacity = 0;
    }, 1000)
  }
}
