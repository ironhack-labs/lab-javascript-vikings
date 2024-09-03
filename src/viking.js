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
  constructor(name,health,strength){
    super (health,strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    if (this.health>0){
      return `${this.name} has received ${damage} points of damage`;
    }
    else if (this.health<=0){
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier{
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
    else if (this.health <= 0) {
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
    let randS = Math.floor(Math.random()*this.saxonArmy.length)
    let randV = Math.floor(Math.random()*this.vikingArmy.length)
    let deadOrNot
    deadOrNot = this.saxonArmy[randS].receiveDamage(this.vikingArmy[randV].attack())
    if(deadOrNot === "A Saxon has died in combat"){
      this.saxonArmy.splice(randS,1)
    }
    return deadOrNot
  }
  saxonAttack(){
    let randS = Math.floor(Math.random()*this.saxonArmy.length)
    let randV = Math.floor(Math.random()*this.vikingArmy.length)
    let deadOrNot
    deadOrNot = this.vikingArmy[randV].receiveDamage(this.saxonArmy[randS].attack())
    if(deadOrNot[deadOrNot.length-1] === "t"){
      this.vikingArmy.splice(randV,1)
    }
    return deadOrNot
  }
  showStatus(){
    if (this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    }
    else if (this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    }
    else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
