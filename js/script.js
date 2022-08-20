
document.addEventListener('keydown', function(e) {  
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
     console.log(e);
    drum.classList.toggle('clicked');
    if( drum.classList.contains('clicked')) {
        audio.play();
    } else if (!drum.classList.contains('clicked')){
        audio.pause()
    }
    if(!audio) return;
    audio.currentTime = 0;
    
})
    
 
    
    
    
   
