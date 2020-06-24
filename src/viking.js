// Soldier
class Soldier {
    constructor(health, strength) {
        this.health= health;
        this.strength=strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
       this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name,health,strength) {
        super (health,strength);
        this.name=name;
        this.health=health;
        this.strength=strength
    }
    receiveDamage(damage){
        let overallHealth = this.health -= damage;
        if (overallHealth>0) {
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
    receiveDamage(damage){
        let overallHealth = this.health -= damage;
        if (overallHealth>0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
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
    addViking(newViking) {
            this.vikingArmy.push(newViking)
    }
    addSaxon(newSaxon) {
        this.saxonArmy.push(newSaxon)
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * array.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * array.length)];
        let damage = randomSaxon.receiveDamage(randomViking.strength);

        if (overallHealth<0) {
            this.saxonArmy.splice(randomSaxon[i],1);
            return damage
        }
    }
    saxonAttack() {

    }
}
