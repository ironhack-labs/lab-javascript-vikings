// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function() {
    return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
    console.log(damage);
    this.health -= damage;
};
// Viking

Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
}
//should remove the received damage from the health property
//if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
//if the Viking dies, it should return "NAME has died in act of combat"

Viking.prototype.receiveDamage = function(damage) {
    var vikDamage = (this.health -= damage);
    if (vikDamage > 0) {
        console.log(this);
        return this.name + ' has received ' + damage + ' points of damage';
    } else {
        return this.name + ' has died in act of combat';
    }
};

Viking.prototype.battleCry = function() {
    return 'Odin Owns You All!';
};

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype.receiveDamage = function(damage) {
    var saxDamage = (this.health -= damage);
    if (saxDamage > 0) {
        return 'A Saxon has received ' + damage + ' points of damage';
    } else {
        return 'A Saxon has died in combat';
    }
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

Soldier.prototype.receiveDamage = function(damage) {
    return (this.health -= damage);
};
