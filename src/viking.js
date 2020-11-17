// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health,
        this.strength = strength
    }

    attack() {
        return this.strength; 
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health,strength) {
        super(health,strength);
        this.name = name;
    }
    
    attack() {
        return super.attack();
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
        // let msg;
        // this.health > 0 ? msg = `${this.name} has received ${damage} points of damage` : msg = `${this.name} has died in act of combat.`;
    //     return msg;
    //TAs: why doesn't the commented out code work here?
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    attack() {
        return super.attack();
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class War {
    constructor() {
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let i = getRandomInt(this.vikingArmy.length);
        let j = getRandomInt(this.saxonArmy.length);
        console.log (i, j)
        this.saxonArmy[j].receiveDamage(this.vikingArmy[i].strength);
        if (this.saxonArmy[j].health < 0) {
            this.saxonArmy.splice(j,1);
        }
        // return this.saxonArmy[j].receiveDamage(this.vikingArmy[i].strength);
    }
    
    saxonAttack() {

    }
}
