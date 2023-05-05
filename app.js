//DOM
// console.log(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title="Item Lister"
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[14]);
// // document.all[14].textContent="Hello"
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// Get Element By ID
// console.log(document.getElementById('headerTitle'));
 var headerTitle=document.getElementById('headerTitle');
// headerTitle.textContent="hello";
// headerTitle.innerText="hello world"

// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent)

// headerTitle.innerHTML="<h3>Helo</h3>"
headerTitle.style.borderBottom='solid 3px red'

// Get Element by Class Name

// var items=document.getElementsByClassName('list-group-item')
//  console.log(items);

// console.log(items[1]);
// items[1].textContent='Hey'
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='red'

// items.style.backgroundColor='#f4f4f4';

for(var i=0; i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}


// Get Element by Tag Name

// var items=document.getElementsByTagName('li')
//  console.log(items);
// for(var i=0; i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

//Query Selector used for one item
// var header=document.querySelector('#main-header')
// console.log(header);
// header.style.borderBottom='solid 4px red';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';
// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='yellow';


//Query Selector ALL

var titles=document.querySelectorAll('.title')
// console.log(titles);

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)')

for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor="#f4f4f4"
    even[i].style.backgroundColor="#ccc"
}


// parentNode
// var list=document.querySelector('#items')
//  console.log(list.parentNode);
// list.parentNode.style.backgroundColor="#f4f4f4"

// parentElement same as parentNode
// console.log(list.parentElement);

// childNode
// console.log(list.childNodes);

//children

// console.log(list.children);

// first element child
// console.log(list.firstElementChild);

// last element child
// console.log(list.lastElementChild);
// list.lastElementChild.textContent="Saad"

// create Element
//var newdiv=document.createElement('div');
// newdiv.className='color';
// newdiv.className+=' margin';

// newdiv.id="newDiv"
// console.log(newdiv);

// //create Text Node
// var text=document.createTextNode('item5')
// // console.log(text);
// newdiv.appendChild(text)
// console.log(newdiv);

// list.appendChild(newdiv)

var form=document.getElementById('form');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem)

function addItem(e){
    e.preventDefault()

    var newItem=document.getElementById('inputValue');
    console.log(newItem);
    var li=document.createElement('li');
    var button=document.createElement('button');
    var update=document.createElement('button')
    update.className+='btn btn-dark btn-sm float-end update mx-4 fs-5 '
    update.appendChild(document.createTextNode('Update'))
    button.className+='btn btn-danger btn-sm float-end delete fs-5'
   button.appendChild(document.createTextNode('X'))
    li.className='list-group-item';
    var textNode=document.createTextNode(newItem.value);
    li.appendChild(textNode);
   itemList.appendChild(li)
   li.appendChild(button)
   li.appendChild(update)
}

itemList.addEventListener('click',del)
function del(e) {
    if(e.target.classList.contains('delete')){
    let li=e.target.parentElement;
    itemList.removeChild(li)
}
    
}
itemList.addEventListener('click',update)
function update(e){
    ;
    if(e.target.classList.contains('update')){
        let updatedValue=prompt('Enter updated value')
        console.log(updatedValue);
      let li= e.target.parentElement; 
      li.childNodes[0].data=updatedValue;
       
    }
}