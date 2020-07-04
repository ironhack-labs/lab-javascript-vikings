// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(thedamage) {
        this.health = this.health - thedamage
    }


}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }



    receiveDamage(thedamage) {
        this.health = this.health - thedamage
        if (this.health > 0) {
            return `${this.name} has received ${thedamage} points of damage`
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }

    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {


    receiveDamage(thedamage) {
        this.health = this.health - thedamage
        if (this.health > 0) {
            return `A Saxon has received ${thedamage} points of damage`
        } else if (this.health <= 0) {
            return "A Saxon has died in combat"
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
        this.vikingArmy.push(viking)

    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)

    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let damage = randomSaxon.receiveDamage(randomViking.strength);
        
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return damage;
    }
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let damage = randomViking.receiveDamage(randomSaxon.strength);
       

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return damage;
    }


   showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        }
        return 'Vikings and Saxons are still in the thick of battle.';

    }

}




