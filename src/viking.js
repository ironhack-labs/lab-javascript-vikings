// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.damage = damage;
        this.health = this.health - this.damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.damage = damage;
        this.health = this.health - this.damage;
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
this.damage = damage;
this.health = this.health - this.damage;
if(this.health > 0) {
    return `A Saxon has received ${this.damage} points of damage`
}else {
    return 'A Saxon has died in combat'
}
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject) {
this.vikingArmy.push(vikingObject)
    }
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }
vikingAttack() {
    const randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
const randomSaxon = this.saxonArmy[randomSaxonIndex];
const vikingStrength = randomViking.strength;
const damageReceived = randomSaxon.receiveDamage(vikingStrength);
if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(randomSaxonIndex, 1)
}
return damageReceived
} 
saxonAttack() {
    const randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
const randomSaxon = this.saxonArmy[randomSaxonIndex];
const saxonStrength = randomSaxon.strength;
const damageToViking = randomViking.receiveDamage(saxonStrength)
if(randomViking.health <= 0) {
    this.vikingArmy.splice(randomViking, 1)
}
return damageToViking

}
showStatus() {
if(this.saxonArmy.length === 0){
    return `Vikings have won the war of the century!`
}else if (this.vikingArmy.length === 0) {
    return `Saxons have fought for their lives and survived another day...`
} else {
    return `Vikings and Saxons are still in the thick of battle`
}
}
}

