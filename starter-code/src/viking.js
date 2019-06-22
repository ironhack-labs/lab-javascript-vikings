// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
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
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;

  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`; 
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return `Odin Owns You All!`;
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`
    }
  }
}



// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingobject){
    this.vikingArmy.push(vikingobject)
  }

  addSaxon(saxonobject){
    this.saxonArmy.push(saxonobject)
  }

  vikingAttack(){
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let result = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].receiveDamage(randomViking.strength);
    this.saxonArmy.forEach((saxon,index)=>{
      if (saxon.health <= 0){
        this.saxonArmy.splice(index);
      }
    });
    return result;
  }

  saxonAttack(){
    let randomsaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let result = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].receiveDamage(randomsaxon.strength);
    this.vikingArmy.forEach((viking,index)=>{
      if(viking.health <= 0){
        this.vikingArmy.splice(index);
      }
    });
    return result;
  }

  showStatus(){
    if (this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
