// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  
  attack(){
    return this.strength

  }

  receiveDamage(theDamage){
     this.health -= theDamage 

  }

}

// let soldier;
//   const strength = 150;
//   const health = 300;
// soldier = new Soldier(health, strength)


//Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name

  }


 // attack() {
    //         return this.strength;
    //      }
    //not needed will inherit from parent

  receiveDamage(theDamage){
    super.receiveDamage(theDamage)
    if(this.health > 0) return `${this.name} has received ${theDamage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry(){
    return "Odin Owns You All!"
  }
    
}

// let viking;
// const strength = 150;
// const health = 300;
// const name = 'Harald';
// viking = new Viking(name, health, strength);



// Saxon
class Saxon extends Soldier{
 
  // since redefine it we must call super in order to inherit from parents 
  receiveDamage(theDamage){
    super.receiveDamage(theDamage)
    if(this.health > 0) return `A Saxon has received ${theDamage} points of damage`;
    else return "A Saxon has died in combat"
  }

}

// let saxon;
// const health = 60;
// const strength = 25;

// saxon = new Saxon(health, strength);


// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(aVikingObject){
    this.vikingArmy.push(aVikingObject)
  }

  addSaxon(aSaxonObject){
    this.saxonArmy.push(aSaxonObject)

  }

  vikingAttack(){
    let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    let randomSaxon = this.saxonArmy[saxonIndex]
    let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
    let randomViking = this.vikingArmy[vikingIndex]

    let saxonDamage = randomSaxon.receiveDamage(randomViking.attack())

    if(randomSaxon.health <= 0)
    this.saxonArmy.splice(saxonIndex, 1)
    
    return saxonDamage
   
    
  }

  saxonAttack(){
    let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    let randomSaxon = this.saxonArmy[saxonIndex]
    let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
    let randomViking = this.vikingArmy[vikingIndex]

    let vikingDamage = randomViking.receiveDamage(randomSaxon.attack())

    if(randomViking.health <= 0)
    this.vikingArmy.splice(vikingIndex, 1)
    
    return vikingDamage
   
    
  }

showStatus(){

}



  
  
}







