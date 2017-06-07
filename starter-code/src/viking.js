// Soldier
function Soldier ( health, strength ) {
  this.health = health;
  this.strength = strength;
  Soldier.prototype.attack = function() {
    return this.strength;
  }
  this.receiveDamage = function (theDamage) {
    this.health -= theDamage
  };
}
// Viking
Viking.prototype = Object.create(Soldier.prototype)

function Viking (name, healthParam, strengthParam) {
  Soldier.call(this, healthParam, strengthParam);
  this.name = name;


  this.receiveDamage = function (theDamage){
    this.health -= theDamage
    if (this.health > 0){
    return name + ' has received ' + theDamage + ' points of damage';
    }
    else {
      return name + ' has died in act of combat';
    }
  };
  this.battleCry = function (){
    return 'Odin Owns You All!'
  }
}

// Saxon
  function Saxon (healthParam, strengthParam) {
    Soldier.call(this, healthParam, strengthParam);
    this.name = 'A Saxon';

  }
  Saxon.prototype = Object.create(Viking.prototype);

// War
function War () {}
