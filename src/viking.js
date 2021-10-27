// Soldier
class Soldier {
  constructor(health, strength){
  this.health = health
  this.strength = strength
}
attack(){
return this.strength
}

receiveDamage(damage){

this.health -= damage

}



}
// Viking
class Viking extends Soldier {
   constructor(name, health, strength){
   super(health, strength)
   this.name = name
  
}

 attack(){
  
  return this.strength
   
 }

 receiveDamage(damage){
   this.health -= damage
 if (this.health > 0){  
return `${this.name} has received ${damage} points of damage`
 } return `${this.name} has died in act of combat`

}

 battleCry(){
 return "Odin Owns You All!"
 }
}




 // Saxon
 class Saxon extends Soldier{
   
   
   
 receiveDamage(damage) {

   this.health -= damage

   if (this.health > 0){
     return `A Saxon has received ${damage} points of damage`
  } return `A Saxon has died in combat`
   
   }
 }
  

// // War
 class War {
   constructor(){
   this.vikingArmy = [];
   this.saxonArmy = [];
   }

 addViking(viking){
 this.vikingArmy.push(viking)
 }
 addSaxon(Saxon){
 this.saxonArmy.push(Saxon)
 }
 vikingAttack(){
  let viks      = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)]
  let saxens    = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
  const result  = saxens.receiveDamage(viks.strength)
  if (saxens.health <= 0 ){
    this.saxonArmy.splice(saxens)
  }return result
}
 saxonAttack(){
  let viks      = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)]
  let saxens    = this.saxonArmy[Math.floor(Math.random()* this.vikingArmy.length)]
  const result  = viks.receiveDamage(saxens.strength)
  if (viks.health <= 0){
    this.vikingArmy.splice(viks)
  }return result
 }

  



  showStatus(){

  }
 
 
 }
 

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
