// DOM ELEMENTS
const boardSelection = document.querySelector('#boardSelection');
const boardSelectionOptions = document.querySelector('#boardSelectionOptions');
const menuArrow = document.querySelector('#menuArrow');

// toggle
const toggleLightDark = document.querySelector('#ldToggle');
const toggleBall = document.querySelector('#toggleBall');

boardSelection.onclick = handlesBoardSelection;

toggleLightDark.onclick = handleLightDarkMode;

function handlesBoardSelection() {
    boardSelection.classList.toggle('active');
    if (boardSelection.classList.contains('active')) {
        openBoardOptions(); 
    } else {
        closeBoardOptions();
    }
}

function openBoardOptions() {
    boardSelectionOptions.style.display = 'inline-block';
    menuArrow.style.transform = 'rotate(180deg)';
}

function closeBoardOptions() {
    boardSelectionOptions.style.display = 'none';
    menuArrow.style.transform = 'rotate(0deg)';
}

function handleLightDarkMode() {
    toggleLightDark.classList.toggle('light');
    if (toggleLightDark.classList.contains('light')){
        toggleBall.style.left = '3px';
    } else {
        toggleBall.style.left = '22px';
    }
}