// Soldier
function Soldier(health, strength){
  this.health = health;
  this.strength = strength;
}
    Soldier.prototype.attack = function () {
     return this.strength;
 };
 Soldier.prototype.receiveDamage = function (damage) {
     this.health -= damage;
 };

//Viking
function Viking(name,health,strength){
  Soldier.call(this,health,strength);
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
  this.attack = function (){
    return this.strength;
  };

  Viking.prototype.recieveDamage = function (damage){
      this.health -= damage;
      var sentence = "";
    if(this.health > 0){
     sentence = this.name + " has received " + damage + " points of damage.";
    } else {
      sentence = this.name + " has died in act of combat";
    }
    return sentence;
  };

  Viking.prototype.battleCry = function battleCry(){
    return ("Odin Owns You All!");
};
//Saxon

function Saxon(health, strength){
  Soldier.call(this,health,strength);
}
Saxon.prototype= Object.create(Soldier.prototype);

  this.attack = function (){
    return this.strength;
  };
  this.recieveDamage = function (damage){
    this.health = health - damage;
    if(this.health != 0){
      console.log("A Saxon has recieved "+ damage + " points of damage.");
    } else {
      console.log("A Saxon has died in combat");
    }
};

function War(){
  this.vikingArmy = [];
  this.saxonArmy = [];
  }

  War.prototype.addViking = function (Viking){
    vikingArmy.push( Viking());
  };

  War.prototype.addSaxon = function (Saxon){
    saxonArmy.push( Saxon ());
  };

  var randomSaxon = this.saxonArmy[Math.floor(saxonArmy.length*Math.random())];
  var randomViking = this.vikingArmy[Math.floor(vikingArmy.length*Math.random())];

  War.prototype.vikingAttack = function (){
    randomSaxon.recieveDamage(randomViking.strength);
    if(randomSaxon.health === 0){
      saxonArmy.splice(saxonArmy.indexOf(randomSaxon),1);//quitar Saxon del array
      } else {
      return randomSaxon.health();
    }
  };

  this.prototype.saxonAttack = function (){
    randomViking.recieveDamage(randomSaxon.strength);
    if(Viking.health === 0){
      vikingArmy.splice(randomViking.indexOf(Army),1);//quitar vikings del array.
    } else {
      return randomViking.health();
    }
  };

  War.prototype.showStatus = function (){
    if(this.saxonArmy === []){
      console.log("Vikings have won the war of the century!");
  } else if (this.vikingArmy === []){
    console.log("Saxons have fought for their lives and survive another day...");
  } else {
    console.log("Vikings and Saxons are still in the thick of battle");}
};
