// Soldier
function Soldier(healthArg, strengthArg) {
 this.health = healthArg;
 this.strength = strengthArg;   }
 
 Soldier.prototype.attack = function(){
     return this.strength;
 }
Soldier.prototype.receiveDamage=function(damage){
   
    this.damage=damage;
    this.health-=this.damage;
 }

// Viking
function Viking(name, health, strength) {
this.name=name;
this.health=health;
this.strength=strength;

}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor=Viking;
Viking.prototype.receiveDamage= function(damage){
     this.damage=damage;
     this.health-=this.damage;
     if(this.health>0){   
             return this.name+" has received "+this.damage+" points of damage";       
          } else if(this.health==0){
              return this.name+" has died in act of combat";

            }}
// return this.receiveDamages;
// }
//  Viking.prototype.receiveDamage = function(name, health,damage){
//    this.name=name;
//    this.health=health; 
//     this.health-=this.damage;
//  if(this.health>0){   
//     return this.name+"has received "+this.damage+" points of damage";       
//  } ;
    
Viking.prototype.battleCry=function(){
    return "Odin Owns You All!";
}
   
// Saxon
function Saxon(healthArg,strengthArg) {
    this.health=healthArg;
    this.strength=strengthArg;
    
}Saxon.prototype = Object.create(Soldier.prototype);
    Saxon.constructor=Viking;
    Saxon.prototype.receiveDamage= function(damage){
        this.damage=damage;
        this.health-=this.damage;
        if(this.health>0){   
                return "A Saxon has received "+this.damage+" points of damage";       
             } else if(this.health==0){
                 return "A Saxon has died in combat";
   
               }}
// War
function War() {
    this.saxonArmy=[];
    this.vikingArmy=[];
}
//this.addViking=function(VikingoToLoco){
  // this.vikingArmy.push(VikingoToLoco);
//return;
//}
//this.addSaxon=function(SexySaxon){
//this.saxonArmy.push(SexySxon);
 //   return;


War.prototype.addViking=function(VikingoToLoco){
   this.vikingArmy.push(VikingoToLoco);

}
War.prototype.addSaxon=function(SaxonObject){
    this.saxonArmy.push(SaxonObject);
}
War.prototype.vikingAttack=function(){
   // var viking= Mathfloor(Math.random()*vikingArmy.length);
     Saxon.prototype.receiveDamage= Viking.prototype.strength;
}

