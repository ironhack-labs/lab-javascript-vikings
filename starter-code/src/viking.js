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
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health <= 0){
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${damage} points of damage`;
  }

  battleCry(){
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }

  receiveDamage(damage){
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
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
    let vikingStrength = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].attack();
    let response = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].receiveDamage(vikingStrength);
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    return response;
  }

  saxonAttack(){
    let saxonStrength = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].attack();
    let response = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].receiveDamage(saxonStrength);
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    return response;
  }

  showStatus(){
    if(this.saxonArmy.length <= 0){
      return 'Vikings have won the war of the century!';
    }
    if(this.vikingArmy.length <= 0){
      return 'Saxons have fought for their lives and survive another day...';
    }
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}
