// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack (){
    return this.strength;
  }
  receiveDamage(damage){
    this.health-=damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength);
    this.name=name;
  }
   receiveDamage(damage){
    this.health -= damage;
    if(this.health>0){
    return `A ${this.name} has received ${damage} points of damage`;
    }else {
      return `${this.name} has died in act of combat`;
          }
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  
  constructor(health,strength){
     super(health,strength);
   }
  recieveDamage(damage){
     this.health-=damage;
     if(this.health>0){ 
       return `A Saxon has received ${damage} points of damage`;
      }
     else{ 
       return "A Saxon has died in combat";
      }
  }
  
}

// war
class War {
  constructor(){
     this.vikingArmy = [];
     this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vickingAttack(){
    let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    let randomVickingIndex = Math.floor(Math.random()*this.vickingArmy.length);
    let outcome=this.saxonArmy[randomSaxonIndex].recieveDamage(this.vikingArmy[randomVickingIndex].attack());
    if(outcome === "A Saxon has died in combat"){
      return this.saxonArmy.splice(saxonArmy[randomSaxonIndex],1);
    }
  }
  saxonAttack(){
    let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    let randomVickingIndex = Math.floor(Math.random()*this.vickingArmy.length);
    let outcome=this.vickingAttack[randomVickingIndex].recieveDamage(this.SaxonArmy[randomSaxonIndex].attack());
    if(outcome === "A Saxon has died in combat"){
      return this.vickingArmy.splice(vickingArmy[randomVickingIndex],1);
    }
  }
  showStatus(){
     if(this.saxonArmy.length ==0){
       return" Vikings have won the war of the century!";
     }
     else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..." 
     }
     else {
       return "Vikings and Saxons are still in the thick of battle.";
     } 
  }
}
