// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
Soldier.prototype.attack = function() {
    return this.strength //`la fuerza de ataque del soldado es ${this.strength}`
}
Soldier.prototype.receiveDamage = function(damage) {
        this.health -= damage;
        //return `El soldado esta recibiendo daño de nivel ${damage}`
    }
    // Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength)
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function() {
    return this.strength;
}

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    } else {
        return `${this.name} has died in act of combat`;
    }
}

Viking.prototype.battleCry = function() {
    return 'Odin Owns You All!';
}


// Saxon
function Saxon(strength, health) {
    Soldier.call(this, strength, health)
}

Saxon.prototype.attack = function() {
    return this.strength;

}

Saxon.prototype.receiveDamage = function(damage) {
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

War.prototype.attack = function() {
    return Saxon.strength;
}

War.prototype.addViking = function(Viking) {
    this.vikingArmy.push(Viking);

}

War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function() {
    // var oldHealth = saxon.health; // war.vikingAttack();
    // this.saxon.health = oldHealth - viking.strength;
    var vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    if (saxonRandom.health <= vikingRandom.strength) {
        var soldierSaxon = this.saxonArmy.indexOf(saxonRandom);
        this.saxonArmy.splice(soldierSaxon, 1);
    }

    return saxonRandom.receiveDamage(vikingRandom.strength);

}

War.prototype.saxonAttack = function() {
    var vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    if (vikingRandom.health <= saxonRandom.strength) {
        var soldierViking = this.vikingArmy.indexOf(vikingRandom);
        this.vikingArmy.splice(soldierViking, 1);
    }

    return vikingRandom.receiveDamage(saxonRandom.strength);
}

War.prototype.showStatus = function() {

    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
        return "Vikings and Saxons are still in the thick of battle.";
    }
}