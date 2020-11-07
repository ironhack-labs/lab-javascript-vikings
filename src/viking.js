// Soldier
class Soldier {
  constructor(health,strength){
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if(this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if(this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`
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
    const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    const randomViking = Math.floor(Math.random()*this.vikingArmy.length);

    const attackViking = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    
    if(this.saxonArmy[randomSaxon].health <= 0 ) {
      this.saxonArmy.shift();
    }

    return attackViking;
  }
  saxonAttack(){
    const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    const randomViking = Math.floor(Math.random()*this.vikingArmy.length);

    const attackSaxon = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    
    if(this.vikingArmy[randomSaxon].health <= 0 ) {
      this.vikingArmy.shift();
    }

    return attackSaxon;
  }
  showStatus(){
    if(this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if(this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
      return 'Vikings and Saxons are still in the thick of battle.';
  }
}
