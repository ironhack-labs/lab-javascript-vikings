// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  battleCry(){
    return "Odin Owns You All!";
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObj){
    this.vikingArmy.push(vikingObj);    
  }

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack(){
    const saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    const message = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].attack());
    if(this.saxonArmy[saxonIndex].health < 1) {
      this.saxonArmy.splice(saxonIndex,1);
    }
    return message;
  }

  saxonAttack(){
    const saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    const message = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].attack());
    if(this.vikingArmy[vikingIndex].health < 1) {
      this.vikingArmy.splice(vikingIndex,1);
    }
    return message;
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
