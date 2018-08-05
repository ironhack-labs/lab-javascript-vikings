// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

    this.attack = function() {
        return this.strength;
    };

    this.receiveDamage = function(damage) {
        this.health = this.health - damage;
    };
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);

    this.name = name;

    this.attack = function() {
        return this.strength;
    };

    this.receiveDamage = function(damage) {
        this.health = this.health - damage;
        if (this.health > 0) return this.name + ' has received ' + damage + ' points of damage';
        else return this.name + ' has died in act of combat';
    };

    this.battleCry = function() {
        return 'Odin Owns You All!';
    };
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    this.attack = function() {
        return this.strength;
    };

    this.receiveDamage = function(damage) {
        this.health = this.health - damage;
        if (this.health > 0) return 'A Saxon has received ' + damage + ' points of damage';
        else return 'A Saxon has died in combat';
    };
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    var vikingLength = this.vikingArmy.length;
    var saxonLength = this.saxonArmy.length;

    this.addViking = function(viking) {
        this.vikingArmy.push(viking);
    };

    this.addSaxon = function(saxon) {
        this.saxonArmy.push(saxon);
    };

    this.vikingAttack = function() {
        var randomViking = this.vikingArmy[Math.floor(Math.random() * vikingLength)];
        var randomSaxon = this.saxonArmy[Math.floor(Math.random() * saxonLength)];

        var result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxon, 1);
        return result;
    };

    this.saxonAttack = function() {
        var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        var result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) this.vikingArmy.splice(randomViking, 1);
        return result;
    };

    this.showStatus = function() {
        if (saxonLength === 0) {
            return 'Vikings have won the war of the century!';
        } else if (vikingLength === 0) {
            return 'Saxons have fought for their lives and survive another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    };
}
