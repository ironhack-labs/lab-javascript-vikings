// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
}

Soldier.prototype.attack = function () {
    return this.strength
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)
    this.name = nameArg
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
    }
}

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!"
}

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);
}
War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
}

function randomSoldier(Army) { return Math.floor(Math.random() * Army.length) }

War.prototype.vikingAttack = function () {

    let saxonSoldierId = randomSoldier(this.saxonArmy);
    let vikingSoldierId = randomSoldier(this.vikingArmy);
    let saxonSoldier = this.saxonArmy[saxonSoldierId];
    let vikingSoldier = this.vikingArmy[vikingSoldierId];

    let damageMsg = "";

    if (this.saxonArmy.length === 0) {
        damageMsg = undefined;
    } else {
        damageMsg = saxonSoldier.receiveDamage(vikingSoldier.strength);
    };

    this.saxonArmy = this.saxonArmy.filter(function (saxon) {
        return (saxon.health > 0)
    });

    return damageMsg

}

War.prototype.saxonAttack = function () {

    let saxonSoldierId = randomSoldier(this.saxonArmy);
    let vikingSoldierId = randomSoldier(this.vikingArmy);
    let saxonSoldier = this.saxonArmy[saxonSoldierId];
    let vikingSoldier = this.vikingArmy[vikingSoldierId];

    let damageMsg = "";
    
    if (this.vikingArmy.length === 0) {
        damageMsg = undefined;
    } else {
        damageMsg = vikingSoldier.receiveDamage(saxonSoldier.strength);
    }

    this.vikingArmy = this.vikingArmy.filter(function (viking) {
        return (viking.health > 0)
    });

    return damageMsg

}

War.prototype.showStatus = function () {
    if (this.saxonArmy.length===0) {return "Vikings have won the war of the century!"} 
    else if (this.vikingArmy.length===0) {return "Saxons have fought for their lives and survive another day..."}
    else { return "Vikings and Saxons are still in the thick of battle."}
}