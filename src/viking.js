// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
       this.health -=  damage;
    }
};

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -=  damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health === 0){
            return `${this.name} has died in act of combat`
        }
     }
     battleCry(){
         return `Odin Owns You All!`
     }
}


// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -=  damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health === 0){
            return `A Saxon has died in combat`
        }
     }
}

// War
class War {
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vinkingAttack(){
           

    }
    saxonAttack(){

    }
    showStatus(){

    }
};

let war = new War;
let viking1 = new Viking('Svend',20,20);
let viking2 = new Viking('Kristian',20,20);
let viking3 = new Viking('Alex',20,20);
let viking4 = new Viking('Symon',20,20);

