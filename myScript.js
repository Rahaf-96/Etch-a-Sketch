////////////creating a grid//////////////////

const container = document.getElementById('container');
function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 2fr)`;
    for (let i = 0; i < size ** 2; i++) {                                   
        var gridCell = document.createElement('div');                       
        gridCell.classList.add('grid-cell');                               
        gridCell.style.opacity = "1";                                   
        container.appendChild(gridCell);  
    }
}

var currentSize = 16;                                                   
createGrid(currentSize); 

////////////////// new size /////////////
const reset = document.getElementById('reset');
reset.addEventListener('click', newSize );

function newSize() {
    deleteGrid();
    newSize = prompt('Specify new grid size: ');
    createGrid(newSize);
}

function deleteGrid() { 
    getCells().forEach(cell => cell.parentNode.removeChild(cell));
}

function getCells () {
    return document.querySelectorAll('.grid-cell');
}

/////////////////////// Black color//////////////////

const black = document.getElementById("black");
black.addEventListener('click', blackColor);

function blackColor (){
   getCells().forEach(cell => 
    cell.addEventListener("mouseenter", ()=>{
            cell.style.backgroundColor = "black";
           } ) );                        
}

/////////////////////// Random color//////////////////
 
const random = document.getElementById("random");
random.addEventListener('click', setRandom);

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
     
}

function setRandom(){
    getCells().forEach(cell => 
        cell.addEventListener("mouseenter", ()=>{
            cell.style.backgroundColor = `${randomColor()}`;
        } ) ); 
}


//////////////// eraser //////////////////
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', erase);

function erase() {                 
    getCells().forEach(cell => 
        cell.addEventListener("mouseenter", function (){
                cell.style.backgroundColor = "white";
               } ) ); 
}

////////////// clear //////////////
const clear = document.getElementById('clear');
clear.addEventListener('click', clearGrid );

function clearGrid(){
    getCells().forEach( cell => {
        cell.removeAttribute("style");
    });
}


