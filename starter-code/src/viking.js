// Soldier
class Soldier {

  constructor(healthArg, strengthArg){
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack(){
    return this.strength
  }

  receiveDamage(theDamage){
    this.health -= theDamage
  }

}

// Viking
class Viking extends Soldier{

  constructor(name, healthArg, strengthArg){
    super(healthArg, strengthArg)
    this.name = name
  }


  receiveDamage(theDamage){
    this.health -= theDamage
    if(this.health > 0){
      return `${this.name} has received ${theDamage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return `Odin Owns You All!`
  }
};

// Saxon
class Saxon extends Soldier{

  constructor(healthArg, strengthArg){
    super(healthArg, strengthArg)
  }

  receiveDamage(theDamage){
    this.health -= theDamage
    if(this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}







// War
class War {

  constructor(){
  this.vikingArmy = []
  this.saxonArmy = []
  }


  addViking(newViking){
  this.vikingArmy.push(newViking)
  }

  addSaxon(newSaxon){
  this.saxonArmy.push(newSaxon)
  }

  vikingAttack(){

    
  let mySaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
  let myViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  let fightingSax = mySaxon.receiveDamage(myViking.strength)

  
  if(mySaxon.health <= 0 ){
   this.saxonArmy.splice(this.saxonArmy.indexOf(mySaxon), 1)
   return fightingSax
  }

  return fightingSax

  }

  saxonAttack(){


  let myViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  let mySaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  let fightingViking = myViking.receiveDamage(mySaxon.strength)

  if(myViking.health <= 0 ){
    this.vikingArmy.splice(this.vikingArmy.indexOf(myViking), 1)
    return  fightingViking
  }

  return  fightingViking

  };

  showStatus(){

    if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      return `Vikings and Saxons are still in the thick of battle.`
    } else if (this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    } else {
      return `Saxons have fought for their lives and survive another day...`
    }
  
    }

}
