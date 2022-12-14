'use strict';

{
    const dataMusic = [
        {
            id: '1',
            artist: 'The weeknd',
            track: 'Save your tears',
            poster: 'img/photo1.jpg',
            mp3: 'audio/The Weeknd - Save Your Tears.mp3',
        },
        {
            id: '2',
            artist: 'Imagine Dragons',
            track: 'Follow You',
            poster: 'img/photo2.jpg',
            mp3: 'audio/Imagine Dragons - Follow You.mp3',
        },
        {
            id: '3',
            artist: 'Tove Lo',
            track: 'How Long',
            poster: 'img/photo3.jpg',
            mp3: 'audio/Tove Lo - How Long.mp3',
        },
        {
            id: '4',
            artist: 'Tom Odell',
            track: 'Another Love',
            poster: 'img/photo4.jpg',
            mp3: 'audio/Tom Odell - Another Love.mp3',
        },
        {
            id: '5',
            artist: 'Lana Del Rey',
            track: 'Born To Die',
            poster: 'img/photo5.jpg',
            mp3: 'audio/Lana Del Rey - Born To Die.mp3',
        },
        {
            id: '6',
            artist: 'Adele',
            track: 'Hello',
            poster: 'img/photo6.jpg',
            mp3: 'audio/Adele - Hello.mp3',
        },
        {
            id: '7',
            artist: 'Tom Odell',
            track: 'Can\'t Pretend',
            poster: 'img/photo7.jpg',
            mp3: 'audio/Tom Odell - Can\'t Pretend.mp3',
        },
        {
            id: '8',
            artist: 'Lana Del Rey',
            track: 'Young And Beautiful',
            poster: 'img/photo8.jpg',
            mp3: 'audio/Lana Del Rey - Young And Beautiful.mp3',
        },
        {
            id: '9',
            artist: 'Adele',
            track: 'Someone Like You',
            poster: 'img/photo9.jpg',
            mp3: 'audio/Adele - Someone Like You.mp3',
        },
        {
            id: '10',
            artist: 'Imagine Dragons',
            track: 'Natural',
            poster: 'img/photo10.jpg',
            mp3: 'audio/Imagine Dragons - Natural.mp3',
        },
        {
            id: '11',
            artist: 'Drake',
            track: 'Laugh Now Cry Later',
            poster: 'img/photo11.jpg',
            mp3: 'audio/Drake - Laugh Now Cry Later.mp3',
        },
        {
            id: '12',
            artist: 'Madonna',
            track: 'Frozen',
            poster: 'img/photo12.jpg',
            mp3: 'audio/Madonna - Frozen.mp3',
        },
        {
            id: '13',
            artist: 'Mary Gu',
            track: '??????????????',
            poster: 'img/photo13.jpg',
            mp3: 'audio/Mary Gu - ??????????????.mp3',
        },
        {
            id: '14',
            artist: 'HammAli & Navai',
            track: '????????????',
            poster: 'img/photo14.jpg',
            mp3: 'audio/HammAli & Navai - ????????????.mp3',
        },
        {
            id: '15',
            artist: 'Shawn Mendes, Camila Cabello',
            track: 'Se??orita',
            poster: 'img/photo15.jpg',
            mp3: 'audio/Shawn Mendes, Camila Cabello - Se??orita.mp3',
        },
        {
            id: '16',
            artist: 'KALVADOS',
            track: '????????????????',
            poster: 'img/photo16.jpg',
            mp3: 'audio/KALVADOS - ????????????????.mp3',
        },
        {
            id: '17',
            artist: 'RSAC',
            track: 'NBA',
            poster: 'img/photo17.jpg',
            mp3: 'audio/RSAC - NBA.mp3',
        },
        {
            id: '18',
            artist: 'Minelli',
            track: 'Rampampam',
            poster: 'img/photo18.jpg',
            mp3: 'audio/Minelli - Rampampam.mp3',
        },
        {
            id: '19',
            artist: 'Masked Wolf',
            track: 'Astronaut In The Ocean',
            poster: 'img/photo19.jpg',
            mp3: 'audio/Masked Wolf - Astronaut In The Ocean.mp3',
        },
        {
            id: '20',
            artist: 'Imagine Dragons',
            track: 'Bones',
            poster: 'img/photo20.jpg',
            mp3: 'audio/Imagine Dragons - Bones.mp3',
        },
        {
            id: '21',
            artist: '????????',
            track: '??????????????????',
            poster: 'img/photo21.jpg',
            mp3: 'audio/???????? - ??????????????????.mp3',
        },
        {
            id: '22',
            artist: 'Jaydan Wolf',
            track: 'Smells Like Teen Spirit',
            poster: 'img/photo22.jpg',
            mp3: 'audio/Jaydan Wolf - Smells Like Teen Spirit.mp3',
        },
        {
            id: '23',
            artist: '???????? ????????',
            track: '?????? ?????? ????????',
            poster: 'img/photo23.jpg',
            mp3: 'audio/???????? ???????? - ?????? ?????? ????????.mp3',
        },
        {
            id: '24',
            artist: 'Zivert',
            track: 'WAKE UP!',
            poster: 'img/photo24.jpg',
            mp3: 'audio/Zivert - WAKE UP!.mp3',
        },
        {
            id: '25',
            artist: 'Dame Dame ft. Lunis',
            track: 'Beggin',
            poster: 'img/photo25.jpg',
            mp3: 'audio/Dame Dame ft. Lunis - Beggin.mp3',
        },
        {
            id: '26',
            artist: 'Dynoro, Gigi D\'Agostino',
            track: 'In My Mind',
            poster: 'img/photo26.jpg',
            mp3: 'audio/Dynoro, Gigi D\'Agostino - In My Mind.mp3',
        },
        {
            id: '27',
            artist: 'The Kid LAROI, Justin Bieber',
            track: 'STAY',
            poster: 'img/photo27.jpg',
            mp3: 'audio/The Kid LAROI, Justin Bieber - STAY.mp3',
        },
        {
            id: '28',
            artist: 'Markul',
            track: '????????????',
            poster: 'img/photo28.jpg',
            mp3: 'audio/Markul - ????????????.mp3',
        },
        {
            id: '29',
            artist: 'N??, ????????',
            track: '????????????????',
            poster: 'img/photo29.jpg',
            mp3: 'audio/N??, ???????? - ????????????????.mp3',
        },
        {
            id: '30',
            artist: '?????? ????????????, Dose',
            track: '????????????',
            poster: 'img/photo30.jpg',
            mp3: 'audio/?????? ????????????, Dose - ????????????.mp3',
        },
        {
            id: '31',
            artist: 'DJ SMASH, NIVESTA',
            track: '??????????????',
            poster: 'img/photo31.jpg',
            mp3: 'audio/DJ SMASH, NIVESTA - ??????????????.mp3',
        },
        {
            id: '32',
            artist: 'Trippy Music',
            track: 'Derniere Danse',
            poster: 'img/photo32.jpg',
            mp3: 'audio/Trippy Music - Derniere Danse.mp3',
        },
        {
            id: '33',
            artist: 'Foushe??',
            track: 'Deep End',
            poster: 'img/photo33.jpg',
            mp3: 'audio/Foushe?? - Deep End.mp3',
        },
        {
            id: '34',
            artist: 'Alis Shuka',
            track: 'Not About Us',
            poster: 'img/photo34.jpg',
            mp3: 'audio/Alis Shuka - Not About Us.mp3',
        },
        {
            id: '35',
            artist: 'HENSY',
            track: '???????????????? ?? ????????????',
            poster: 'img/photo35.jpg',
            mp3: 'audio/HENSY - ???????????????? ?? ????????????.mp3',
        },
    ];

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
    const muteBtn = document.querySelector('.player__controller_mute');
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
        audio.src = track.mp3;

        playerTitle.textContent = `${track.track}`;
        playerArtist.textContent = `${track.artist}`;

        audio.play();

        player.classList.add('player_active');
        pauseBtn.classList.remove('player__icon_play');
        player.dataset.idTrack = id;

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
                <img src="${data.poster}"
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
            <span>?????????????? ??????</span>
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
        if (catalogContainer.clientHeight > traksCard[0].clientHeight * 3) {
            traksCard[traksCard.length - i].style.display = 'none';
            checkCount(catalogAddBtn, i + 1);
        } else if (i !== 1) {
            catalogContainer.append(catalogAddBtn);
        }
    };

    const renderCatalog = (dataList) => {
        playlist = [...dataList];
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

    const getItemsList = () => {
        const inputValue = document.querySelector('.search__input').value;

        const search = inputValue.trim().toLowerCase();

        return playlist.filter((item) =>
            item.artist.toLowerCase().includes(search) ||
                item.track.toLowerCase().includes(search));
    };

    const addEventListener = () => {
        prevBtn.addEventListener('click', playMusic);
        nextBtn.addEventListener('click', playMusic);

        audio.addEventListener('ended', () => {
            nextBtn.dispatchEvent(new Event('click', {bubbles: true}));
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
            // console.log('data: ', data);
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

        search.addEventListener('submit', event => {
            event.preventDefault();

            playlist = getItemsList();
            renderCatalog(playlist);
        });
    };

    const init = () => {
        audio.volume = localStorage.getItem('volume') || 1;
        playerVolumeInput.value = audio.volume * 100;

        renderCatalog(dataMusic);

        addEventListener();
    };

    init();
}
