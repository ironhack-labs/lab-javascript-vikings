// Soldier
function Soldier(healthArg, strengthArg) {
  this.health=healthArg;
  this.strength =strengthArg;
  this.attack=function() {
    return this.strength;
  }
  this.receiveDamage=function(damage){
    this.health=this.health-50;
   
  }

};

// Viking
function Viking(name, healthArg, strengthArg) {
  this.name=name;
  Soldier.call(this,healthArg,strengthArg);
  
//   this.receiveDamage=function(damage){
//     if (this.health===0){
//      return (this.name+" has died in act of combat");
//    } else {
//      return (this.name + " has received "+this.health+"points of damage");
//    }
//  }
  
  this.battleCry=function(){
    return "Odin Owns You All!";
  }
  
}

Viking.prototype=Object.create(Soldier.prototype);

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this,healthArg, strengthArg);
 
//   this.receiveDamage=function(damage){
//     if (this.health===0){
//      return (this.name+" has died in act of combat");
//    } else {
//      return (this.name + " has received "+this.health+"points of damage");
//    }
//  }


}

Saxon.prototype=Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy=[];
  this.saxonArmy=[];
  this.addViking=function(viking) {
    this.vikingArmy.push(viking);
  }

  this.addSaxon=function(saxon){
    this.saxonArmy.push(saxon);
}

  this.vikingAttack=function(){

  }

  this.saxonAttack=function(){

  }

  this.showStatus=function(){
    if(this.vikingArmy.length===0){
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length===0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


