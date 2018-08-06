// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
        return this.strength;
    };
    this.receiveDamage = function(damage) {
        this.health -= damage;
    };
}

function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return this.name + ' has received ' + damage + ' points of damage';
        } else {
            return this.name + ' has died in act of combat';
        }
    };
    this.battleCry = function() {
        return 'Odin Owns You All!';
    };
}

function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return 'A Saxon has received ' + damage + ' points of damage';
        } else {
            return 'A Saxon has died in combat';
        }
    };
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(Viking) {
        this.vikingArmy.push(Viking);
    };
    this.addSaxon = function(Saxon) {
        this.saxonArmy.push(Saxon);
    };
    this.vikingAttack = function() {
        var randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
        var randomSaxon = this.saxonArmy[randomIndex];
        var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        var result = randomSaxon.receiveDamage(randomViking.attack());
        if (result === 'A Saxon has died in combat') {
            this.saxonArmy.splice(randomIndex, 1);
        }
        return result;
    };
    this.saxonAttack = function() {
        var randomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        var randomViking = this.vikingArmy[randomIndex];
        var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        var result = randomViking.receiveDamage(randomSaxon.attack());
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomIndex, 1);
        }
        return result;
    };
    this.showStatus = function() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survive another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    };
}
