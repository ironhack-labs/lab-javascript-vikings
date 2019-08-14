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
    super(health, strength)
    this.name = name;
  }
  receiveDamage(damage){
    if (damage >= this.health){
      this.health -= damage;
      return `${this.name} has died in act of combat`
    }
    else {
      this.health -= damage;
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(damage){
    if (damage >= this.health){
      this.health -= damage;
      return `A Saxon has died in combat`
    }
    else {
      this.health -= damage;
      return `A Saxon has received ${damage} points of damage`
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
   let damage = this.vikingArmy[this.vikingArmy.length-1].strength;
   let saxon = this.saxonArmy[this.saxonArmy.length-1];
   if(saxon.health <= damage){
     this.saxonArmy.pop(saxon);
   }
   return saxon.receiveDamage(damage);
  }
  saxonAttack(){
  let damage = this.saxonArmy[this.saxonArmy.length-1].strength;
  let viking = this.vikingArmy[this.vikingArmy.length-1];
    if(viking.health <= damage){
     this.vikingArmy.pop(viking);
    }
  return viking.receiveDamage(damage);
  }
  showStatus(){
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..."
    }
    else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
