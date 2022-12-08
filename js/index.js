'use strict';

const audio = new Audio();
const player = document.querySelector('.player');
const traksCard = document.getElementsByClassName('track');
const pauseBtn = document.querySelector('.controller__pause');
const stopBtn = document.querySelector('.controller__stop');

const playMusic = event => {
    const trackActive = event.currentTarget;

    audio.src = trackActive.dataset.track;
    audio.play();
    player.classList.add('player_active');
    pauseBtn.classList.remove('player__icon_play');

    for (let i = 0; i < traksCard.length; i++) {
        traksCard[i].classList.remove('track_active');
    }

    trackActive.classList.add('track_active');

    trackActive.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            trackActive.classList.remove('track_active-paused');
        } else {
            audio.pause();
            trackActive.classList.add('track_active-paused');
        }
    });
};

for (let i = 0; i < traksCard.length; i++) {
    traksCard[i].addEventListener('click', playMusic);
}

pauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        pauseBtn.classList.remove('player__icon_play');
    } else {
        audio.pause();
        pauseBtn.classList.add('player__icon_play');
    }
});

stopBtn.addEventListener('click', () => {
    audio.src = '';
    // console.log('audio.src: ', audio.src);
    player.classList.remove('player_active');
});
