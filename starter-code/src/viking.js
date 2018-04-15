// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
Soldier.prototype.attack = function (){
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
}


// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype.receiveDamage = function (damage){
    this.health-= damage;
    if (this.health > 0) {
        return this.name + ' has received ' + damage + ' points of damage';
      } else {
        return this.name + ' has died in act of combat';
      }
    }

Viking.prototype.battleCry = function (){
    return "Odin Owns You All!";
}



// Saxon
Saxon.prototype= Object.create(Soldier.prototype);

function Saxon (health, strengh) {
    Soldier.call(this, health, strengh)
}

Saxon.prototype.receiveDamage = function (damage){
    this.health-= damage;
    if (this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
    }
    else {
        return "A Saxon has died in combat";
    }
 }


// War
function War() {}
