const audio = new Audio("./songs/song.mp3");
const restart = document.querySelector("#restart");
const pause = document.querySelector("#pause");
restart.style.display = "none";
pause.style.display = "none";
const pomodoro = 60 * 25;
let isPause = false;
const display = document.querySelector("#pomodoro");

window.addEventListener('load', () => {
    start();
});

const start = () => {
     setTimeout(() =>{
         Swal.fire({
             title: 'Pomodoro JS!',
             text: 'A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos.',
             imageUrl: 'https://lh3.googleusercontent.com/proxy/I7Y090Hhtzmcbnmli6IJxsVdJitJpiUtt8ZpWaY892WB6N89SkvEARVyU4P2stALmoXqDiWD--d0L8D0GjUFzDfud4KOguCKtgM_DDBaKOcdOFpcQyc2NKLw6NdjCLzBeUY6Fp20xhMMPSjA0jjUaW-PhxwD2-zOerLA8Fi6VCc',
             imageWidth: 400,
             imageHeight: 200,
           imageAlt: 'Custom image',
          })
    }, 2000)

    const start = document.querySelector("#start");

    start.addEventListener('click', () => {
        startPomodoro(pomodoro, display);
        pausePomodoro();
        start.disabled = true;
    })
}

const startPomodoro = (duration, display) => {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            display = timer;
            this.minutes = minutes;
            this.seconds = seconds;
            restart.style.display = "block";
            // playAudio();
            restartPomodoro();

        }
    }, 1000);
}

const playAudio = () => {
    audio.play();

    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 5000)
}

const restartPomodoro = () => {
    restart.addEventListener('click', () => {
        restart.style.display = "none";
        pause.style.display = "none";
        startPomodoro(pomodoro, display);
    })
}

const pausePomodoro = () => {
    setTimeout(() => {
        pause.style.display = "block";
    }, 2000)

    pause.addEventListener('click', () => {
        isPause = true;
    })

}