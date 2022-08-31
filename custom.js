var audio=document.getElementById('audio');
var playpausebtn=document.getElementById('playpausebtn');
var count=0;
var back=document.getElementById('back');
function playpause(){
    if(count==0){
        count=1;
        audio.play();
        back.play();
        playpausebtn.innerHTML="Pause &#10074;&#10074;";
    }
    else{
        count=0;
        audio.pause();
        back.pause();
        playpausebtn.innerHTML="Resume &#9658;";
    }
}
function stop(){
    playpause
    audio.pause();
    audio.currentTime = 0;
    playpausebtn.innerHTML="Play &#9658;";
}
