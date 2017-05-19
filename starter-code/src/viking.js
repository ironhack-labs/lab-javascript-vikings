// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function(){
    return this.strength;
  };

  this.receiveDamage = function(damage){
    this.health -= damage;
  };
}

// Viking
function Viking (name, health, strength) {
  Soldier.call(this,health,strength);
    this.name = name;

    this.receiveDamage = function(damage){
      this.health -= damage;
      if(this.health > 0){
        return this.name +" has received "+ damage+ " points of damage";
      }else{
        return this.name +" has died in act of combat";
      }
    };
    this.battleCry = function(){
      return "Odin Owns You All!";
    };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (health, strength){
  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(Viking){
    this.vikingArmy.push(Viking);
  };

  this.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
  };

  this.vikingAttack = function(){

    this.saxonArmy.receiveDamage(Viking.strength);
    this.saxonArmy = this.saxonArmy.filter(function(saxon){
      saxon.health > 0;
    })
  };
  this.saxonAttack = function(){};

  this.showStatus = function(){};
}
