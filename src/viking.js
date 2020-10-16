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
        this.health -= damage;
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
        let isAlive = this.health > 0;
        if (isAlive) return `${this.name} has received ${damage} points of damage`
        return `${this.name} has died in act of combat`
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -= damage;
        let isAlive = this.health > 0;
        if (isAlive) return `A Saxon has received ${damage} points of damage`;
        return `A Saxon has died in combat`;
    }
}

// War

class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
        
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

     addViking(Viking) {
        this.vikingArmy.push(Viking)
     }
    
    vikingAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let saxonDamage = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxon, 1);
        return saxonDamage;
        //this.theAttack(this.saxonArmy, this.vikingArmy);
    }

    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingDamage = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) this.vikingArmy.splice(randomViking, 1);
        return vikingDamage
        //this.theAttack(this.vikingArmy, this.saxonArmy);

    }

    // Prueba de refactorización
    /*theAttack(arr1, arr2) {
        let randomFighterOne = this.arr1[Math.floor(Math.random() * this.arr1.length)];
        let randomFighterTwo = this.arr2[Math.floor(Math.random() * this.arr2.length)];
        let fighterDamage = randomFighterOne.receiveDamage(randomFighterTwo.strength);
        if (randomFighterOne.health <= 0) this.arr1.splice(randomFighterOne, 1);
        return fighterDamage
    }*/

    showStatus() {
        if (!this.saxonArmy.length) return "Vikings have won the war of the century!"
        else if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
        else return "Vikings and Saxons are still in the thick of battle."
    }
    
}

/*class War {

    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let result = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)
        }
        return result
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}*/