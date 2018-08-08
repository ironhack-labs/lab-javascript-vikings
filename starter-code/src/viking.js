// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function() {
    return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
    // in .call Function muss attack und receiveDamage Funtion nicht erwähnt werden
    // wird automatisch ausgeführt und vom Viking geerbt
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype); // Link the prototypes soldier and viking
Viking.prototype.constructor = Viking; // Link the properties of the prototypes

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;

    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat";
    }
};

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;

    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
    } else {
        return "A Saxon has died in combat";
    }
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
    // pick random saxon

    var selectedSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    var selectedSaxon = this.saxonArmy[selectedSaxonIndex];

    // pick random vikng
    var selectedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // call saxon's receiveDamage() method
    // get strength of selectesViking
    var vikingStrength = selectedViking.strength;
    // damage = strength of viking
    // This should only perform a single attack and the Saxon doesn't get to attack back.

    var receiveDamageString = selectedSaxon.receiveDamage(vikingStrength);

    // remove dead saxons from the army
    console.log("receiveDamageString", receiveDamageString);
    if (receiveDamageString === "A Saxon has died in combat") {
        this.saxonArmy.splice(selectedSaxonIndex, 1);
    }

    //return result of calling receiveDamage() of a Saxon with the strength of a Viking

    return receiveDamageString;
};

War.prototype.saxonAttack = function() {
    // pick random viking

    var selectedVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    var selectedViking = this.vikingArmy[selectedVikingIndex];

    // pick random saxon
    var selectedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    // call vikings's receiveDamage() method
    // get strength of selectesViking
    var saxonStrength = selectedSaxon.strength;
    // damage = strength of saxon
    // This should only perform a single attack and the viking doesn't get to attack back.
    var receiveDamageString = selectedViking.receiveDamage(saxonStrength);

    // remove dead viking from the army
    console.log("receiveDamageString", receiveDamageString);
    if (receiveDamageString === selectedViking.name + " has died in act of combat") {
        this.vikingArmy.splice(selectedVikingIndex, 1);
    }

    //return result of calling receiveDamage() of a viking with the strength of a saxon

    return receiveDamageString;
};

War.prototype.showStatus = function() {
    // Returns the current status of the War based on the size of the armies.
    var statusViking = this.vikingArmy.length;
    var statusSaxon = this.saxonArmy.length;

    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
};
