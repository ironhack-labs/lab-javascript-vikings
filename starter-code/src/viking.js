// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function () {
        return this.strength;
    }
    this.receiveDamage = function (damage) {
        this.health -= damage;
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;

    this.receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    };
    this.battleCry = function () {
        return `Odin Owns You All!`
    }
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    this.receiveDamage = function (damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    };
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function (vikingSoldier) {
        this.vikingArmy.push(vikingSoldier);
    }
    this.addSaxon = function (saxonSoldier) {
        this.saxonArmy.push(saxonSoldier);
    }
    this.vikingAttack = function () {
        this.vikingSoldier = randomSoldier(this.vikingArmy);
        this.saxonSoldier = randomSoldier(this.saxonArmy);
        this.attackResult = this.saxonSoldier.receiveDamage(this.vikingSoldier.attack());
        if (this.vikingSoldier.strength >= this.saxonSoldier.health) {
            this.saxonArmy.splice(this.saxonSoldier, 1);
            return this.attackResult;
        } return this.attackResult;
    }

    this.saxonAttack = function () {
        this.saxonSoldier = randomSoldier(this.saxonArmy);
        this.vikingSoldier = randomSoldier(this.vikingArmy);

        if (this.saxonSoldier.strength >= this.vikingSoldier.health) {
            this.vikingArmy.splice(this.vikingSoldier, 1);
            return getAttackResult(this.vikingSoldier, this.saxonSoldier);
        } return this.vikingSoldier.receiveDamage(this.saxonSoldier.attack());
    }

    // Get Random Soldier
    function randomSoldier(army) {
        return army[Math.floor(Math.random() * army.length)];
    }

    function getAttackResult(soldierAttack, soldierDefender) {
        this.attackResult = soldierDefender.receiveDamage(soldierAttack.attack());
        return attackResult;
    }
}