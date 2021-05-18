//exo1

let input = document.getElementsByTagName('input')[0];

console.log(input);

input.addEventListener('focus', (e) => {
    e.target.style.background = 'blue';
  });

  //exo2
  let input2 = document.getElementsByTagName('input')[1];
  input2.addEventListener('focus', (e) => {
    e.target.style.background = 'blue';

  });

  input2.addEventListener('focusout', (e) => {
    e.target.style.background = 'white';

  });
//3

  let p = document.querySelectorAll('p')[0];
  let p1 = document.querySelectorAll('p')[1];
  let p2 = document.querySelectorAll('p')[2];
 
p.innerText= p1.innerText;
p2.innerText = p1.innerText;

console.log(p);



//4
//choose correct input
const inputs = document.getElementsByTagName('input')[2];
//choose correct log
const log = document.getElementById('exo4');
inputs.addEventListener('change', updateValue);

function updateValue(e) {
    log.textContent = e.target.value;
  }


//5

let img = document.getElementsByClassName('img-responsive')[0];
let click = document.getElementsByClassName('mb-2')[0];
console.log(img);

click.addEventListener ('click',()=>{
img.setAttribute('src', "./src/image/tartine.png")
});

//6

let img2  = document.getElementsByClassName('img-responsive')[1];

let pic = document.getElementsByClassName('img-responsive')[2];

let src;
img2.addEventListener('click',()=>{
    src= img2.src;
})
pic.addEventListener('click',() => {
pic.setAttribute('src',src)
});

//7

let btn = document.getElementsByClassName('btn')[3];

console.log(btn);

let p4 = document.querySelectorAll('p')[5];
let p5 = document.querySelectorAll('p')[6];
let p7;
btn.addEventListener('click',()=>{
    p7=p5.innerText;
    p5.innerText = p4.innerText
    p4.innerText = p7;
})

