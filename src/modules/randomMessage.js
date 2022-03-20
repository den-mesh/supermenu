import {Module} from '../core/modules';
import { randomPath } from '../utils';

export class RandomMessages extends Module {
    constructor(type, text) {
        super(type, text)
    }

    showMessage() {
        const MESSAGE = 'https://type.fit/api/quotes';
        const dataContainer = document.querySelector('.random__msg-text');
        dataContainer.style.visibility = 'visible';
        dataContainer.textContent = '';

        const toggleLoader = () => {
            const loaderHTML = document.querySelector('#loader');
            const isHidden = loaderHTML.hasAttribute('hidden');

            if (isHidden) {
                loaderHTML.removeAttribute('hidden');
            } else {
                loaderHTML.setAttribute('hidden', '');
            }
        }

        const errorMessage = () => {
            const errorHTML = document.querySelector('#error');
            const isHidden = errorHTML.hasAttribute('hidden');

            if (isHidden) {
                errorHTML.removeAttribute('hidden');
            } else {
                errorHTML.setAttribute('hidden', '');
            }
        }

        const renderMessage = async () => {
            try {
                toggleLoader();
                const response = await fetch(MESSAGE);
                const messages = await response.json();
                const randomMessage = randomPath(messages);
                dataContainer.append(randomMessage.text);

            } catch (error) {
                errorMessage();
            } finally {
                toggleLoader();
            }

            setTimeout(() => {
                dataContainer.style.visibility = 'hidden';
            }, 2000)
        }

        renderMessage();
    }
}
