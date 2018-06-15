// Soldier
function Soldier(healthArg, strengthArg) {
this.health = healthArg;
this.strength = strengthArg;

this.attack = function() {
  return this.strength;
}

this.receiveDamage = function(damage) {
 this.health -= damage;
}






}

Viking.prototype = Object.create(Soldier.prototype);
// Viking
function Viking(nameArg, healthArg, strengthArg) {
  this.name = nameArg;
  Soldier.call(this, healthArg, strengthArg);

  this.attack();

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health >= 50){
      return(this.name + " has received " + damage +" points of damage");
    } else {
      return(this.name +" has died in act of combat");
    }
    
  }; 

  this.battleCry = function(){
    return ("Odin Owns You All!");
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);

  this.attack();

  this.receiveDamage = function(damage) {
    this.health -= damage;

    if(this.health >0){
      return("A Saxon has received "+  damage +" points of damage");
    } else {
      return("A Saxon has died in combat");
    }
    
  }; 
}

// War
function War() {

  this.vikingArmy = [ ];
  this.saxonArmy = [ ];

  this.addViking= function(vik){
    this.vikingArmy.push(vik);
  }
  this.addSaxon= function(sax){
    this.saxonArmy.push(sax);
  }
}
  /*
  this.vikingAttack= function(){
    var Sa = this.saxonArmy[Math.floor(Math.random()*saxonArmy.lenght)].receiveDamage() == Viking.strength;
    if(ataque.health <= 0){
      ataque.pop();
    }
    return vikingAttack;
  }
  this.saxonAttack= function(){}
  this.showStatus= function(){}

}
*/
