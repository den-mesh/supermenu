import {Module} from "../core/modules";

export class Timer extends Module {
    constructor(type, text) {
        super(type, text);
    }

    timer() {
        let userTime = Number(prompt("Введите количество секунд Вашего таймера").trim());
        const timeCounter = document.createElement('div');
        timeCounter.classList.add("user-timer");
        document.body.append(timeCounter);

        const timerHTML = document.createElement("div");
        timerHTML.classList.add("user-timer");
        document.body.append(timerHTML);

        if(userTime === null){
            return
        }else {
            setInterval(() => {
                timeCounter.textContent = userTime;
                let time = 2;
                userTime -= 1;
                if (userTime < 0) {
                    timeCounter.remove();
                    timerHTML.style.background = "orange";
                    timerHTML.textContent = "Finished timer";
                    setInterval(() => {
                        time -= 1;
                        if (time === 0) {
                            timerHTML.remove();
                        }
                    }, 2000);
                }
    
            }, 1000)
        }
    }
}
