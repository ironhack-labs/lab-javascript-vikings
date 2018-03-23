// Soldier

function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}


Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}

// Viking

function Viking(nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);

    this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage;

    if (this.health > 0 ){
        return (viking.name + ' has received ' + damage + ' points of damage');
    }
    else {
        return (viking.name + ' has died in act of combat');
    }
}

// Soldier.prototype.battleCry = function (damage) {
// this.health -= damage;
// }


// Saxon
function Saxon() { }

// War
function War() { }
