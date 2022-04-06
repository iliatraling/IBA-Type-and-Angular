//const myGame =require('./sum');
//import { Game } from './sum';
//const Game = require('./sum');
import { myGame, Game } from "./sum" //"D:/Study/IBA/JavaType/HelloWorld"
test('player 1 is Rock player 2 is paper Answer: loser', ()=> {
expect(myGame(Game.rock, Game.papper)).toBe("Loser");  //expect(myGame(Game.rock, Game.papper).toBe("Loser"))
});
test('player 1 is Rock player 2 is rock Answer: loser', ()=> {
    expect(myGame(Game.rock, Game.rock)).toBe("Draw");  //expect(myGame(Game.rock, Game.papper).toBe("Loser"))
    });