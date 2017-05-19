// Soldier
function Soldier (health,strength) {
  this.health = health;
  this.strength = strength
  this.attack = function(){
    return this.strength;
  }
  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health< 0) this.health=0;
  }
}

// Viking
function Viking (name, health, strength) {
  Soldier.call(this,health,strength);
  this.name = name;

  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health<= 0) {
      this.health=0;
      console.log( this.name + " has died in act of combat ");
    } else {
      console.log( this.name + " has received " + damage + " points of damage");
    }
  }

  this.battleCry = function(){
    console.log("Odin Owns You All!");
  }

}

// Saxon
function Saxon (health, strength) {
  Soldier.call(this,health,strength);
  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health<= 0) {
      this.health=0;
      console.log( "A Saxon has died in combat" );
    } else {
      console.log( "A Saxon has received "+ damage +" points of damage");
    }
  }
}

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(Viking){
    this.vikingArmy.push(Viking);
  }

  this.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
  }

  this.vikingAttack = function(){
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxonArmy[randomSaxon].receiveDamage( this.vikingArmy[randomViking].strength);
    if(this.saxonArmy[randomSaxon].health=== 0){
      this.saxonArmy.splice(randomSaxon, 1);
    }
  }

  this.saxonAttack = function() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if(this.vikingArmy[randomViking].health === 0){
      this.vikingArmy.splice(randomViking, 1);
    }
  }

  this.showStatus = function() {
    if(this.vikingArmy.length === 0)
      console.log("Saxons have fought for their lives and survive another day...");
    else if(this.saxonArmy.length === 0)
      console.log("Vikings have won the war of the century!");
    else
      console.log("Vikings and Saxons are still in the thick of battle.");
  }
}
