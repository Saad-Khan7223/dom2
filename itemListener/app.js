var form=document.getElementById('form')
var input=document.getElementById('input')
var btn=document.getElementById('btnSubmit')
var item=document.getElementById('items')
form.addEventListener('submit',Item)

function Item(e){
console.log(e);
 e.preventDefault();
var newValue=input.value
var li=document.createElement('li');
li.className='list-group-item'
var text=document.createTextNode(newValue)
li.appendChild(text)
item.appendChild(li)

}
