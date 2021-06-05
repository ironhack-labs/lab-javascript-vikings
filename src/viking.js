


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
    let vikAttack= this.saxonArmy[x].receiveDamage(this.vikingArmy[y].strength);
    if(this.saxonArmy[x].health<=0){this.saxonArmy.splice(x,1);}
    return vikAttack;
  }
  saxonAttack(){
    let x=Math.floor(Math.random()*this.vikingArmy.length)
    let y=Math.floor(Math.random()*this.saxonArmy.length)
    let SaxAttack=this.vikingArmy[x].receiveDamage(this.saxonArmy[y].strength);
    if(this.vikingArmy[x].health<=0){this.vikingArmy.splice(x,1)}
    return SaxAttack;
  }
  showStatus(){
    if(this.saxonArmy.length<=0){return `Vikings have won the war of the century!`}
    if(this.vikingArmy.length<=0){return "Saxons have fought for their lives and survived another day..." }
    return "Vikings and Saxons are still in the thick of battle."
  }
}


// The following is required to make unit tests work.

/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

