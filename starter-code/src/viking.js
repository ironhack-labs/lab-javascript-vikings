// Soldier
function Soldier(health, strenght) {
    this.health = health;
    this.strength = strenght;
}

Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}

// Viking
function Viking(name, health, strenght) {
    this.name = name;
    Soldier.call(this, health, strenght);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function() {
    return Soldier.prototype.attack.call(this);
}

Viking.prototype.receiveDamage = function (damage) {
    Soldier.prototype.receiveDamage.call(this, damage);

    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else if (this.health === 0) {
        return this.name + " has died in act of combat";
    }
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strenght) {
    Soldier.call(this, health, strenght);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function() {
    return Soldier.prototype.attack.call(this);
}

Saxon.prototype.receiveDamage = function (damage) {
    Soldier.prototype.receiveDamage.call(this, damage);

    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
    } else if (this.health === 0) {
        return "A Saxon has died in combat";
    }
}

// War
function War() {}


var gonz = new Saxon(100, 100);

console.log(gonz.receiveDamage(70));
