const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Clock{
    constructor (){
        let time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        setInterval(this._tick.bind(this), 1000);
    }

    _tick(){
        this.seconds++;
        if(this.seconds >= 60){
            this.seconds = 0;
            this.minutes++;
        }
        if(this.minutes >= 60){
            this.minutes = 0;
            this.hours++;
        }
        if(this.hours >= 24){
            this.hours = 0;
        }
        this.printTime();
    }

    
    printTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

}

//const clock = new Clock();

function addNumbers(sum, numsLeft, completionCallback){
    if(numsLeft === 0){
        completionCallback(sum);
        return;
    }
    reader.question('Input a number:', (num) => {
        number = parseInt(num);
        sum += number;
        console.log(sum);
        return addNumbers(sum, numsLeft - 1, completionCallback);
    });
}

// addNumbers(0, 3, (sum) => console.log(`Total Sum: ${sum}`))

function absurdBubbleSort(arr, sortCompletionCallback){     
    function outerBubbleSortLoop(madeAnySwaps){
        if(madeAnySwaps){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        }
        else{
            sortCompletionCallback(arr);
        }
    }
    let madeAnySwaps = true;
    innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
}


function askIfGreaterThan(el1, el2, callback){
    reader.question(`Is ${el1} > ${el2}?`, (ans) => {
        if(ans === 'yes'){
            callback(true);
        }
        else{
            callback(false);
        }
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    if(i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i + 1], (bool) => {
            if(bool){
               let temp = arr[i];
               arr[i] = arr[i + 1];
               arr[i + 1] = temp; 
               madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    }
    else{
        outerBubbleSortLoop(madeAnySwaps);
    }
}

/*
absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });
*/

Function.prototype.myBind = function (context) {
    return () => {
        this.apply(context);
    };
};

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function() {
    console.log("Turning on " + this.name);
 };
 
 
const lamp = new Lamp();

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); 
myBoundTurnOn();