let container = document.querySelector('.etch-container');
let toAdd = document.createDocumentFragment();
let squarePerSide = 20;
let cells;
let fillColor = 'black';

function toRgbString(r,g,b,a){
    return `rgb(${r},${g},${b},${a})`;
}

function makeGrid(){
    for(let i = 0;i<squarePerSide;i++){
        let newRow = document.createElement('div');
        newRow.id = 'row-'+i;
        newRow.classList.add('row');
        for(let j = 0;j<squarePerSide;j++){
            let newCell = document.createElement('div');
            newCell.id = 'cell-'+i+'-'+j;
            newCell.classList.add('cell');
            newCell.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            newRow.appendChild(newCell);
        }
        toAdd.appendChild(newRow);
    }
    container.appendChild(toAdd);
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell)=>{
        cell.addEventListener('mousemove',function(e){
            changeColor(e,cell,fillColor);
        });
    });
}

function emptyContainer(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function changeColor(e,cell, colorType){
    if(e.buttons == 1) {
        e.preventDefault();
        if(colorType == 'black')
            cell.style.backgroundColor = 'rgba(0, 0, 0, 1.0)';
        else if(colorType == 'color')
            cell.style.backgroundColor = random_rgba();
        else if(colorType == 'shade')
        {
            let rgb = cell.style.backgroundColor.match(/[\d\.]+/g);
            console.log(rgb);
            // if(rgb.length == 3)
                // rgb.push('1');
            cell.style.backgroundColor = toRgbString(rgb[0],rgb[1],rgb[2],Math.min(1, String(parseFloat(rgb[3])+0.01)));
            // // console.log(cell.style.backgroundColor);
            // // console.log(toRgbString(rgb[0],rgb[1],rgb[2],Math.min(1, String(parseFloat(rgb[3])+0.1))));
            // console.log(rgb);
        }
    }
}

function resetCells(){
    for(let i = 0;i<squarePerSide;i++){
        for(let j = 0;j<squarePerSide;j++){
            let cell = document.getElementById('cell-'+i+'-'+j);
            cell.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
    }
}

function updateGrid(){
    let inputNum = prompt("Please enter number of squares per side");
    if (inputNum != null && !isNaN(inputNum)) {
        if(inputNum<1||inputNum>100)
        {
            alert("Number of Squares per side should be in the range: [0,100]!");
            return;
        }
        emptyContainer();
        squarePerSide = inputNum;
        makeGrid();
    }
    else {
        alert("Invalid Input!");
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
}

makeGrid();
let resetBtn = document.querySelector('#resetBtn');
let colorBtn = document.querySelector('#colorBtn');
let blackBtn = document.querySelector('#blackBtn');
let shadeBtn = document.querySelector('#shadeBtn');
let squareCntBtn = document.querySelector('#squareCntBtn');
let buttons = [resetBtn,colorBtn,blackBtn,shadeBtn,squareCntBtn];

cells.forEach((cell)=>{
    cell.addEventListener('mousemove',function(e){
        changeColor(e,cell,fillColor);
    });
});

buttons.forEach((button)=>{
    button.addEventListener('mousedown',()=>{
        button.classList.add('button-pressed');
    });
});
buttons.forEach((button)=>{
    button.addEventListener('mouseup',()=>{
        button.classList.remove('button-pressed');
    });
});

colorBtn.addEventListener('click',(e)=>{
    fillColor = 'color';
});

blackBtn.addEventListener('click',(e)=>{
    fillColor = 'black';
});

shadeBtn.addEventListener('click',(e)=>{
    fillColor = 'shade';
});

resetBtn.addEventListener('click',resetCells);
squareCntBtn.addEventListener('click',updateGrid);