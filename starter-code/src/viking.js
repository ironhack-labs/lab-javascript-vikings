// Soldier
class Soldier{
constructor (healthArg, strengthArg){
this.health= 300;
this.strength= 150;
}
attack(){
  return this.strength;
  console.log('in soldier');
}
receiveDamage(theDamage){
//theDamage= 50;
//console.log(this.health-theDamage);
this.health -= theDamage
console.log(this.health)
}
}

// Viking
class Viking extends Soldier {
  constructor (name, healthArg, strengthArg){
    super(healthArg, strengthArg);
    this.name= 'Harald';
    }
    attack(){
    return this.strength;
  console.log('in viking');
    }
    receiveDamage(theDamage){
      // console.log(this.health-theDamage);
      this.health -= theDamage

      if(this.health > 0){
        // return this.name+' '+'has received'+' '+theDamage+' '+'points of damage';
        return `${this.name} has received ${theDamage} points of damage`;
      } else {
        return this.name+' '+'has died in act of combat';
      }
    }
    battleCry(){
      return 'Odin Owns You All!'
     }
       }
       
      
        
// Saxon
class Saxon extends Soldier{
  constructor (healthArg, strengthArg){
  super(healthArg, strengthArg)
this.health= 60;
this.strength= 25;
  }
attack(){
  return this.strength
  console.log('in saxon')
}
receiveDamage(theDamage){
  this.health -= theDamage
 if(this.health > 0){
  return `A Saxon has received ${theDamage} points of damage`;
} else {
  return 'A Saxon has died in combat'
}
}
}



// Bonus War
class War {
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
    
  }

  addViking(viking){
    this.vikingArmy+= viking;
    console.log(this.vikingArmy);
  }

  
  addSaxon(saxon){
    this.saxonArmy+=saxon;
  }

  
  vikingAttack(){}
    
    
  saxonAttack(){}
    
    
  showStatus(){}

  
  }


