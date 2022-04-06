"use strict";
exports.__esModule = true;
exports.myGame = exports.Game = void 0;
var Game;
(function (Game) {
    Game["rock"] = "ROCK";
    Game["papper"] = "PAPPER";
    Game["scissors"] = "SCISSORS";
})(Game = exports.Game || (exports.Game = {}));
function myGame(player1, player2) {
    console.log("I am here" + player1 + "  " + player2);
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
exports.myGame = myGame;
