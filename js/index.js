'use strict';
{
    const API_URL = 'http://localhost:3024/';

    let dataMusic = [];

    let playlist = [];

    const favoriteList =
        localStorage.getItem('favorite') ?
        JSON.parse(localStorage.getItem('favorite')) : [];

    const audio = new Audio();

    const headerLogo = document.querySelector('.header__logo');
    const favoriteBtn = document.querySelector('.header__favorite-btn');
    const player = document.querySelector('.player');
    const traksCard = document.getElementsByClassName('track');
    const catalogContainer = document.querySelector('.catalog__container');
    const pauseBtn = document.querySelector('.controller__pause');
    const stopBtn = document.querySelector('.controller__stop');
    const prevBtn = document.querySelector('.controller__prev');
    const nextBtn = document.querySelector('.controller__next');
    const likeBtn = document.querySelector('.controller__like');
    const muteBtn = document.querySelector('.controller__mute');
    const playerProgressInput =
            document.querySelector('.player__progress-input');
    const playerTimePassed = document.querySelector('.player__time-passed');
    const playerTimeTotal = document.querySelector('.player__time-total');
    const playerVolumeInput = document.querySelector('.player__volume-input');
    const playerTitle = document.querySelector('.player__title');
    const playerArtist = document.querySelector('.player__artist');

    const search = document.querySelector('.search');

    const pausePlayer = () => {
        const trackActive = document.querySelector('.track_active');

        if (audio.paused) {
            audio.play();
            pauseBtn.classList.remove('player__icon_play');
            trackActive.classList.remove('track_active-paused');
        } else {
            audio.pause();
            pauseBtn.classList.add('player__icon_play');
            trackActive.classList.add('track_active-paused');
        }
    };

    const playMusic = event => {
        event.preventDefault();
        const trackActive = event.currentTarget;

        if (trackActive.classList.contains('track_active')) {
            pausePlayer();
            return;
        }

        let i = 0;
        const id = trackActive.dataset.idTrack;

        const index = favoriteList.indexOf(id);
        if (index !== -1) {
            likeBtn.classList.add('player__icon_like_active');
        } else {
            likeBtn.classList.remove('player__icon_like_active');
        }

        const track = playlist.find((item, index) => {
            i = index;
            return id === item.id;
        });

        audio.src = `${API_URL}${track.mp3}`;

        playerTitle.textContent = `${track.track}`;
        playerArtist.textContent = `${track.artist}`;

        audio.play();

        player.classList.add('player_active');
        player.dataset.idTrack = id;
        pauseBtn.classList.remove('player__icon_play');

        const prevTrack = i === 0 ? playlist.length - 1 : i - 1;
        const nextTrack = i + 1 === playlist.length ? 0 : i + 1;
        prevBtn.dataset.idTrack = playlist[prevTrack].id;
        nextBtn.dataset.idTrack = playlist[nextTrack].id;
        likeBtn.dataset.idTrack = id;

        for (let i = 0; i < traksCard.length; i++) {
            if (id === traksCard[i].dataset.idTrack) {
                traksCard[i].classList.add('track_active');
            } else {
                traksCard[i].classList.remove('track_active');
            }
        }
    };

    const addHandlerTrack = () => {
        for (let i = 0; i < traksCard.length; i++) {
            traksCard[i].addEventListener('click', playMusic);
        }
    };

    const createCard = (data) => {
        const card = document.createElement('a');
        card.href = '#';
        card.classList.add('catalog__item', 'track');
        if (player.dataset.idTrack === data.id) {
            card.classList.add('track_active');
            if (audio.paused) {
                card.classList.add('track_active-paused'); 
            }
        }
        card.dataset.idTrack = data.id;
        card.innerHTML = `
            <div class="track__img-wrap">
                <img src="${API_URL}${data.poster}"
                alt="${data.artist} ${data.track}"
                class="track__poster" width="180" height="180">
            </div>

            <div class="track__info">
                <p class="track__title">${data.track}</p>
                <p class="track__artist">${data.artist}</p>
            </div>
        `;

        return card;
    };

    const createCatalogBtn = () => {
        const catalogAddBtn = document.createElement('button');
        catalogAddBtn.classList.add('catalog__btn-add');
        catalogAddBtn.innerHTML = `
            <span>Увидеть все</span>
            <svg width="24" height="24" viewbox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
            </svg> 
        `;

        catalogAddBtn.addEventListener('click', () => {
            [...traksCard].forEach((item) => {
                item.style.display = '';
                catalogAddBtn.remove();
            });
        });

        return catalogAddBtn;
    };

    const checkCount = (catalogAddBtn, i = 1) => {
        if (catalogContainer.clientHeight + 20 > traksCard[0].clientHeight * 3) {
            traksCard[traksCard.length - i].style.display = 'none';
            checkCount(catalogAddBtn, i + 1);
        } else if (i !== 1) {
            catalogContainer.append(catalogAddBtn);
        }
    };

    const renderCatalog = (dataList) => {
        playlist = [...dataList];

        if (!playlist.length) {
            catalogContainer.innerHTML = 'Не найдено, обновите страницу';

            return;
        }

        catalogContainer.textContent = '';
        const listCards = dataList.map(createCard);
        catalogContainer.append(...listCards);
        addHandlerTrack();
        const catalogAddBtn = createCatalogBtn();
        checkCount(catalogAddBtn);
    };

    const updateTime = () => {
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        const progress = (currentTime / duration) * playerProgressInput.max;
        playerProgressInput.value = progress ? progress : 0;

        const minutesPassed = Math.floor(currentTime / 60) || '0';
        const secondPassed = Math.floor(currentTime % 60) || '0';

        const minutesDuration = Math.floor(duration / 60) || '0';
        const secondDuration = Math.floor(duration % 60) || '0';

        playerTimePassed.textContent = `${minutesPassed}:${secondPassed < 10 ? '0' + secondPassed : secondPassed}`;
        playerTimeTotal.textContent = `${minutesDuration}:${secondDuration < 10 ? '0' + secondDuration : secondDuration}`;
    };

    const addEventListener = () => {
        prevBtn.addEventListener('click', playMusic);
        nextBtn.addEventListener('click', playMusic);

        audio.addEventListener('ended', () => {
            nextBtn.click();
        });

        audio.addEventListener('timeupdate', updateTime);

        playerProgressInput.addEventListener('change', () => {
            const progress = playerProgressInput.value;
            audio.currentTime =
                (progress / playerProgressInput.max) * audio.duration;
        });

        favoriteBtn.addEventListener('click', () => {
            const data =
                dataMusic.filter((item) => favoriteList.includes(item.id));
            renderCatalog(data);
        });

        headerLogo.addEventListener('click', () => {
            renderCatalog(dataMusic);
        });

        likeBtn.addEventListener('click', () => {
            const index = favoriteList.indexOf(likeBtn.dataset.idTrack);
            if (index === -1) {
                favoriteList.push(likeBtn.dataset.idTrack);
                likeBtn.classList.add('player__icon_like_active');
            } else {
                favoriteList.splice(index, 1);
                likeBtn.classList.remove('player__icon_like_active');
            }

            localStorage.setItem('favorite', JSON.stringify(favoriteList));
        });

        playerVolumeInput.addEventListener('input', () => {
            const value = playerVolumeInput.value;
            audio.volume = value / 100;
        });

        muteBtn.addEventListener('click', () => {
            if (audio.volume) {
                localStorage.setItem('volume', audio.volume);
                audio.volume = 0;
                muteBtn.classList.add('player__icon_mute_off');
                playerVolumeInput.value = 0;
            } else {
                audio.volume = localStorage.getItem('volume');
                muteBtn.classList.remove('player__icon_mute_off');
                playerVolumeInput.value = audio.volume * 100;
            }
        });

        pauseBtn.addEventListener('click', pausePlayer);

        stopBtn.addEventListener('click', () => {
            audio.src = '';
            player.classList.remove('player_active');
            document.querySelector('.track_active')
                    .classList.remove('track_active');
        });

        search.addEventListener('submit', (event) => {
            event.preventDefault();
            fetch(`${API_URL}api/music?search=${search.search.value}`)
                    .then((data) => data.json())
                    .then(renderCatalog);
        });
    };

    const init = async () => {
        audio.volume = localStorage.getItem('volume') || 1;
        playerVolumeInput.value = audio.volume * 100;

        dataMusic = await fetch(`${API_URL}api/music `)
                .then((data) => data.json());

        renderCatalog(dataMusic);
        addEventListener();
    };

    init();
}
