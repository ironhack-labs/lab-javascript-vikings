// Soldier
class Soldier {
  constructor(health, strength){
    this.health=health;
    this.strength=strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength);
    this.name=name;
  }
  receiveDamage(damage){
    this.health-=damage;
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health-=damage;
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    const randomSaxon=Math.floor(Math.random()*this.saxonArmy.length);
    const randomViking=Math.floor(Math.random()*this.vikingArmy.length);
    const damage=this.vikingArmy[randomViking].attack();
    const whatsHappened=this.saxonArmy[randomSaxon].receiveDamage(damage);
    if(whatsHappened==="A Saxon has died in combat"){
      this.saxonArmy.splice(randomSaxon,1);
    }
    return whatsHappened;
  }
  saxonAttack(){
    const randomSaxon=Math.floor(Math.random()*this.saxonArmy.length);
    const randomViking=Math.floor(Math.random()*this.vikingArmy.length);
    const damage=this.saxonArmy[randomSaxon].attack();
    const whatsHappened=this.vikingArmy[randomViking].receiveDamage(damage);
    if(whatsHappened.includes(`has died in act of combat`)){
      this.vikingArmy.splice(randomViking,1);
    }
    return whatsHappened;
  }
  showStatus(){
    if(!this.saxonArmy.length){
      return "Vikings have won the war of the century!";
    } else if(!this.vikingArmy.length){
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
