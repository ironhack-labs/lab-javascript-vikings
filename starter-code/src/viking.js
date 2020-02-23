// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
attack() {
    return this.strength;
}
receiveDamage(damage) {
    this.health-=damage;
}
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        if (damage < this.health) {
        this.health-=damage;
        return `${this.name} has received ${damage} points of damage`;
        } else {
        this.health-=damage;
        return `${this.name} has died in act of combat`;
    }
} 
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        if (damage < this.health) {
        this.health-=damage;
        return `A Saxon has received ${damage} points of damage`;
        } else {
        this.health-=damage;
        return "A Saxon has died in combat";
    }
}
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {  
        let randomViking = Math.floor(this.vikingArmy.length * Math.random());
        let randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
        let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
         if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon);
        }
            return result; 
    }       
    saxonAttack() {  
        let randomViking = Math.floor(this.vikingArmy.length * Math.random());
        let randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
        let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
         if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.pop(randomViking);
        }
            return result;
    } 
// Comprobamos que tambien funciona con .pop(), pues en este caso todo lo que tiene el array recibe el mismo nombre
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

/*

// BONUS EXTRA
callAttack(showAttack) {
    let randomViking = Math.floor(this.vikingArmy.length * Math.random());
    let randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
    let vikingAttack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
       if (this.saxonArmy[randomSaxon].health <= 0) {
           return this.saxonArmy.pop[randomSaxon];
       }
    let saxonAttack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strenght);
       if (this.vikingArmy[randomViking].health <= 0) {
           return this.vikingArmy.pop[randomViking];
       }
       if (showAttack === vikingAttack) {
           return vikingAttack;
       } else if (showAttack === saxonAttack) {
           return saxonAttack;
       }
}  

*/