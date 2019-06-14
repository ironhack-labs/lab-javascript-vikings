// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
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
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
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
  let randoViking = Math.floor(Math.random() * (this.vikingArmy.length));
  let randoSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
  let result = this.saxonArmy[randoSaxon].receiveDamage(this.vikingArmy[randoViking].strength);
  let i = 0;
  this.saxonArmy.forEach((eachSaxon)=>{
    if(eachSaxon.health <= 0){
      this.saxonArmy.splice(i,1);
    }
    i++;
  })
  return result;
}
saxonAttack(){
  let randoViking = Math.floor(Math.random() * (this.vikingArmy.length));
  let randoSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
  let result = this.vikingArmy[randoViking].receiveDamage(this.saxonArmy[randoSaxon].strength);
  let i = 0;
  this.vikingArmy.forEach((eachViking)=>{
    if(eachViking.health <= 0){
      this.vikingArmy.splice(i,1);
    }
    i++;
  })
  return result;
}
showStatus(){
  if(this.saxonArmy.length === 0){
    return `Vikings have won the war of the century!`
  }
  if(this.vikingArmy.length === 0){
    return `Saxons have fought for their lives and survive another day...`
  }
  return `Vikings and Saxons are still in the thick of battle.`
}
}
