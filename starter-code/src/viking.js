// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function () {
        return this.strength;
    };
    this.receiveDamage = function (damage) {
        return this.health -= damage;
    };
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    this.receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
            console.log(name + " has received " + damage + " points of damage");
        } else {
            console.log(name + " has died in act of combat");
        }
        return;
    }
    this.battleCry = function () { // esta función no hace nada...
        return console.log("Odin Owns You All!");
    }
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
            console.log("A Saxon has received " + damage + " points of damage");
        } else {
            console.log("A Saxon has died in combat");
        }
        return;
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    console.log("Fight!!");
}
// instancia de War
var war1 = new War();
War.prototype.addViking = function (name, strength, health) {
    var viking = new Viking(name, strength, health);
    war1.vikingArmy.push(viking);
}
War.prototype.addSaxon = function (strength, health) {
    var saxon = new Saxon(strength, health);
    war1.saxonArmy.push(saxon);
}
War.prototype.vikingAttack = function () {
    var s = Math.floor(Math.random() * this.saxonArmy.length);
    var v = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxonArmy[s];
    this.vikingArmy[v];
    this.saxonArmy[s].receiveDamage(this.vikingArmy[v].strength);
    if (this.saxonArmy[s].health === 0) {
        console.log("Is death");
        this.saxonArmy.splice(s, 1);
    }
}
War.prototype.saxonAttack = function () {
    var s = Math.floor(Math.random() * this.saxonArmy.length);
    var v = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxonArmy[s];
    this.vikingArmy[v];
    this.vikingArmy[v].receiveDamage(this.saxonArmy[v].strength);
    if (this.vikingArmy[s].health === 0) {
        console.log("Is death");
        this.vikingArmy.splice(v, 1);
    }
}
War.prototype.showStatus = function () {
    if (this.saxonArmy.length === 0) {
        console.log("Vikings have won the war of the century!");
    } else if (this.vikingArmy.length === 0) {
        console.log("Saxons have fought for their lives and survive another day...");
    }
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
        console.log("Vikings and Saxons are still in the thick of battle.");
    }

}
//Crear un loop para que la batalla continue //PENDIENTE!

war1.addViking('jose', 200, 200);
war1.addViking('jose', 500, 500);
war1.addViking('jose', 800, 800);
war1.addViking('jose', 700, 700);

war1.addSaxon(2100, 150);

war1.vikingAttack();
war1.showStatus();

console.log(war1.vikingArmy);
console.log(war1.saxonArmy);
