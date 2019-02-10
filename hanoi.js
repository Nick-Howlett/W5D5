const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Game{

    constructor(player){
        this.player = player;
        this.towers = [[3, 2, 1],[],[]];
    }

    run(completionCallback){    
        this.promptMove((i, j) => {
            this.move(i, j);
            this.print();
            this.run(completionCallback);
        })
    }

    promptMove(cb){
        this.player.question("Where would you like to move?", (move) => {
            let [i, j] = move.split(",");
            i = parseInt(i);
            j = parseInt(j);
            cb(i, j);
        });
    }

    isValidMove(pos1, pos2){
        if(this.towers[pos1].length === 0){
            console.log(1)
            return false;
        }
        else if(this.towers[pos2].length === 0){
            console.log(2)
            return true;
        }
        else if(this.towers[pos1].peek < this.towers[pos2].peek){
            console.log(3)
            return true;
        }
        else{
            console.log(4)
            return false;
        }
    }

    move(pos1, pos2){
        if(this.isValidMove(pos1, pos2)){
            this.towers[pos2].push(this.towers[pos1].pop());
        }
        else{
            console.log("Invalid Move!");
        }
    }

    print(){
        console.log(JSON.stringify(this.towers));
    }

    isWon(){
        towers[2] === [3, 2, 1];
    }

}

const towers = new Game(reader);
towers.run();
