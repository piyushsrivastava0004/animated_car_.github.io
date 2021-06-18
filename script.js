var audio = document.createElement('audio');
var playpauseBtn = document.getElementById('PlayPauseBTN');
audio.setAttribute('src','sound.mp3');
audio.loop = true;
// audio.play();
var count = 2;
if(count==2)
{
    count = 1;
    audio.play();
}
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
