// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  function attack() {
    this.strength = strength;
  }
  function receiveDamage(damage) {
    this.health -= damage;
  }
}
var soldier = new Soldier(300, 150);

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  function attack() {
    this.strengthArg = strength;
  }
  function receiveDamage(damage) {
    if (Viking.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  function battlecry() {
    return "Odin Owns You All!";
  }
}

var viking = new Viking("Harald", 300, 150);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  function attack() {
    this.strength = strength;
  }
  function receiveDamage(damage) {
    this.health -= damage;
    if (Saxon.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

var saxon = new Saxon(60, 25);

// War
function War() {
function addViking (Viking) {
    vikingArmy.push(Viking)
}
function addSaxon (Saxon){
    saxonArmy.push(Saxon)
}
function vikingAttack (){
    var randomSaxon = saxonArmy[Math.floor(Math.random()*saxonArmy.length)];
    randomSaxon.receiveDamage() === Viking.strength()
    if (randomSaxon.health <= 0){
        splice(saxonArmy[indexOf.randomSaxon, 0])
    }
}
function saxonAttack ()
function showStatus ()

var vikingArmy = [];
var saxonArmy = [];


} 
