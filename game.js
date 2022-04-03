let canvas= document.getElementById('canvas');
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
let c= canvas.getContext('2d');

let cX= 150;
let cWidth= 100;
let cHeight= 100;
let cY= window.innerHeight-cHeight;
let dy= 1;
let dyy= 0.3;
let dX= 10;

document.addEventListener('keydown', (e)=>controller(e))


function controller(e) {
    if (e.repeat) {
        console.log('d is repeating here bro');
        dX+=2;
    }else{
        if (dX>10) {
            dX-=1;
        }
    }
    // console.log(e);
    if (e.key==='w') {
        cY= cY- 100;
        dy=1;
        if (e.repeat) {
            console.log('w is repeating');
        }
    }
    //right keys for d and right keys
    else if(e.key==='d' ){
        cX=cX+ dX;
    }
    //left keys for a and left keys
    else if(e.key==='a'){
        cX= cX-dX;
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.fillRect(cX, cY, cWidth, cHeight)
    if (cY+cHeight < window.innerHeight) {
        cY= cY+dy;
        dy= dy+dyy;
    }
    else {
        dy=0;
        cY=canvas.height-cHeight;
    }
    // c.fillRect(300, window.innerHeight-100, 100,100)
}
animate()