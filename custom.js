var audio=document.getElementById('audio');
var playpausebtn=document.getElementById('playpausebtn');
var count=0;
var back=document.getElementById('back');
let btngr = document.getElementById('btn-group');
// btngr.addEventListener("mouseleave",()=>{
//     if(btngr.style.marginTop === '5%'){
//         btngr.style.marginTop = '26%'
//     }else{
//         btngr.style.marginTop = '5%'
//     }
    
// })

btngr.onmouseleave = function(){
    if(btngr.style.marginTop === '5%'){
        btngr.style.marginTop = '26%'
    }else{
        btngr.style.marginTop = '5%'
    }
}

document.querySelector("h1").addEventListener("mouseleave",()=>{
    if(btngr.style.marginTop === '5%'){
        btngr.style.marginTop = '26%'
    }else{
        btngr.style.marginTop = '5%'
    }
    
})

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
        playpausebtn.innerHTML="Play &#9658;";
    }
}
function stop(){
    playpause
    audio.pause();
    audio.currentTime = 0;
    playpausebtn.innerHTML="Play &#9658;";
}
