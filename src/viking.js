// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health; 
        this.strength = strength; 

        this.attack = function(){
            return this.strength;
        }
        this.receiveDamage = function(damage){
            this.health = this.health - damage
   }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)

        this.name = name; 

        this.receiveDamage = function(damage){
            this.health -= damage; 

            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`
            } else {
                return `${this.name} has died in act of combat`
            }
        }

        this.battleCry = function(){
            return "Odin Owns You All!"
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)

        this.attack = function(){
            return this.strength;
        }

        this.receiveDamage = function(damage){
            this.health = this.health - damage; 

            if (this.health > 0) {
                return `A Saxon has received ${damage} points of damage`
            } else {
                return `A Saxon has died in combat`
            }
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = []; 
        }

        addViking(Viking){
            this.vikingArmy.push(Viking);
        }

        addSaxon(Saxon){
            this.saxonArmy.push(Saxon);
        }

        vikingAttack(){
            let randomIndex = Math.floor(Math.random() * this.saxonArmy.length)
            // console.log(randomIndex)
            let randomSaxon = this.saxonArmy[randomIndex];
            let saxonResult = randomSaxon.recieveDamage(randomViking.attack())

            if (saxonResult.health < 0) {
                this.saxonArmy.splice(this.saxonArmy[randomIndex], 1)
            }
            return saxonResult
        }
     
        saxonAttack(){
            let randomIndex = Math.floor(Math.random() * this.vikingArmy.length)
            let randomViking = this.vikingArmy[randomIndex];
            let vikingResult = randomViking.recieveDamage(randomSaxon.attack())

            if (vikingResult.health < 0) {
                this.vikingArmy.splice(this.vikingArmy[randomIndex], 1)
            }
            return vikingResult
        }
        showStatus(){

        }
       
}


