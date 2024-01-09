var boardSpaces = [
    {
    	propID: 0,
        name: 'GO',
        leftPos: 848,
        topPos: 615
    },
    {
    	propID: 1,
        name: 'Mediterranean Avenue',
        leftPos: 740,
        topPos: 640
    },
    {
    	propID: 2,
        name: 'Community Chest',
        leftPos: 667,
        topPos: 640
    },
    {
    	propID: 3,
        name: 'Baltic Avenue',
        leftPos: 594,
        topPos: 640
    },
    {
    	propID: 4,
        name: 'Income Tax',
        leftPos: 518,
        topPos: 640
    },
    {
    	propID: 5,
        name: 'Reading Railroad',
        leftPos: 445,
        topPos: 640
    },
    {
    	propID: 6,
        name: 'Oriental Avenue',
        leftPos: 371,
        topPos: 640
    },
    {
    	propID: 7,
        name: 'Chance',
        leftPos: 297,
        topPos: 640
    },
    {
    	propID: 8,
        name: 'Vermont Avenue',
        leftPos: 223,
        topPos: 640
    },
    {
    	propID: 9,
        name: 'Connecticut Avenue',
        leftPos: 149,
        topPos: 640
    },
    {
    	propID: 10,
        name: 'Jail',
        leftPos: 80,
        topPos: 669
    },
    {
    	propID: 11,
        name: 'St Charles Place',
        leftPos: 51,
        topPos: 546
    },
    {
    	propID: 12,
        name: 'Electric Company',
        leftPos: 51,
        topPos: 480
    },
    {
    	propID: 13,
        name: 'States Avenue',
        leftPos: 51,
        topPos: 414
    },
    {
    	propID: 14,
        name: 'Virginia Avenue',
        leftPos: 51,
        topPos: 348
    },
    {
    	propID: 15,
        name: 'Pennsylvania Railroad',
        leftPos: 51,
        topPos: 282
    },
    {
    	propID: 16,
        name: 'St James Place',
        leftPos: 218,
        topPos: 512
    },
    {
    	propID: 17,
        name: 'Community Chest',
        leftPos: 218,
        topPos: 446
    },
    {
    	propID: 18,
        name: 'Tennessee Avenue',
        leftPos: 218,
        topPos: 380
    },
    {
    	propID: 19,
        name: 'New York Avenue',
        leftPos: 218,
        topPos: 314
    },
    {
    	propID: 20,
        name: 'Free Parking',
        leftPos: 13,
        topPos: 196
    },
    {
    	propID: 21,
        name: 'Kentucky Avenue',
        leftPos: 121,
        topPos: 171
    },
    {
    	propID: 22,
        name: 'Chance',
        leftPos: 194,
        topPos: 171
    },
    {
    	propID: 23,
        name: 'Indiana Avenue',
        leftPos: 268,
        topPos: 171
    },
    {
    	propID: 24,
        name: 'Illinois Avenue',
        leftPos: 341,
        topPos: 171
    },
    {
    	propID: 25,
        name: 'B & D Railroad',
        leftPos: 415,
        topPos: 171
    },
    {
    	propID: 26,
        name: 'Atlantic Avenue',
        leftPos: 488,
        topPos: 171
    },
    {
    	propID: 27,
        name: 'Ventnor Avenue',
        leftPos: 562,
        topPos: 171
    },
    {
    	propID: 28,
        name: 'Water Works',
        leftPos: 636,
        topPos: 171
    },
    {
    	propID: 29,
        name: 'Marvin Gardens',
        leftPos: 711,
        topPos: 171
    },
    {
    	propID: 30,
        name: 'Go To Jail',
        leftPos: 784,
        topPos: 171
    },
    {
    	propID: 31,
        name: 'Pacific Avenue',
        leftPos: 649,
        topPos: 315
    },
    {
    	propID: 32,
        name: 'North Carolina Avenue',
        leftPos: 649,
        topPos: 381
    },
    {
    	propID: 33,
        name: 'Community Chest',
        leftPos: 649,
        topPos: 446
    },
    {
    	propID: 34,
        name: 'Pennsylvania Avenue',
        leftPos: 649,
        topPos: 512
    },
    {
    	propID: 35,
        name: 'Short Line Railroad',
        leftPos: 813,
        topPos: 285
    },
    {
    	propID: 36,
        name: 'Chance',
        leftPos: 813,
        topPos: 351
    },
    {
    	propID: 37,
        name: 'Park Place',
        leftPos: 813,
        topPos: 416
    },
    {
    	propID: 38,
        name: 'Luxury Tax',
        leftPos: 813,
        topPos: 482
    },
    {
    	propID: 39,
        name: 'Boardwalk',
        leftPos: 813,
        topPos: 548
    }
]

var playerDefaultValue = {
    spaceNumber: 0,
    money: 1500,
    leftPos: 848,
    topPos: 615,
    pieceOverlapPixels: 4
}

var allPlayers = [

]



var currentPlayer = 0;

function updatePlayerInfo() {
    var pSpace = document.getElementById(currentPlayer + "space");
    pSpace.innerHTML = boardSpaces[allPlayers[currentPlayer].spaceNumber].name;
    var pCash = document.getElementById(currentPlayer + "cash");
    pCash.innerHTML = allPlayers[currentPlayer].money;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function movePiece() {
    var currentPlayerObject = allPlayers[currentPlayer];

    var myPiece = document.getElementById(currentPlayer + "piece");
    var die1Value = getRandomInt(6) + 1;
    document.getElementById("firstDie").src = "./images/die" + die1Value + ".png";
    var die2Value = getRandomInt(6) + 1;
    document.getElementById("secondDie").src = "./images/die" + die2Value + ".png";
    var diceTotal = die1Value + die2Value;
    for (let i = 0; i < diceTotal; i++) {
        if(boardSpaces[currentPlayerObject.spaceNumber].name == 'Boardwalk') {
            currentPlayerObject.spaceNumber = 0;
            currentPlayerObject.money += 200;
        } else {
            currentPlayerObject.spaceNumber += 1;
        }
        myPiece.style.left = boardSpaces[currentPlayerObject.spaceNumber].leftPos;
        myPiece.style.top = boardSpaces [currentPlayerObject.spaceNumber].topPos;
        updatePlayerInfo();
    }
    if (currentPlayer + 1 == allPlayers.length) {
        currentPlayer = 0;
    } else {
        currentPlayer++;
    }
    document.getElementById("displayCurrentPlayer").innerHTML = currentPlayerObject.name;
}

function startGame() {
    var theBoard = document.getElementById("theBoard");
    theBoard.src = "./images/monopolyBoard.png";
    theBoard.height = "700";
    theBoard.width = "880";
    document.getElementById("0name").innerHTML = document.getElementById("p1TextBox").value;
    document.getElementById("1name").innerHTML = document.getElementById("p2TextBox").value;

    allPlayers.push({
        name: document.getElementById("p1TextBox").value,
        spaceNumber: 0,
        money: 1500,
        leftPos: 848,
        topPos: 615
    });
    allPlayers.push({
        name: document.getElementById("p2TextBox").value,
        spaceNumber: 0,
        money: 1500,
        leftPos: 848,
        topPos: 615
    });
    document.getElementById("signupForm").innerHTML = "";
    document.getElementById("displayCurrentPlayer").innerHTML = allPlayers[currentPlayer].name;
    
    console.log(allPlayers);
}
