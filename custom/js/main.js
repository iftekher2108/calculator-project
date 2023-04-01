console.log('iftekher mahmud pervez')


let display_q = document.querySelector('.display h2'),
display_r = document.querySelector('.display h4');
console.log(display_q)





// popup click tone 
function ringtone() {
   let tone = new Audio("custom/music/tone.mp3"); 
    tone.play();
    tone.currentTime=0;
}

// js\music\tone_2.mp3


// popup click tone


// calculator functions

function ac_alldelate() {
    display_q.innerHTML=null;
    display_r.innerHTML="";
    ringtone();
}

function delate() {
    display_del = display_q.innerHTML.toString().slice(0,-1);
    display_q.innerHTML= display_del;
    ringtone();
}


// calculator functions





// calculator values

function one() {
    display_q.innerHTML +=1;
    ringtone();
}

function two() {
    display_q.innerHTML+=2;
    ringtone();
}

function three() {
    display_q.innerHTML+=3;
    ringtone();
}

function four() {
    display_q.innerHTML+=4;
    ringtone();
}

function five() {
    display_q.innerHTML+=5;
    ringtone();
}

function six() {
    display_q.innerHTML+=6;
    ringtone();
}

function seven() {
    display_q.innerHTML+=7;
    ringtone();
}

function eight() {
    display_q.innerHTML+=8;
    ringtone();
}

function nine() {
    display_q.innerHTML+=9;
    ringtone();
}

function doublezero() {
    display_q.innerHTML+="00";
    ringtone();
}

function zero() {
    display_q.innerHTML+=0;
    ringtone();
}

// calculator values



// calculator oparetor

function parcent() {
    display_q.innerHTML+="%";
    ringtone();
}

function divide() {
    display_q.innerHTML+="/";
    ringtone();
}

function multiply() {
    display_q.innerHTML+="*"
    ringtone();
}

function minus() {
    display_q.innerHTML+="-";
    ringtone();
}

function plus() {
    display_q.innerHTML+="+";
    ringtone();
}

// calculator oparetor


// equal function

function equal() {
    display_r.innerHTML=eval(display_q.innerHTML);
    ringtone();
}



// equal function