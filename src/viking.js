// Soldier
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

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
      this.name = name;
  }

  attack(){
    return this.strength
  }
  receiveDamage(theDamage){
    this.health -= theDamage;
    return this.health <= 0 ? `${this.name} has died in act of combat` : `${this.name} has received ${theDamage} points of damage`;
  }

  battleCry(){
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier{
  // constructor(health, strength){
  //   super(health, strength);
  // }
  
  attack(){
    return this.strength;
  }

  receiveDamage(theDamage){
    this.health -= theDamage;
    return this.health <= 0 ?   "A Saxon has died in combat" :`A Saxon has received ${theDamage} points of damage`;
  }

}


// War
class War {
   constructor(){
    this.vikingArmy = []; 
    this.saxonArmy = [];
    // this.randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; 
    // this.randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    ////see if can refactor to not repeat
    
  }
   
  addViking(aVikingObj){
    this.vikingArmy.push(aVikingObj);
  }

  addSaxon(aSaxonObj){
    this.saxonArmy.push(aSaxonObj);
  }

  vikingAttack(){
    let randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let damageSaxon = randomSaxon.receiveDamage(randomViking.attack())

   if(randomSaxon.health <= 0) 
    this.saxonArmy.splice(this.saxonArmy[damageSaxon],1)

     return damageSaxon
    }
    


  saxonAttack(){
    let randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
    let damageViking = randomViking.receiveDamage(randomSaxon.attack()) 
    
    if(randomViking.health <= 0) 
    this.vikingArmy.splice(this.vikingArmy[damageViking],1)

    return damageViking

  }



  showStatus(){

  
  }
}





   