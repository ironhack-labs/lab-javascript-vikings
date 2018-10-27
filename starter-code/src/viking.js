// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
};

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}
Viking.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    } else {
        return `${this.name} has died in act of combat`;
    }
}
// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return `A Saxon has died in combat`;
    }
}


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
War.prototype.addViking = function (vik) {
    this.vikingArmy.push(vik);
}
War.prototype.addSaxon = function (sax) {
    this.saxonArmy.push(sax);
}

War.prototype.vikingAttack = function () {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let atack = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxon);
    }
    return atack;
}

War.prototype.saxonAttack = function () {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let atack = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomViking);
    }
    return atack;
}
War.prototype.showStatus = function () {
    if(this.saxonArmy.length === 0){
        return `Vikings have won the war of the century!`;
    }
    if(this.vikingArmy.length === 0){
        return `Saxons have fought for their lives and survive another day...` ;
    }
    if (this.saxonArmy.length > 0  && this.vikingArmy.length > 0){
        return `Vikings and Saxons are still in the thick of battle.`;
    }
}