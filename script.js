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