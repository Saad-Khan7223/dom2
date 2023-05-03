var div=document.getElementById('events')
var spanForx=document.getElementById('mousexValue')
var spanFory=document.getElementById('mouseyValue')

div.addEventListener('mouseup',Over)
function Over(e){
    console.log(e);
    spanForx.innerText=e.x
    spanFory.innerText=e.y
    console.log(document.body.style.backgroundColor=`rgb(${e.x},${e.y},${e.clientX})`)
}

var img=document.getElementById('img')
console.log(img.src);
var src='http://127.0.0.1:5500/events/bulb2.jpg'
var src2='http://127.0.0.1:5500/events/bulb1.jpg'
img.addEventListener('mouseenter',Onbulb)
function Onbulb(e){
    console.log(e);
    img.src=src
}
img.addEventListener('mouseleave',Offbulb)

function Offbulb(e){
    img.src=src2
}