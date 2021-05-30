


// Soldier
class Soldier {
  constructor(health,strength){
    this.health=health;
    this.strength=strength;
  }
  attack(){return this.strength}
  receiveDamage(damage){
   this.health-=damage 
  }

}

// Viking
class Viking extends Soldier {
constructor (name,health, strength)
{

  super(health, strength)
  this.name=name
  
}
battleCry(){return "Odin Owns You All!"}
receiveDamage(damage){
  this.health-=damage;
  return this.health<=0?`${this.name} has died in act of combat`:`${this.name} has received ${damage} points of damage`  
}


}

// Saxon

class Saxon extends Soldier{
  receiveDamage(damage){
    this.health-=damage;
    
    return this.health<=0?'A Saxon has died in combat':`A Saxon has received ${damage} points of damage`;
  }
}

// War

class War {
constructor (){
  this.vikingArmy=[];
  this.saxonArmy=[];
}

  addViking(viking){this.vikingArmy.push(viking)}
  addSaxon(saxon){this.saxonArmy.push(saxon)}
  vikingAttack(){ 
    let x=Math.floor(Math.random()*this.saxonArmy.length)
    let y=Math.floor(Math.random()*this.vikingArmy.length)
    this.saxonArmy[x].receiveDamage(this.vikingArmy[y].strength)}
  saxonAttack(){}
  showStatus(){}
}
const vikingWar= new War;
vikingWar.addViking (new Viking('odin',100,100))
vikingWar.addSaxon(new Saxon(100,100))
vikingWar.addSaxon(new Saxon(100,100))
vikingWar.addSaxon(new Saxon(100,100))
vikingWar.addSaxon(new Saxon(100,100))
vikingWar.addSaxon(new Saxon(100,100))
vikingWar.addSaxon(new Saxon(100,100))
vikingWar.addSaxon(new Saxon(100,100))
vikingWar.vikingAttack()
console.log(vikingWar)
// The following is required to make unit tests work.


/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

