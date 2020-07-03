// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else{
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
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
        let randomVikingDamage = this.vikingArmy[
            Math.floor(Math.random() * this.vikingArmy.length)
        ].attack();

        let randomSaxonSoldier = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonSoldier = this.saxonArmy[randomSaxonSoldier];

        let result = saxonSoldier.receiveDamage(randomVikingDamage);

        if(saxonSoldier.health <= 0){
            this.saxonArmy.splice(randomSaxonSoldier, 1)
        }

        return result;
    }

    saxonAttack() {
        let randomSaxonDamage = this.saxonArmy[
            Math.floor(Math.random() * this.saxonArmy.length)
        ].attack();

        let randomVikingSoldier = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingSoldier = this.vikingArmy[randomVikingSoldier];

        let result = vikingSoldier.receiveDamage(randomSaxonDamage);

        if(vikingSoldier.health <= 0){
            this.vikingArmy.splice(randomVikingSoldier, 1);
        }

        return result;
    }

    showStatus() {
        let status = "";
        if(this.vikingArmy.length == 0){
            status = `Saxons have fought for their lives and survived another day...`
        } else if (this.saxonArmy.length == 0){
            status = `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length > 0 && this.vikingArmy.length > 0){
            status = `Vikings and Saxons are still in the thick of battle.`
        }

        return status;
    }
}