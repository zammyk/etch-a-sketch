let container = document.querySelector('.etch-container');
let toAdd = document.createDocumentFragment();
let squarePerSide = 20;
let cells;

function makeGrid(){
    for(let i = 0;i<squarePerSide;i++){
        let newRow = document.createElement('div');
        newRow.id = 'row-'+i;
        newRow.classList.add('row');
        for(let j = 0;j<squarePerSide;j++){
            let newCell = document.createElement('div');
            newCell.id = 'cell-'+i+'-'+j;
            newCell.classList.add('cell');
            newRow.appendChild(newCell);
        }
        toAdd.appendChild(newRow);
    }
    container.appendChild(toAdd);
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell)=>{
        cell.addEventListener('mousemove',changeColor);
    });
}

function emptyContainer(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function changeColor(e){
    if(e.buttons == 1) {
        e.preventDefault();
        this.classList.add('black-colored-cell');
    }
}

function resetCells(){
    for(let i = 0;i<squarePerSide;i++){
        for(let j = 0;j<squarePerSide;j++){
            let cell = document.getElementById('cell-'+i+'-'+j);
            cell.classList.remove('black-colored-cell');
        }
    }
}

function updateGrid(){
    let inputNum = prompt("Please enter number of squares per side");
    if (inputNum != null && !isNaN(inputNum)) {
        if(inputNum<1||inputNum>100)
        {
            alert("Number of Squares per side should be in the range: [0,100]!");
        }
        emptyContainer();
        squarePerSide = inputNum;
        makeGrid();
    }
    else {
        alert("Invalid Input!");
    }
}

makeGrid();
let resetBtn = document.querySelector('#resetBtn');
let colorBtn = document.querySelector('#colorBtn');
let blackBtn = document.querySelector('#blackBtn');
let shadeBtn = document.querySelector('#shadeBtn');
let squareCntBtn = document.querySelector('#squareCntBtn');
let buttons = [resetBtn,colorBtn,blackBtn,shadeBtn,squareCntBtn];

cells.forEach((cell)=>{
    cell.addEventListener('mousemove',changeColor);
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

resetBtn.addEventListener('click',resetCells);
squareCntBtn.addEventListener('click',updateGrid);