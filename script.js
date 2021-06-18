var audio = document.createElement('audio');
var playpauseBtn = document.getElementById('PlayPauseBTN');
audio.setAttribute('src','sound.mp3');
var count = 0;
function playpause(){
    if(count == 0){
        count = 1;
        audio.play();
    }
    else{
        count = 0;
        audio.pause();
    }
}
