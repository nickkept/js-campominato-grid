const btnGenerateGrid = document.getElementById(`btn_generate_grid`);
const select = document.querySelector("select");
btnGenerateGrid.addEventListener(`click`, function(){
    // console.log(this);
    // const diffSelect = document.querySelector(`#diff-select`) ;
    // console.log(select);
    // console.log(numCells);
    // const numCells = document.getElementById(`num-cells`);
    const difficulty = 10;
    console.log(difficulty);
    generateGrid(difficulty);
    // console.log(numCells.value);
});

function generateGrid(difficulty) {
    const gridContainer = document.querySelector(`.grid-container`);
    gridContainer.innerHTML = ``;
    const totalCells = difficulty * difficulty;

    for ( let i = 0; i < totalCells; i++ ) {
        const newCell = document.createElement(`div`);
        newCell.classList.add(`grid.cell`);
        newCell.style.flexBasis = `calc(100% / ${difficulty})`;
        newCell.style.width = `calc(100% / ${difficulty})`;
        newCell.addEventListener(`click`, function(){
            this.classList.toggle( "bg-success" );
        });
        gridContainer.append(newCell);
    }
}