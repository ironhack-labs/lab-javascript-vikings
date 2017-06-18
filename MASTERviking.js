// Constructing the head of the Tree.
// A soldier.

function Soldier(health, strength) {

  this.health = health;
  this.strength = strength;
  //why does name come in here before these functions
  this.attack = function () {
    return "Your strength is at " + this.strength;
  };
  this.receiveDamage = function(damage) {
    return this.health -= damage;
  };
  //__proto__ is here?
}


//constructing a Viking

function Viking (name,health,strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  //__proto__ is here?
  this.receiveDamage = function (damage){
    this.health -= damage;
    if (this.health <= 0){
      return this.name + " has entered the halls of Valhalla. Deadzone.";
    } else {
      return this.name + " took a whopping " + damage + " damage to the FACE!";
    }
    //prototype
  };
  this.battleCry = function() {
    return "Odin Owns you ALL!";
  };
  //prototype
}


//Constructing a Saxon

function Saxon (health,strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health >= 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
}

var soldier1 = new Soldier(50,50);
var viking1 = new Viking("A Viking",10,10);
var saxon1 = new Saxon(8,8);


//Constructing WAR.
// create warzone
var worldWar1 = new War();


worldWar1.vikingAttack();

function War () {

  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function () {
    var viking = new Viking("Viking " + this.vikingArmy.length + 1, 10, _.random(7,10));
    this.vikingArmy.push(viking);
  };

  this.addSaxon = function () {
    var saxon = new Saxon(10, _.random(6,8));
    this.saxonArmy.push(saxon);
  };

  this.vikingAttack = function () {
    var randomSaxonIndex = _.random(0, this.saxonArmy.length-1);
    var randomSaxon = this.saxonArmy[randomSaxonIndex];
    var randomVikingIndex = _.random(0, this.vikingArmy.length-1);
    var randomViking = this.vikingArmy[randomVikingIndex];
    var damageReceived = randomSaxon.receiveDamage(randomViking.strength);
    this.saxonArmy = this.saxonArmy.filter(function(saxon){
      return saxon.health > 0;
    });
    return damageReceived;
  };
us
  this.saxonAttack = function () {
    var randomVikingIndex = _.random(0,this.vikingArmy.length-1);
    var randomViking = this.vikingArmy[randomVikingIndex];
    var randomSaxonIndex = _.random(0, this.saxonArmy.length-1);
    var randomSaxon = this.saxonArmy[randomSaxonIndex];
    var damageReceived = randomViking.receiveDamage(randomSaxon.strength);
    this.vikingArmy = this.vikingArmy.filter(function(viking){
      return viking.health > 0;
    });
    return damageReceived;
  };

  this.showStatus = function () {

    if (saxonArmy === 0) {
      return "Vikings have won the War!! Of the century!!";
    } else if (vikingArmy === 0) {
      return "Saxons fought and conquered like GODS!!!";
    } else {
      return "Vikings and Saxons still fighting it out";
    }
  };

}





orldWar1.addViking();
worldWar1.addViking();
worldWar1.addSaxon();
worldWar1.addSaxon();
worldWar1.addViking();
worldWar1.addViking();
worldWar1.addSaxon();
worldWar1.addSaxon();
worldWar1.addViking();
worldWar1.addViking();
worldWar1.addSaxon();
worldWar1.addSaxon();
console.log(vikingArmy);
console.log(saxonArmy);
