import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe")
const player = new Player(iframe)
const localKey2 = "videoplayer-current-time" 

function time(evt) {
    const seconds = evt.seconds;
    localStorage.setItem(localKey2, JSON.stringify(seconds));
};
player.on('timeupdate', throttle(time, 1000));
 player.setCurrentTime(localStorage.getItem(localKey2))