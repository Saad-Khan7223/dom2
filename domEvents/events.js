// function click1(){
//     alert('Working')
// }

var button=document.getElementById('buttonRight');
// console.log(button);
// button.addEventListener('click',function(){
//     console.log('working');
// })
var count=1

function clickRight(e){
    console.log('working',e.key );
    var b=e.key
if(b==='ArrowRight' ){
    var imgsrc=document.getElementById('image')
  var url= imgsrc.src
  var arr=url.split('/')
  console.log(url);
 // console.log(arr);
  arr.pop()
  arr.push('1.jpg')
//   console.log(arr);
  var urlNew=arr.join('/')
  console.log(urlNew);
  imgsrc.src=urlNew;
  count++
}
    if(b==='ArrowRight'  && count%2!==0){
    var imgsrc=document.getElementById('image')
    var url= imgsrc.src
    var arr=url.split('/')
    console.log(url);
   // console.log(arr);
    arr.pop()
    arr.push('2.jpg')
  //   console.log(arr);
    var urlNew=arr.join('/')
    console.log(urlNew);
    imgsrc.src=urlNew 
    console.log(count);
    }
}

button.addEventListener('keydown',clickRight)

var input=document.getElementById('input')
var item=document.getElementById('item')
var button1=document.getElementById('add')
var text=''
input.addEventListener('change',inputValue)
function inputValue(e) {
  text=e.target.value
}
button1.addEventListener('click',Add)
function Add(e){
  var ul=document.createElement('ul')
  var li=document.createElement('li');
  var textnode=document.createTextNode(text)
  console.log(textnode);
  li.appendChild(textnode)
  ul.appendChild(li)
  item.appendChild(ul)
}




