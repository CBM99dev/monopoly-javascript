var boardSpaces = [
    {
        name: 'GO',
        leftPos: 925,
        topPos: 925
    },
    {
        name: 'Mediterranean Avenue',
        leftPos: 825,
        topPos: 925
    },
    {
        name: 'Community Chest 1',
        leftPos: 740,
        topPos: 925
    },
    {
        name: 'Baltic Avenue',
        leftPos: 660,
        topPos: 925
    }
]

var myPlayer = {
    spaceNumber: 0,
    leftPos: 925,
    topPos: 925
}

function movePiece() {
    var myPiece = document.getElementById("piece");
    myPlayer.spaceNumber += 1;
    myPiece.style.left = boardSpaces[myPlayer.spaceNumber].leftPos;
    

}
