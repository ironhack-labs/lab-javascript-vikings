class Crono {
    constructor(minute, second) {
      this.second = second;
      this.minute = minute;
    }
    
    timeCrono() {
        if(this.second == 60){
            this.minute++;
            this.second = 0;
        }else{
            this.second++;
        }
        showTimeCrono(this);
    }
}

function showTimeCrono(cronoCount){
    let cronoShow = cronoCount; 
    setTimeout(function(){
        console.log(`Minute ${cronoShow.minute}, Second ${cronoShow.second}`);
        cronoCount.timeCrono();
    }, 1000);
}

start();


function start(){
    let repeat = false;
    do{
        const start = prompt('Start the game? (Yes/Not)');
        switch("Yes"){
            case "Yes":
                cronometro();
                break;
            case "Not":
                console.log('Bye');
                repeat = false;
                break;
            default:
                console.log('Only Yes or Not');
                repeat = false
                break;
        }
    }while(repeat);
}

function cronometro(){
    console.log('Start');
    const newCrono = new Crono(0,0);
    newCrono.timeCrono();
}

function resetTime(){
    start();
}
