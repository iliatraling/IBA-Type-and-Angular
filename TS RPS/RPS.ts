enum Game {
    rock,
    papper,
    scissors
}

function myGame (player1: Game, player2: Game): string {
    if(player1 == player2) {//this
        return "Draw";
    }

    switch (player1) {
        case Game.rock:
            return (player2 == Game.scissors?"Winer":"Loser");
        case Game.papper:
            return (player2 == Game.rock?"Winer":"Loser");
        case Game.scissors:
            return (player2 == Game.papper?"Winer":"Loser");
    }
}


const p1: Game = Game.papper;
const p2: Game = Game.rock;


console.log("player 1 :" + p1);
console.log("player 2 :" + p2);
console.log("plaer 1 is: " + myGame(p1,p2));