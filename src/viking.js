// Soldier

class Soldier {
    constructor(health, strength) {
      this.health=health;
      this.strength=strength;
    } 
  
  attack(){
    return this.strength;
  }
  
  receiveDamage(theDamage){
     this.health-= theDamage
  }

  }
// Viking
class Viking extends Soldier{
constructor(name, health, strength){
     super(health,strength);
     this.name = name;
}

 receiveDamage(theDamage){
     this.health-= theDamage
   if (this.health>0){
     return `${this.name} has received ${theDamage} points of damage`
    }else return `${this.name} has died in act of combat`
  }

battleCry(){
  return `Odin Owns You All!`
}

}

// Saxon
class Saxon extends Soldier{
receiveDamage(theDamage){
       this.health-=theDamage
   if (this.health>0){
     return `A Saxon has received ${theDamage} points of damage`
   }else return `A Saxon has died in combat`
  }
  }


// War
class War {
constructor(){
 this.vikingArmy=[];
  this.saxonArmy =[];
}
addViking(viking){
this.vikingArmy.push(viking)
}

addSaxon(saxon){
this.saxonArmy.push(saxon)
}

vikingAttack(){
    let randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];    
    let damageSaxon = randomSaxon.receiveDamage(randomViking.attack())   if(randomSaxon.health <= 0) 
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


showStatus() {
  return this.saxonArmy.length=0 
  ? `Vikings have won the war of the century!`
  : this.vikingArmy.length=0
  ? `Saxons have fought for their lives and survived another day...`
: this.saxsonArmy.length >= 1 &&this. vikingArmy.length>=1
?`Vikings and Saxons are still in the thick of battle.`
}

}
