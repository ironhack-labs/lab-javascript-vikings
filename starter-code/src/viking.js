// Soldier
function Soldier(healthSoldier, strengthSoldier) {
    this.health = healthSoldier;
    this.strength = strengthSoldier;
}

// soldier methods
Soldier.prototype.attack = function () {
    return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
};

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

// Viking attack() inherited method
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking receiveDamage() method
Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage

    if (this.health <= 0) {
      return this.name + ' has died in act of combat';
    };
    return this.name + ' has received ' + damage + ' points of damage';
}

// Battlecry method
Viking.prototype.battleCry = function () {
    return "Odin Owns You All!"
};

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

// Saxon attack() inherited method
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// Saxon receiveDamage() method
Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage

    if (this.health <= 0) {
      return 'A Saxon has died in combat';
    };
    return 'A Saxon has received ' + damage + ' points of damage';
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

// Methods
War.prototype.addViking = function (Viking) {
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function () {
    this.receiveDamage(Saxon) === this.Viking.strength;
}