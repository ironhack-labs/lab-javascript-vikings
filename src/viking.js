// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;this.health = health;
        this.strength = strength;
        //this.damage = damage;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        //return this.health - this.damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > damage) {
            return (`${this.name} has received ${damage} points of damage`);
        } else {
            return (`${this.name} has died in act of combat`);
        }
    } battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
     
    super (health, strength){
        this.health = health;
        this.strength = strength;

    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`);
        } else {
            return (`A Saxon has died in combat`);
        }
    } 
}

// War
class War {
    constructor () {
        this.vikingArmy = []; 
        this.saxonArmy = [] ;
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
}
