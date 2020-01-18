// Soldier

class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
    return this.strength;
    }
    receiveDamage (damage){
    this.health -= damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (name);
         this.name = name;
         this.health = health;
         this.strength = strength;
    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } return `${this.name} has died in act of combat`
    }
    
    battleCry () {
        return `Odin Owns You All!`
    }
    }
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.nameCounter = 1;
    }

    addViking(viking){
    this.vikingArmy.push(viking);
}
    addSaxon(saxon) {
    this.saxonArmy.push(saxon);
}
    vikingAttack (){
    let vikingDamage = this.vikingArmy[0].attack();
    this.saxonArmy[0].receiveDamage(vikingDamage);
    if (this.saxonArmy[0].health < 0) {
        this.saxonArmy.pop();
    };
    return 'A Saxon has died in combat'
}

    saxonAttack (){
    let saxonDamage = this.saxonArmy[0].attack();
    this.vikingArmy[0].receiveDamage(saxonDamage);
    if (this.vikingArmy[0].health <= 0) {
        this.vikingArmy.pop();
    } else return (`${this.vikingArmy[0].name} has received ${this.saxonArmy[0].strength} points of damage`)
}

    showStatus () {
        if (this.saxonArmy.length === 0) {
           return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
