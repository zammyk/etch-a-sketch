let container = document.querySelector('.etch-container');
let toAdd = document.createDocumentFragment();
for(let i = 0;i<16;i++){
    let newRow = document.createElement('div');
    newRow.id = 'row-'+i;
    newRow.classList.add('row');
    for(let j = 0;j<16;j++){
        let newCell = document.createElement('div');
        newCell.id = 'cell-'+i+'-'+j;
        newCell.classList.add('cell');
        newRow.appendChild(newCell);
    }
    toAdd.appendChild(newRow);
}
container.appendChild(toAdd);

function changeColor(e){
    if(e.buttons == 1) {
        e.preventDefault();
        this.classList.add('colored-cell');
    }
}

function resetCells(e){
    for(let i = 0;i<16;i++){
        for(let j = 0;j<16;j++){
            let cell = document.getElementById('cell-'+i+'-'+j);
            console.log(cell.id);
            cell.classList.remove('colored-cell');
        }
    }
}

let cells = document.querySelectorAll('.cell');
let resetBtn = document.querySelector('#resetBtn')

cells.forEach((cell)=>{
    cell.addEventListener('mousemove',changeColor);
});
resetBtn.addEventListener('click',resetCells);