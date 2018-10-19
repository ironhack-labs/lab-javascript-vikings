// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength, attack);
    this.name = name; 
}

Viking.prototype.batlleCry = function () {
    return "Odin Owns You All!";
}

Viking.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    }
    return this.name + " has died in act of combat";
}


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength, attack);
}

Saxon.prototype.receiveDamage = function (damage) {
    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
    }
    return "A Saxon has died in combat";
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(){
    this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
    let rndV = Math.floor(Math.random()) * this.vikingArmy.length;
    let rndS = Math.floor(Math.random()) * this.saxonArmy.length;
    this.vikingArmy[rndV];
    this.saxonArmy[rndS].receiveDamage(this.vikingArmy[rndV].strength);

    if (this.saxonArmy[rndS].health < 0 ) {
        this.saxonArmy.splice(rndS,1);
    } return this.saxonArmy[rndS].receiveDamage(this.vikingArmy[rndV].strength);        
}

War.prototype.saxonAttack = function(){
    let rndV = Math.floor(Math.random()) * this.vikingArmy.length;
    let rndS = Math.floor(Math.random()) * this.saxonArmy.length;
    this.vikingArmy[rndV];
    this.vikingArmy[rndS].receiveDamage(this.saxonArmy[rndV].strength);

    if (this.vikingArmy[rndS].health < 0 ) {
        this.vikingArmy.splice(rndS,1);
    } return this.vikingArmy[rndS].receiveDamage(this.saxonArmy[rndV].strength);        
}

War.prototype.showStatus= function(){
    if (saxonArmy.length < 0) {
        return "Vikings have won the war of the century!";
    } else if (vikingArmy.length < 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
}
