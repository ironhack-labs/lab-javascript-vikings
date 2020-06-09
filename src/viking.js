// Soldier
class Soldier {
    constructor(health,strength) {
        //console.log(health)
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return (this.strength)
    }
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`);
            //return `${this.name} has received ${damage} points of damage`
        } else {
            return (`${this.name} has died in act of combat`);
        }
    }
    battleCry() {
        return ("Odin Owns You All!");
    }
    
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
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
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        for (let saxon of this.saxonArmy) {
            if (saxon.health <= 0) {
                this.saxonArmy.pop(saxon)
            }
        }
        return result;
    }
    saxonAttack (){
        let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
        for (let viking of this.vikingArmy) {
            if (viking.health <= 0) {
                this.vikingArmy.pop(viking)
            }
        }
        return result;
    }
    showStatus(){

    }
}
