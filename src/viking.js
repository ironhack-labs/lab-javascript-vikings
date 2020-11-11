//// Soldier
// class Soldier {
//   constructor(health, strength){
//     this.health = health;
//     this.strength = strength;
//   }

//   attack(){
//     return this.strength;
//   }

//   receiveDamage(theDamage){
//     this.health -= theDamage;
//   }

// }

// //// Viking
// class Viking extends Soldier{
//   constructor(name, health, strength){
//     super(health, strength);
//       this.name = name;
//   }

//   receiveDamage(theDamage){
//     this.health -= theDamage;
//     return this.health <= 0 ? `${this.name} has died in act of combat` : `${this.name} has received ${theDamage} points of damage`;
//   }

//   battleCry(){
//     return "Odin Owns You All!";
//   }

// }

// //// Saxon
// class Saxon extends Soldier{
//   receiveDamage(theDamage){
//     this.health -= theDamage;
//     return this.health <= 0 ?   "A Saxon has died in combat" :`A Saxon has received ${theDamage} points of damage`;
//   }

// }


// //// War
// class War {
//    constructor(){
//     this.vikingArmy = []; 
//     this.saxonArmy = [];   
//   }
   
//   addViking(aVikingObj){
//     this.vikingArmy.push(aVikingObj);
//   }

//   addSaxon(aSaxonObj){
//     this.saxonArmy.push(aSaxonObj);
//   }

//   vikingAttack(){
//     const randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
//     const randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

//     const damageSaxon = randomSaxon.receiveDamage(randomViking.attack())

//    if(randomSaxon.health <= 0) 
//     this.saxonArmy.splice(this.saxonArmy[damageSaxon],1)

//      return damageSaxon
//     }
    

//   saxonAttack(){
//     const randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
//     const randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
//     const damageViking = randomViking.receiveDamage(randomSaxon.attack()) 
    
//     if(randomViking.health <= 0) 
//     this.vikingArmy.splice(this.vikingArmy[damageViking],1)

//     return damageViking

//   }


//   showStatus(){
    
//     if(this.saxonArmy.length ===  0) return "Vikings have won the war of the century!"
    
//     if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day..."
    
//     if(this.vikingArmy.length > 0 &&  this.saxonArmy.length > 0 ) return "Vikings and Saxons are still in the thick of battle."
//   }
// }

//// end///



////// fixed if statements reverse works either way but just us >0 and switch
//// Soldier
// class Soldier {
//   constructor(health, strength){
//     this.health = health;
//     this.strength = strength;
//   }

//   attack(){
//     return this.strength;
//   }

//   receiveDamage(theDamage){
//     this.health -= theDamage;
//   }

// }

// //// Viking
// class Viking extends Soldier{
//   constructor(name, health, strength){
//     super(health, strength);
//       this.name = name;
//   }

//   receiveDamage(theDamage){
//     this.health -= theDamage;
//     return this.health > 0 ? `${this.name} has received ${theDamage} points of damage`:`${this.name} has died in act of combat`  
//   }

//   battleCry(){
//     return "Odin Owns You All!";
//   }

// }

// //// Saxon
// class Saxon extends Soldier{
//   receiveDamage(theDamage){
//     this.health -= theDamage;
//     return this.health > 0 ?  `A Saxon has received ${theDamage} points of damage`:  "A Saxon has died in combat" 
//   }

// }


// //// War
// class War {
//    constructor(){
//     this.vikingArmy = []; 
//     this.saxonArmy = [];   
//   }
   
//   addViking(aVikingObj){
//     this.vikingArmy.push(aVikingObj);
//   }

//   addSaxon(aSaxonObj){
//     this.saxonArmy.push(aSaxonObj);
//   }

//   vikingAttack(){
//     const randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
//     const randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

//     const damageSaxon = randomSaxon.receiveDamage(randomViking.attack())

//    if(randomSaxon.health <= 0) 
//     this.saxonArmy.splice(this.saxonArmy[damageSaxon],1)

//      return damageSaxon
//     }
    

//   saxonAttack(){
//     const randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
//     const randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
//     const damageViking = randomViking.receiveDamage(randomSaxon.attack()) 
    
//     if(randomViking.health <= 0) 
//     this.vikingArmy.splice(this.vikingArmy[damageViking],1)

//     return damageViking

//   }


//   showStatus(){
    
//     if(this.saxonArmy.length ===  0) return "Vikings have won the war of the century!"
    
//     if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day..."
    
//     if(this.vikingArmy.length > 0 &&  this.saxonArmy.length > 0 ) return "Vikings and Saxons are still in the thick of battle."
//   }
// }




////////
//// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(theDamage){
    this.health -= theDamage;
  }

}

//// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
      this.name = name;
  }

  receiveDamage(theDamage){
    this.health -= theDamage;
    return this.health > 0 ? `${this.name} has received ${theDamage} points of damage`:`${this.name} has died in act of combat`  
  }

  battleCry(){
    return "Odin Owns You All!";
  }

}

//// Saxon
class Saxon extends Soldier{
  receiveDamage(theDamage){
    this.health -= theDamage;
    return this.health > 0 ?  `A Saxon has received ${theDamage} points of damage`:  "A Saxon has died in combat" 
  }

}


//// War
class War {
  constructor(){
   this.vikingArmy = []; 
   this.saxonArmy = [];   
 }
  
 addViking(aVikingObj){
   this.vikingArmy.push(aVikingObj);
 }

 addSaxon(aSaxonObj){
   this.saxonArmy.push(aSaxonObj);
 }



   vikingAttack(){
   let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
   let randomSaxon = this.saxonArmy[saxonIndex]
   let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
   let randomViking = this.vikingArmy[vikingIndex]

   const resultOfABattle = randomSaxon.receiveDamage(randomViking.attack())
 

   if(this.saxonArmy[saxonIndex].health <= 0){
     this.saxonArmy.splice(saxonIndex, 1)
   }
   return resultOfABattle

 }

 saxonAttack(){
   let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
   let randomSaxon = this.saxonArmy[saxonIndex]
   let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
   let randomViking = this.vikingArmy[vikingIndex]

   const resultOfABattle = randomViking.receiveDamage(randomSaxon.attack())
  

  if(this.vikingArmy[vikingIndex].health <= 0){
     this.vikingArmy.splice(vikingIndex, 1)
   }
   return resultOfABattle
 }  

 showStatus(){
   
   if(this.saxonArmy.length ===  0){

     return "Vikings have won the war of the century!"
   }else if(this.vikingArmy.length === 0){ 
     return "Saxons have fought for their lives and survived another day..."
   }else{
     return "Vikings and Saxons are still in the thick of battle."
   }
 }
}






