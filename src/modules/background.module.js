import {Module} from '../core/modules';
import { changeGradient } from '../utils';

export class BackgroundModule extends Module {
  constructor(type, text){
    super(type, text)
  }

  chengeBackground() {
    document.body.style.background = changeGradient()
  }
}
