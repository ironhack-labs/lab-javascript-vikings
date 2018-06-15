// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;

  this.attack = function(){
    return this.strength;
  }

  this.receiveDamage = function(damage){
    this.health -= damage;
    return undefined;
  }

}

Viking.prototype = Object.create(Soldier.prototype);
// Viking
function Viking(name, health, strength){
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health < 1){
      return this.name + ' has died in act of combat';
    } else {
      return this.name + ' has received ' + damage + ' points of damage';
    }
  }

  this.battleCry = function(){
    return 'Odin Owns You All!';
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health < 1){
      return 'A Saxon has died in combat';
    } else {
      return 'A Saxon has received ' + damage + ' points of damage';
    }
  }
}

// War
function War() {

}
