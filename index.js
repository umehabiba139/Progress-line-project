const parent = document.getElementById('par');
let currentChild = parent.firstElementChild;

function forward() {
  const s = currentChild;
  s.classList.add('fills');
  const l = s.nextElementSibling;
  l.classList.add('filll');
  currentChild = l.nextElementSibling;
}
function previous() {
  const y = currentChild;
  y.classList.remove('fills');
  const l = y.previousElementSibling;
  if (l) {
    l.classList.remove('filll');
    currentChild = l;
  }
}

const nextbtn = document.getElementById('nxtBtn');
nextbtn.addEventListener('click', forward);
const prevbtn = document.getElementById('preBtn');
prevbtn.addEventListener('click', previous);

function removeChild() {
  if (currentChild) {
    parent.removeChild(currentChild);
    currentChild = currentChild.nextElementSibling;
  }
}
const removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', removeChild);

function addChild() {
  const newChild = document.createElement('div');
  newChild.classList.add('circle');
  parent.appendChild(newChild);
}
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addChild);