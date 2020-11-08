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
    super(name, health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
        
    }

receiveDamage(damage) {
this.health -= damage;

    return this.health > 0 
    ? `${this.name} has received ${damage} points of damage`
    : `${this.name} has died in act of combat`;  
}

battleCry() {
    return "Odin Owns You All!";
}
}

// Saxon
class Saxon extends Soldier {

receiveDamage(damage) {
this.health -= damage;
    return this.health > 0
    ? `A Saxon has received ${damage} points of damage`
    : `A Saxon has died in combat`;
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
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    const theResultOfCombat = this.saxonArmy[randomSaxon]?.receiveDamage(this.vikingArmy[randomViking].attack());

    if (this.saxonArmy[randomSaxon]?.health - this.vikingArmy[randomViking].attack() <= 0){
        this.saxonArmy.splice(randomSaxon, 1);
        
    };
    return theResultOfCombat;
}
    

saxonAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    const theResultOfCombat = this.vikingArmy[randomViking]?.receiveDamage(this.saxonArmy[randomSaxon].attack());

    if (this.vikingArmy[randomViking]?.health - this.saxonArmy[randomSaxon].attack() <= 0){
        this.vikingArmy.splice(randomViking, 1);
        
    }
    return theResultOfCombat;
}

showStatus() {
return this.saxonArmy.length === 0
    ? "Vikings have won the war of the century!"
    : this.vikingArmy.length === 0? "Saxons have fought for their lives and survived another day..."
    :"Vikings and Saxons are still in the thick of battle.";
}

}
