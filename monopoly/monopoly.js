var boardSpaces = [
    {
        name: 'GO',
        leftPos: 925,
        topPos: 925
    },
    {
        name: 'Mediterranean Avenue',
        leftPos: 850,
        topPos: 925
    },
    {
        name: 'Community Chest 1',
        leftPos: 775,
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
