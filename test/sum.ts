export enum Game {
    rock = "ROCK",
    papper = "PAPPER",
    scissors = "SCISSORS"
}


export function myGame (player1: Game, player2: Game):string {
    


    console.log("I am here" + player1 + "  " + player2);
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