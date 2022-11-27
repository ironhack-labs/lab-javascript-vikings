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
        super.receiveDamage(damage);

        if (this.health > 0) {
            return  `${this.name} has received ${damage} points of damage`;
        } else {
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
        super.receiveDamage(damage);

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;

        } else {
            return `A Saxon has died in combat`;
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
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length); 
        let selectedSaxon = this.saxonArmy[randomSaxonIndex];
        let selectedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let damageToSaxon = selectedSaxon.receiveDamage(selectedViking.attack())

        if (damageToSaxon === `A Saxon has died in combat`) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
        return damageToSaxon;
    }

    saxonAttack() {
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let selectedViking = this.vikingArmy[randomVikingIndex];
        let selectedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let damageToViking = selectedViking.receiveDamage(selectedSaxon.attack())

        if (damageToViking === `${selectedViking.name} has died in act of combat`) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
        return damageToViking
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1)
            return "Vikings and Saxons are still in the thick of battle."
    }

}
