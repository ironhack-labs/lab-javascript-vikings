// Soldier constractor
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.receiveDamage = function (damage){ //definining receiveDamage() function
        this.health -= damage;
    }
}

Soldier.prototype.attack = function (){ //defining attack () function
    return this.strength;
};

// Viking constractor
function Viking(name , health, strength) {
    Soldier.call(this, health, strength); //inherit health & strength from the Soldier constractor
    this.name = name;
    this.receiveDamage = function (damage){ //definining receiveDamage() function
        this.health -= damage;
        if(this.health <= 0){ //checking of the Viking's health is below 0
            return(this.name + " has died in act of combat");
        } else {
            return(this.name + " has received " + damage + " points of damage");
        }
    };
    this.battleCry = function (){ //defining battleCry() function
        return("Odin Owns You All!");
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon constractor
function Saxon(health, strength) {
    Soldier.call(this, health, strength); //inherit health & strength from the Soldier constractor
    this.receiveDamage = function (damage) { //definining receiveDamage() function
        this.health -= damage;
        if(this.health <= 0){ //checking of the Viking's health is below 0
            return("A Saxon has died in combat");
        } else {
            return("A Saxon has received " + damage + " points of damage");
        }
    }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Viking;


// War constractor
function War() {
    this.vikingArmy = []; //creating an array to store all the Vikings objects in the army
    this.saxonArmy = []; //creating an array to store all the Saxon objects in the army
    this.addViking = function (vikingObject){ //function to add Viking to the vikingArmy
        this.vikingArmy.push(vikingObject); 
        console.log(this.vikingArmy);
    };
    this.addSaxon = function (saxonObject){ //function to add Saxon to the saxonArmy
        this.saxonArmy.push(saxonObject);
    };
    this.vikingAttack = function(){ //adding Viking to vikingArmy array
        var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length); //storing random number to access random Saxon in the array
        var randomViking = Math.floor(Math.random() * this.vikingArmy.length); //storing random number to access random Viking in the array
        var attack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength); 
        if(this.saxonArmy[randomSaxon].health <= 0){ //checking if the Saxon died 
            this.saxonArmy.splice(randomSaxon, 1); //removing the Saxon from the SaxonArmy
        }
        return attack;
    };
    //selecting a random Saxon from saxonArmy array and performing an attack on a random Viking from vikingArmy. 
    //Viking receives damaged that equals to the strength of the Saxon.
    this.saxonAttack = function (){ 
        var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length); //storing random number to access random Saxon in the array
        var randomViking = Math.floor(Math.random() * this.vikingArmy.length); //storing random number to access random Viking in the array
        var attack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength); //performing attack
        if(this.vikingArmy[randomViking].health <= 0){ //checking if the Viking died 
            this.vikingArmy.splice(randomViking, 1); //removing the Viking from the vikingArmy
        }
        return attack;
    };
    //return whether saxonArmy or vikingArmy arrys have any saxons or vikings left  
    this.showStatus = function(){
        if(this.vikingArmy.length === 0){
            return("Saxons have fought for their lives and survive another day...");
        } else if(this.saxonArmy.length === 0){
            return("Vikings have won the war of the century!");
        } else {
            return("Vikings and Saxons are still in the thick of battle.");    
        } 
    }
}
