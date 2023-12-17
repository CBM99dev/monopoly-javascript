var boardSpaces = [
    {
    	propID: 0,
        name: 'GO',
        leftPos: 845,
        topPos: 613
    },
    {
    	propID: 1,
        name: 'Mediterranean Avenue',
        leftPos: 738,
        topPos: 637
    },
    {
    	propID: 2,
        name: 'Community Chest 1',
        leftPos: 665,
        topPos: 637
    },
    {
    	propID: 3,
        name: 'Baltic Avenue',
        leftPos: 592,
        topPos: 637
    },
    {
    	propID: 4,
        name: 'Income Tax',
        leftPos: 516,
        topPos: 637
    },
    {
    	propID: 5,
        name: 'Reading Railroad',
        leftPos: 442,
        topPos: 637
    },
    {
    	propID: 6,
        name: 'Oriental Avenue',
        leftPos: 368,
        topPos: 637
    },
    {
    	propID: 7,
        name: 'Chance 1',
        leftPos: 294,
        topPos: 637
    },
    {
    	propID: 8,
        name: 'Vermont Avenue',
        leftPos: 220,
        topPos: 637
    },
    {
    	propID: 9,
        name: 'Connecticut Avenue',
        leftPos: 146,
        topPos: 637
    },
    {
    	propID: 35,
        name: 'Short Line Railroad',
        leftPos: 812,
        topPos: 283
    },
    {
    	propID: 36,
        name: 'Chance 3',
        leftPos: 812,
        topPos: 349
    },
    {
    	propID: 37,
        name: 'Park Place',
        leftPos: 812,
        topPos: 414
    },
    {
    	propID: 38,
        name: 'Luxury Tax',
        leftPos: 812,
        topPos: 480
    },
    {
    	propID: 39,
        name: 'Boardwalk',
        leftPos: 812,
        topPos: 546
    }
]

var myPlayer = {
    spaceNumber: 0,
    money: 1000,
    leftPos: 845,
    topPos: 613
}

function logPlayerData(){
    var dN = document.getElementById("debug notes");
    dN.innerHTML = '<hr>' +
                   'Player details: <br>' +
                   '- Cash = ' + myPlayer.money + 'space # = ' + mPlayer.spaceNumber
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
