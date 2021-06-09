// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health-damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else{
      return `${this.name} has died in combat`
    }
  }
  battleCries(){
    return "Odin Owns you all!"
  }
}


// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(damage){
    super.receiveDamage(damage);
    if (this.health > 0){
      return `A saxon has received ${damage} points of damage`
    }
    else{
      return `A saxon has died in combat`
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
printer(){
  console.log(this.vikingArmy);
  console.log(this.saxonArmy);
}  
vikingAttack(){
  //console.log(Math.random() * this.saxonArmy.length)
  let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
  //console.log(saxonIndex)
  let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  let saxon = this.saxonArmy[saxonIndex]
  
  console.log(saxon)
  let viking = this.vikingArmy[vikingIndex]
  let saxonHealth = saxon.health;
  let vikingStrength = viking.strength;
  //console.log(vikingStrength)
  let result1 = saxon.receiveDamage(vikingStrength);
  console.log(saxon.health)
  //console.log(result1)
  if (saxon.health < 0){
    this.saxonArmy.splice(saxonIndex, 1);}
  return  `the new saxon health ${saxon.health} because of the strength ${viking.strength} of vikings`
  }
 saxonAttack(){
  let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
  let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  let saxon = this.saxonArmy[saxonIndex]
  let viking = this.vikingArmy[vikingIndex]
  let vikingHealth = viking.health;
  let saxonStrength = saxon.strength;
  let result1 = viking.receiveDamage(saxonStrength);
  if (viking.health < 0){
    this.vikingArmy.splice(vikingIndex, 1);}
  return result1 + " because of the " + saxonStrength + " strength of Vikings"
}
}
let pu = new War()
let viking1 = new Viking("muriel", 100, 120);
let saxon1 = new Saxon(100, 120);

pu.addViking(viking1);
pu.addSaxon(saxon1);

pu.saxonAttack()