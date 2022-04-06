var Game;
(function (Game) {
    Game[Game["rock"] = 0] = "rock";
    Game[Game["papper"] = 1] = "papper";
    Game[Game["scissors"] = 2] = "scissors";
})(Game || (Game = {}));
function myGame(player1, player2) {
    if (player1 == player2) { //this
        return "Draw";
    }
    switch (player1) {
        case Game.rock:
            return (player2 == Game.scissors ? "Winer" : "Loser");
        case Game.papper:
            return (player2 == Game.rock ? "Winer" : "Loser");
        case Game.scissors:
            return (player2 == Game.papper ? "Winer" : "Loser");
    }
}
var p1 = Game.papper;
var p2 = Game.rock;
console.log("player 1 :" + p1);
console.log("player 2 :" + p2);
console.log("plaer 1 is: " + myGame(p1, p2));
