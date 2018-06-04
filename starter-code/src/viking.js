// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack=function(){
    return this.strength;
}

Soldier.prototype.receiveDamage=function(damage){
    this.health -= damage;
}

// Viking
Viking.prototype=Object.create(Soldier.prototype);

function Viking (name,health,strength){
    this.name=name;
    this.health=health;
    this.strength=strength;
}

Viking.prototype.attack=function(){
    return this.strength;
}

Viking.prototype.receiveDamage=function(damage){
    this.health -= damage;
    if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    }
    if (this.health <= 0){
        return this.name + " has died in act of combat";
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}

// Saxon
Saxon.prototype=Object.create(Soldier.prototype);

function Saxon (health,strength){
    this.health=health;
    this.strength=strength;
}

Saxon.prototype.attack=function(){
    return this.strength;
}

Saxon.prototype.receiveDamage=function(damage){
    this.health -= damage;
    if (this.health> 0){
        return "A Saxon has received " + damage + " points of damage";
    }
    if (this.health <= 0){
        return "A Saxon has died in combat";
    }
}


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking=function(Viking){
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon=function(Saxon){
    this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
    var attack = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
    if (this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].health <= 0){
        this.saxonArmy.splice(0,1);
    }
    return attack;
}

War.prototype.saxonAttack = function(){
    var attack = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
    if (this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)].health <= 0){
        this.vikingArmy.splice(0,1);
    }
    return attack;
}
War.prototype.showStatus = function () {
    if (this.saxonArmy.length === 0) {
        return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
        return 'Saxons have fought for their lives and survive another day...';
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
        return 'Vikings and Saxons are still in the thick of battle.';
    }
};