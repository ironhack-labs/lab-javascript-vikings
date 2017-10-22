// Soldier
function Soldier (health,strength) {
  this.health=health;
  this.strength=strength;

  Soldier.prototype.attack= function(){
      return this.strength;
  };
  Soldier.prototype.receiveDamage= function(damage){
      this.health -= damage;
  };
}

// Viking - Herencia.
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
//Viking - Funciones
function Viking (name,health,strength) {
  Soldier.call(this, health, strength);
  this.name=name;

  Viking.prototype.attack= function(){
      return this.strength;
  };
  Viking.prototype.receiveDamage= function(damage){
      this.health -= damage;
      if(this.health>0){
        return this.name + " has received "+ damage + " points of damage";
      }else{
        return this.name +" has died in act of combat";
      }
  };
  Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
  };
}

//Saxon -Herencia
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
// Saxon - Funciones
function Saxon (health,strength) {
  Soldier.call(this, health, strength);

  Saxon.prototype.attack = function() {
  return this.strength;
};

  Saxon.prototype.receiveDamage= function(damage){
      this.health -= damage;
      if(this.health>0){
        return "A Saxon has received " + damage + " points of damage";
      }else{
        return "A Saxon has died in combat";
      }
  };
}

// War - Funciones
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

  war.prototype.addViking = function(viking){
    this.vikingArmy.push(viking);
  };

  war.prototype.addSaxon = function (saxon){
    this.saxonArmy.push(saxon);
  };

  war.prototype.vikingAttack = function(){
    var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if(this.saxonArmy[0].health <= 0) this.saxonArmy.splice(0, 1);
    return result;
  };

  war.prototype.saxonAttack = function () {
    var result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if(this.vikingArmy[0].health <= 0) this.vikingArmy.splice(0, 1);
    return result;
  };

  this.showStatus = function () {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}
