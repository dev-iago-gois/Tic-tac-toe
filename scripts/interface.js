// Ensure that the JS only starts when the document gets completely loaded
document.addEventListener('DOMContentLoaded', () => {
    let sqms = document.querySelectorAll(".sqm")

    sqms.forEach((sqm) => {
        sqm.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    console.log(event.target);

    let sqm = event.target;
    let position = sqm.id;

    if (handleMove(position)) {
        setTimeout(() => {
            if (playerTurn == 0) {
                alert("Gameover - The winner is RED player!")
            } else {
                alert("Gameover - The winner is GREEN player!")
            }
        }, 10);

    };
    updateSqm();
}

function updateSqm() {
    let sqms = document.querySelectorAll(".sqm")

    sqms.forEach((sqm) => {
        sqm.addEventListener('click', handleClick);
        let position = sqm.id;
        let symbol = board[position];

        if (symbol != "") {
            sqm.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}