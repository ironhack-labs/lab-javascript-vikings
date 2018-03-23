// Soldier constructor
function AbstractSoldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}
Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage
}


// Viking constructor 
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype.attack = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
        return this.name + "has received " + damage + "points of damage";
    } else {
        return this.name + "has died in active combat";
    }
}
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!!!!"
}


// Saxon
function Saxon(health, strength) {
    Soldier.call(this,health,strength)
 }
Saxon.prototype.attack = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
  return "A Saxon has received " + damage + "points of damage";
    } else {
        return "a Saxon has died in combat";
    }
}



// Wars
function War() { }
