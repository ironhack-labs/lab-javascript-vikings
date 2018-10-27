// Soldier

function Soldier (health, strength) {
this.health = health;
this.strength = strength;

Soldier.prototype.attack= function attack(){
  return this.strength}
}

Soldier.prototype.receiveDamage = function receiveDamage(damage){
this.health -= damage;
}

// Viking

function Viking (name, health, strength) {
  Soldier.call (this, health,strength);
  this.name = name;
  
}
Viking.prototype =Object.create (Soldier.prototype);

Viking.prototype.receiveDamage = function receiveDamage(damage){
  var NewHealth= this.health -= damage;

  if (NewHealth > 0) {return this.name +" has received " + damage + " points of damage"}
  else { return this.name +" has died in act of combat"}
  }

Viking.prototype.battleCry= function battleCry(){
  return "Odin Owns You All!"
  } 


// Saxon

function Saxon (health, strength) {
  Soldier.call (this,health,strength);
}

Saxon.prototype = Object.create (Soldier.prototype);

Saxon.prototype.receiveDamage = function receiveDamage(damage){
  var NewHealth= this.health -= damage;

  if (NewHealth > 0) {return "A Saxon has received "+ damage+ " points of damage"}

  else { return "A Saxon has died in combat"}
  }



// War

function War() {
  this.vikingArmy=[]
  this.saxonArmy =[]
}

War.prototype.addViking = function addViking(viking){
  this.vikingArmy.push(viking)
}

War.prototype.addSaxon = function addSaxon(saxon) {
  this.saxonArmy.push(saxon)
}


War.prototype.vikingAttack =function vikingAttack(){

  var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

  var result=this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());

    if (this.saxonArmy[randomSaxon].health<=0) this.saxonArmy.splice(randomSaxon,1);
     return result;
  }

War.prototype.saxonAttack = function saxonAttack(){

  var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

  var result=this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());

    if (this.vikingArmy[randomViking].health<=0) this.vikingArmy.splice(randomViking,1);
     return result;
  }



War.prototype.showStatus = function(){
    
  if (this.saxonArmy.length >0 && this.vikingArmy.length >0){return "Vikings and Saxons are still in the thick of battle."}

  else if (this.saxonArmy.length ===0){ return "Vikings have won the war of the century!";
  } 
  else if (this.vikingArmy.length ===0){ return "Saxons have fought for their lives and survive another day...";}

}