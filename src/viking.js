// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
    
  }

  battleCry(){
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier{
  
  receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
      
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
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
  vikingAttack(){
  
    let i = Math.floor(Math.random() * this.saxonArmy.length);
    let j = Math.floor(Math.random() * this.vikingArmy.length);
    
    let callRec = this.saxonArmy[i].receiveDamage(this.vikingArmy[j].attack());
        
    if (callRec === "A Saxon has died in combat") {
      this.saxonArmy.splice(i,1);
    } 
    return callRec;
  }
  

  saxonAttack(){
    let i = Math.floor(Math.random() * this.vikingArmy.length);
    let j = Math.floor(Math.random() * this.saxonArmy.length);

    let callRec = this.vikingArmy[i].receiveDamage(this.saxonArmy[j].attack());

    if (callRec ===  `${this.vikingArmy[i].name} has died in act of combat`) {
      this.vikingArmy.splice(i,1);
    } 
    return callRec;

  }
  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    } else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
  