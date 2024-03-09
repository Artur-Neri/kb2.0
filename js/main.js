import data from "./data.json" assert {type: 'json'}

// ICONS
const boardIcon = `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path class="board-icon" d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3"/></svg>`
const boardIconSelected = `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="#635fc7" class="board-icon" d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3"/></svg>`

let allBoards = data.boards;

// DOM ELEMENTS
const body = document.querySelector('body');
const shadowBox = document.querySelector('#shadowBox');
const boardSelection = document.querySelector('#boardSelection');
const boardSelectionOptions = document.querySelector('#boardSelectionOptions');
const menuArrow = document.querySelector('#menuArrow');
const boardTitle = document.querySelector('#selectedBoardTitle');

// toggle
const toggleLightDark = document.querySelector('#ldToggle');
const toggleBall = document.querySelector('#toggleBall');

boardSelection.onclick = handlesBoardSelection;
    shadowBox.onclick = closeBoardOptions;

toggleLightDark.onclick = handleLightDarkMode;

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



function clearBoardSelection(boardsList) {
    boardsList.forEach(board => {
        board.classList.remove('board-selected');
    })
}     

function createBoardsList() {
    let boardList = []
    let index = -1;
    boardList = allBoards.map(board => {
        index++;
        return `<li data-id=${index} class="mobile-board">${boardIcon}<span>${board.name}</span></li>`
    }).join('');
    return boardList;
}

function populateBoardsList() {
    const mobileBoards = document.querySelector('#mobileBoards');
    mobileBoards.innerHTML = createBoardsList();
    mobileBoards.children[0].classList.add('board-selected');
    mobileBoards.innerHTML += `<li class="mobile-board-new" id="createBoard">${boardIconSelected}<span>+ Create New Board</span></li>`


    let boardsList = document.querySelectorAll('.mobile-board');

    boardsList.forEach(board => {
    board.onclick = function(){
        clearBoardSelection(boardsList);
        this.classList.add('board-selected');
        selectedBoardTitle.innerText = allBoards[this.dataset.id].name;
    };


})
}

populateBoardsList();