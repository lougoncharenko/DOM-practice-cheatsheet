//DOM CRASH COURSE //
console.log(document.getElementById('header-title'));
let headerTitle= document.getElementById('header-title');
headerTitle.textContent="Hello";
headerTitle.innerText="goodbye";
headerTitle.style.color="black";
let header=document.getElementById('main-header');
header.style.borderBottom= 'solid 3px #000'; 

let items =document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].style.fontWeight='bold';
items[1].style.backgroundColor="yellow";

for (let i=0; i<items.length; i++){
    items[i].style.backgroundColor="grey";
}

//getelementsbytagname identical to classname
let li =document.getElementsByTagName('li');
console.log(li);

//queryselector

let header=document.querySelector('#main-header');
let input=document.querySelector('input')
input.value="Hello World"

let submit=document.querySelector('input[type="submit"]');
submit.value="SEND" //changes the wording on the button 

let item=document.querySelector('.list-group-item');
item.style.color='red'; //makes button red

querySelectorAll
let titles=document.querySelectorAll('.title');
console.log(titles);

let odd=document.querySelectorAll('li:nth-child(odd)');

for (let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor= "#f4f4f4";}


//    Traversing the DOM

var itemList=document.querySelector('#items');
console.log(itemList.parentNode);

//childnodes
console.log(itemList.children);

//firstchild
console.log(itemList.firstChild);//includes white space;text

//createDiv
let newDiv= document.createElement('div');
//add class
newDiv.className="hello";
//add id
newDiv.id='hello1'
newDiv.setAttribute('title', 'Hello Div');
//create textNode
let newDivText=document.createTextNode('Hello World');

//add text to div
 newDiv.appendChild(newDivText);
let container=document.querySelector('header .container');
 let h1=document.querySelector('header h1');
 container.insertBefore(newDiv, h1);
 console.log(newDiv);

let button=document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
     document.getElementById('header-title').textContent="changed";
     document.querySelector('#main').style.backgroundColor='red'
    console.log(e);
    console.log(e.target); //gets the element that was clicked
    console.log(e.target.id);
    let output=document.getElementById('output');
    
    console.log(e.type);//tells us what type of event it is
    
}



