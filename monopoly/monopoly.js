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
    },
    {
        name: 'Income Tax',
        leftPos: 580,
        topPos: 925
    },
    {
        name: 'Reading Railroad',
        leftPos: 500,
        topPos: 925
    },
    {
        name: 'Short Line Railroad',
        leftPos: 925,
        topPos: 500
    },
    {
        name: 'Chance 3',
        leftPos: 925,
        topPos: 580
    },
    {
        name: 'Park Place',
        leftPos: 925,
        topPos: 660
    },
    {
        name: 'Luxury Tax',
        leftPos: 925,
        topPos: 740
    },
    {
        name: 'Boardwalk',
        leftPos: 925,
        topPos: 820
    },
]

var myPlayer = {
    spaceNumber: 0,
    money: 1000,
    leftPos: 925,
    topPos: 925
}

function logPlayerData(){
    var dN = document.getElementById("debug notes");
    dN.innerHTML = myPlayer.money;
}


function movePiece() {
    var myPiece = document.getElementById("piece");
    if(boardSpaces[myPlayer.spaceNumber].name == 'Boardwalk') {
        myPlayer.spaceNumber = 0;
        myPlayer.money += 200;
    } else {
        myPlayer.spaceNumber += 1;
    }
    
    
    
    myPiece.style.left = boardSpaces[myPlayer.spaceNumber].leftPos;
    myPiece.style.top = boardSpaces [myPlayer.spaceNumber].topPos;
    logPlayerData();
}
