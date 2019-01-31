// Soldier
function Soldier(health, strength) {
  this.strength = strength;
  this.health = health;

  this.attack = function () {

      return strength
  }
  this.receiveDamage = function (Soldier){
      this.receiveDamage = 50;
      this.health -= this.receiveDamage;

  }
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health = health - damage;
    if(this.health > 0) return name + " has received " + damage +" points of damage";
        if(this.health === 0) return name + " has died in act of combat";
    };
    this.battleCry = function() {
      return 'Odin Owns You All!'
    }
  }

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (health, strength) {
  Soldier.call(this,health,strength);
  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health<= 0) {
      console.log( "A Saxon has died in combat" );
      return "A Saxon has died in combat";
    } else {
      console.log( "A Saxon has received "+ damage +" points of damage");
      return "A Saxon has received "+ damage +" points of damage";
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
  }

  this.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
  }

  this.vikingAttack = function(){
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var rtn = this.saxonArmy[randomSaxon].receiveDamage( this.vikingArmy[randomViking].strength);
    if(this.saxonArmy[randomSaxon].health <= 0){
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return rtn;
  }

  this.saxonAttack = function() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var rtn = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if(this.vikingArmy[randomViking].health <= 0){
      this.vikingArmy.splice(randomViking, 1);
    }
    return rtn;
  }

  this.showStatus = function() {
    if(this.vikingArmy.length <= 0){
      console.log("Saxons have fought for their lives and survive another day...");
      return "Saxons have fought for their lives and survive another day..."
    } else if(this.saxonArmy.length <= 0){
      console.log("Vikings have won the war of the century!");
      return "Vikings have won the war of the century!"
    } else {
      console.log("Vikings and Saxons are still in the thick of battle.");
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}