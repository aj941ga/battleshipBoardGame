
/* creates new object */
    var createNewMultiplayerObject = function(){

        var player1 = new player("p1", 1);
        player1.initializeGrid();
        
        var player2 = new player("p2", 2);
        player2.initializeGrid();

    };

    var createNewSinglePlayerObject = function(){

        var player1 = new player("p1", 1);
        player1.initializeGrid();

        // destructor equivalent for previous...
        densityLens = false;
        var bot = new botClass();
        bot.initializeGrid();
      //  bot.destroy();
    };

    var player1 = new player("p1", 1);
    var player2 = new player("p2", 2);
	var bot = new botClass();

/**
mapSwap : swaps the maps of the players 
@Param {String} gameType  gameType = "singlePlayer" or "multiPlayer"
*/
var mapSwap = function (gameType) {

    
	

    var temp = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    var i, j;

    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            temp[i][j] = player1.gridActual[i][j];
        }
    }
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            if (gameType === "singlePlayer") {
                player1.gridActual[i][j] = bot.gridActual[i][j];
            }
            else {
                player1.gridActual[i][j] = player2.gridActual[i][j];

            }
        }
    }
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            if (gameType === "singlePlayer") {
                bot.gridActual[i][j] = temp[i][j];
            }
            else {
                player2.gridActual[i][j] = temp[i][j];
            }
        }
    }



};

