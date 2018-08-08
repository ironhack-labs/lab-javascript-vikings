// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength;
    }
   }

Soldier.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
}

// Viking

Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    this.battleCry = function(){
        return 'Odin Owns You All!'
    }       
}

Viking.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
    if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat";
    }
}

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
    if (this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
    } else {
        return "A Saxon has died in combat";
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}


War.prototype.addViking = function(viking){
    this.vikingArmy.push(viking);
}
War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
}
War.prototype.vikingAttack = function(){
    var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var string = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if (this.saxonArmy[randomSaxon].health <= 0) this.saxonArmy.splice(randomSaxon,1);
    return string;
}

War.prototype.saxonAttack = function(){
    var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var string = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if (this.vikingArmy[randomViking].health <= 0) this.vikingArmy.splice(randomViking,1);
    return string;
}

War.prototype.showStatus = function(){
    if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
    if (this.vikingArmy.length == 0) return 'Saxons have fought for their lives and survive another day...';
    if (this.saxonArmy.length == 1 && this.vikingArmy.length == 1) return 'Vikings and Saxons are still in the thick of battle.';
}