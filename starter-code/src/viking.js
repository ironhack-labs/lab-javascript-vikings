// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
}


// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
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

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    const damagedSaxon = Math.floor((this.saxonArmy.length * Math.random()));
    const attackingViking = Math.floor((this.vikingArmy.length * Math.random()));
    
    const saxonStatus= this.saxonArmy[damagedSaxon].receiveDamage(this.vikingArmy[attackingViking].strength);
    
    if(this.saxonArmy[damagedSaxon].health <= 0) {
      this.saxonArmy.splice(this.saxonArmy[damagedSaxon],1);
    } return saxonStatus;
  }

  saxonAttack(){
    const damagedViking = Math.floor((this.vikingArmy.length * Math.random()));
    const attackingSaxon = Math.floor((this.saxonArmy.length * Math.random()));
    
    const vikingStatus= this.vikingArmy[damagedViking].receiveDamage(this.saxonArmy[attackingSaxon].strength);
    
    if(this.vikingArmy[damagedViking].health <= 0) {
      this.vikingArmy.splice(this.vikingArmy[damagedViking],1);
    } return vikingStatus;
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0){
      return 'Saxons have fought for their lives and survive another day...'
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}

