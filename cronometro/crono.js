class CronoTimeOut {
    constructor(minute, second) {
      this.second = second;
      this.minute = minute;
    }
    
    start() {
        if(this.second == 60){
            this.minute++;
            this.second = 0;
        }else{
            this.second++;
        }
        showTimeCrono(this);
    }

    stop(){
        //this.
    }

    reset(){
        this.second = 0;
        this.minute = 0;
    }
}

function showTimeCrono(cronoCount){
    let cronoShow = cronoCount; 
    setTimeout(function(){
        console.log(`Minute ${cronoShow.minute}, Second ${cronoShow.second}`);
        cronoCount.start();
    }, 1000);

}

// Para empezar
const newCrono = new CronoTimeOut(0,0); 
newCrono.start();

// --------------------------------------------------------------------------------------------

class CronoInterval {
    constructor(minute, second) {
      this.second = second;
      this.minute = minute;
      this.interval = undefined
    }
    
    start() {
        this.interval = setInterval(() => {
            if(this.second == 60){
                this.minute++;
                this.second = 0;
            }else{
                this.second++;
            }
            console.log(`Minute ${this.minute}, Second ${this.second}`);
        }, 1000);
    }

    stop(){
        //this.
        
    }

    reset(){
        this.second = 0;
        this.minute = 0;
    }
}

// Para empezar
const newCrono = new CronoInterval(0,0); 
newCrono.start();


// Apuntes del this
// ------------------------------------------------------------------------------------------
// call y apply para cambiar el this 
// this de una funcion siempre hace referencia cuando se llama
// bind hace referencia al objeto que le pasa (this)
// https://yeisondaza.com/entendiendo-this-javascript