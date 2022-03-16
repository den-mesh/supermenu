import {Module} from '../core/modules';
import { changeGradient, randomPath } from '../utils';

export class ShapeModule extends Module {
  constructor(type, text){
    super(type, text)
  }

  trigger() {
    const shapeBlock = document.querySelector('.random__shapes');
    const shapeImg = document.querySelector('.shape__img');
    shapeBlock.style.visibility = 'visible';

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
    }, 1000)
  }
}
