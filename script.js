let choice1 = document.querySelector('#choice1');
// let val = choose.value;
choice1.addEventListener('click', function(){
    console.log(choice1);
});

let choice2 = document.querySelector('#choice2');
// let val = choose.value;
choice2.addEventListener('click', function(){
    console.log(choice2);
});

let choice3 = document.querySelector('#choice3');
// let val = choose.value;
choice3.addEventListener('click', function(){
    console.log(choice3);
});


let audioOn = document.querySelector('.swap-on');
let audioOff = document.querySelector('.swap-off');
let audiobtn = document.querySelector('.swap');
const audio = new Audio('./Music/Country.mp3');



audioOn.addEventListener('click', function(){

    
    if(audiobtn = "swap-on"){
        audio.volume = 0.1;
        audio.play();
        console.log(audiobtn);

    }

    
});

audioOff.addEventListener('click', function(){

    
    if(audiobtn = "swap-off"){
        audio.pause();
        console.log(audiobtn);
    
    }
    
});