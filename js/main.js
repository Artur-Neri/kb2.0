// DOM ELEMENTS
const body = document.querySelector('body');
const shadowBox = document.querySelector('#shadowBox');
let allBoards = document.querySelectorAll('.mobile-board');
const boardSelection = document.querySelector('#boardSelection');
const boardSelectionOptions = document.querySelector('#boardSelectionOptions');
const menuArrow = document.querySelector('#menuArrow');

// toggle
const toggleLightDark = document.querySelector('#ldToggle');
const toggleBall = document.querySelector('#toggleBall');

boardSelection.onclick = handlesBoardSelection;
shadowBox.onclick = closeBoardOptions;

toggleLightDark.onclick = handleLightDarkMode;

allBoards.forEach(board => {
    board.onclick = function(){
        clearBoardSelection();
        this.classList.add('board-selected');
    };
})

function handlesBoardSelection() {
        openBoardOptions(); 
}

function openBoardOptions() {
    boardSelectionOptions.style.display = 'inline-block';
    menuArrow.style.transform = 'rotate(180deg)';
    shadowBox.style.display = 'block';
}

function closeBoardOptions() {
    shadowBox.style.display = 'none';
    boardSelectionOptions.style.display = 'none';
    menuArrow.style.transform = 'rotate(0deg)';
}

// SWITCHES BETWEEN LIGHT AND DARK MODE
function handleLightDarkMode() {
    toggleLightDark.classList.toggle('light');
    if (toggleLightDark.classList.contains('light')){
        toggleBall.style.left = '3px';

    } else {
        toggleBall.style.left = '22px';
    }
}



function clearBoardSelection() {
    console.log(allBoards);
    allBoards.forEach(board => {
        board.classList.remove('board-selected');
    })
}
