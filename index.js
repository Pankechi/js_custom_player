'use strict'
const playerWrapper = document.querySelector('.player__wrapper')

const player = document.querySelector('.player')

const albumImg = document.querySelector('.album__img')

const volumeInput = document.querySelector('.volume__control')

const playButton = document.querySelector('.play__button')

const stopButton = document.querySelector('.stop__button')

const nextButton = document.querySelector('.next__button')

const prevButton = document.querySelector('.prev__button')

const songInfo = document.querySelector('.song__info')

let currentSong = 0

//сетап первого трека
player.setAttribute('src', playlist[currentSong].link)
songInfo.innerHTML = [playlist[currentSong].band, playlist[currentSong].song].join(' - ')
albumImg.setAttribute('src', playlist[currentSong].cover)



//кнопки и функции
const playSong = () => {
  player.play()
  setInterval( () => {
    let songDuration = player.duration

    let songCurrentTime = player.currentTime

    if (songCurrentTime === songDuration) {
      nextSong()
    }
  }, 2000)
  playButton.style.display = 'none'
  stopButton.style.display = 'block'
}

const stopSong = () => {
  player.pause()
  stopButton.style.display = 'none'
  playButton.style.display = 'block'
}

const castSomeAnimation = () => {
  albumImg.classList.add('player-slide-animation')
  playSong() 
  setTimeout(() => 
  {albumImg.classList.remove('player-slide-animation')
    }, 600)
}

const nextSong = () => {
  currentSong +=1
  currentSong <= (playlist.length-1) ? currentSong : currentSong = 0
  player.setAttribute('src', playlist[currentSong].link)
  songInfo.innerHTML = [playlist[currentSong].band, playlist[currentSong].song].join(' - ')
  albumImg.setAttribute('src', playlist[currentSong].cover)
  albumImg.classList.add('player-slide-animation')
  castSomeAnimation()
}

const prevSong = () => {
  currentSong -=1
  currentSong < 0? currentSong =0 : currentSong
  player.setAttribute('src', playlist[currentSong].link)
  songInfo.innerHTML = [playlist[currentSong].band, playlist[currentSong].song].join(' - ')
  albumImg.setAttribute('src', playlist[currentSong].cover)
  castSomeAnimation()
}

// const setVolume = (event) => {
//   let volume = event.target.value
//   player.volume = volume
// }

// volumeInput.addEventListener('input', (event) => setVolume(event))

playButton.addEventListener('click', playSong)

stopButton.addEventListener('click', stopSong)

nextButton.addEventListener('click', nextSong)

prevButton.addEventListener('click', prevSong)

