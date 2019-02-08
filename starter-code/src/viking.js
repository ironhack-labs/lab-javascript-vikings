// Soldier
function Soldier(healthArg, strengthArg) {
  this.healthArg = healthArg;
  this.strenthArg = strengthArg;
//attack because that was the given method name
  this.attack = function (){
    return this.strenthArg;

  }
//function prototype method
  Soldier.prototype.receiveDamage = function (theDamageArg) {
    this.healthArg=this.healthArg-theDamageArg
    
    // no return 
  }
  
}
// Viking
function Viking(nameArg,healthArg,strengthArg) {
  
  this.name = nameArg;
  this.healthArg = healthArg;
  this.strenthArg = strengthArg;

  // inherit the attack method and receivedDamage
  
  Viking.prototype=new Soldier ();
  Viking.prototype.receiveDamage = function (theDamageArg) {
     
   this.healthArg=this.healthArg-theDamageArg
 
     if(this.health>0){
 
       return (this.name+' has received '+damageArg+' points of damage');
 
    }else {
     return this.name+' has died in act of combat'};
 
  this.battleCry=function(){
    return "Odin Owns You All!" ;
  }
  /*
  Soldier.call(this, healthArg, strengthArg)
  */
      
  }

}

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);

  }
Saxon.prototype=new Soldier();
Saxon.prototype.receiveDamage = function(damageArg){


    this.health=this.health-damageArg;
     iif(this.health > 0) {
      console.log("A Saxon has received " + damage + " points of damage");
    } else {
      console.log("A Saxon has died in combat");
    }

    }





    // War
function War() {}
