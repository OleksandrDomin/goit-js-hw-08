
import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveCurrentTime = throttle(function (data)
{localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))}, 1000);

player.on('timeupdate', saveCurrentTime);

player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time"))).then(function (seconds)
{
    Number(localStorage.getItem("videoplayer-current-time"))
}).catch(function (error)
{
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});