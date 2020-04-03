// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    } 

}



class Viking extends Soldier {
    constructor(name, health, strength) { /*expects my user to enter 3 values) */
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
     }
}


class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}





// Saxon : class Saxon {}




// War : class War {}


class War {
    constructor() {
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
        /*
       let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
       let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
       let attackedSaxon = this.saxonArmy[indexSaxon];
       let attackedViking
       console.log(indexViking + ',' + indexSaxon)
       */
       let randomSaxonIndex = getRandomInt(this.saxonArmy.length);
       let randomVikingIndex = getRandomInt(this.vikingArmy.length);
       let randomSaxon = this.saxonArmy[randomSaxonIndex];
       let randomViking = this.vikingArmy[randomVikingIndex];
       let damage = randomViking.attack();
       let message = randomSaxon.receiveDamage(damage);
       if (randomSaxon.health <= 0) {
           this.saxonArmy.splice(randomSaxonIndex, 1);
       }
       return message;
    }

    saxonAttack() {
       let randomVikingIndex = getRandomInt(this.vikingArmy.length);
       let randomSaxonIndex = getRandomInt(this.saxonArmy.length);
       let randomViking = this.vikingArmy[randomVikingIndex];
       let randomSaxon = this.saxonArmy[randomSaxonIndex];
       let damage = randomSaxon.attack();
       let message = randomViking.receiveDamage(damage);
       if (randomViking.health <= 0) {
           this.vikingArmy.splice(randomVikingIndex, 1);
       }
       return message;
    }

    showStatus()  {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
