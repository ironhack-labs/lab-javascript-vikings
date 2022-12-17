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
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let attackedSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let attackedSaxon = this.saxonArmy[attackedSaxonIndex];
        let attackingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxonDamage = attackedSaxon.receiveDamage(attackingViking.attack());
        if (attackedSaxon.health <= 0) {
            this.saxonArmy.splice(attackedSaxonIndex, 1);
        }
        return saxonDamage;
    }

    saxonAttack() {
        let attackedVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let attackedViking = this.vikingArmy[attackedVikingIndex];
        let attackingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingDamage = attackedViking.receiveDamage(attackingSaxon.attack());
        if (attackedViking.health <= 0) {
            this.vikingArmy.splice(attackedVikingIndex, 1);
        }
        return vikingDamage; 
    }

    showStatus() {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }

        else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }

        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}


