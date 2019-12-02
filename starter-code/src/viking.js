// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;

    }

    receiveDamage( damage ) {
        this.health -= damage;

    }


}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage( damage){
        this.health -= damage;
        if (this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        } else {
            return this.name + " has died in act of combat";
        } 

    }
    battleCry() {
        return "Odin Owns You All!";

    }
}


// Saxon
class Saxon extends Soldier {

    constructor( health , strength ) {
        super (health , strength);
    }

    receiveDamage( damage ){
        this.health -= damage;
        if (this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        } else {
            return "A Saxon has died in combat";
        } 
    }


}

// War
class War {
    constructor( ){
        this.vikingArmy = [];
        this.saxonArmy = [];

    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);   //gets a saxon number from saxonArmy ramdomly
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);  //gets a viking number from vikingArmy ramdoml
        let saxonAtRamdom = this.saxonArmy[saxonIndex];
        let vikingAtRamdom = this.vikingArmy[vikingIndex];
        let result = saxonAtRamdom.receiveDamage(vikingAtRamdom.strength);
        if (saxonAtRamdom.health <=0 ) {
            this.saxonArmy.splice(saxonIndex,1);
            }
        return result;
    }

    saxonAttack() {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);   //gets a saxon number from saxonArmy ramdomly
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);  //gets a viking number from vikingArmy ramdoml
        let saxonAtRamdom = this.saxonArmy[saxonIndex];
        let vikingAtRamdom = this.vikingArmy[vikingIndex];
        let result = vikingAtRamdom.receiveDamage(saxonAtRamdom.strength);
        if (vikingAtRamdom.health <=0 ) {
            this.vikingArmy.splice(vikingIndex,1);
            }
        return result;
    }
    
        

    // showStatus()
}



// let player1 = new Player('Joaquim', 'red');