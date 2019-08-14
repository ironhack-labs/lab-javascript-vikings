// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
   return this.strength
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength);
    this.name = name;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health >0) return (`${this.name} has received ${damage} points of damage`);
    return (`${this.name} has died in act of combat`)
  }

  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super(health, strength)
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health >0) return (`A Saxon has received ${damage} points of damage`);
    return "A Saxon has died in combat";
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
    var damage = this.vikingArmy[this.vikingArmy.length-1].strength;
    var saxon = this.saxonArmy[this.saxonArmy.length-1];
    if (damage >= saxon.health){
      this.saxonArmy.pop();
    }
  return saxon.receiveDamage(damage);
  }
saxonAttack(){
  var damage2 = this.saxonArmy[this.saxonArmy.length-1].strength;
  var viking = this.vikingArmy[this.vikingArmy.length-1];
  if (damage2 >= viking.health){
    this.vikingArmy.pop();
  }
  return viking.receiveDamage(damage2);
}

showStatus(){
  if (this.saxonArmy.length ===0) return "Vikings have won the war of the century!";
  else if (this.vikingArmy.length ===0) return "Saxons have fought for their lives and survive another day...";
  else if(this.vikingArmy.length === this.saxonArmy.length) return "Vikings and Saxons are still in the thick of battle."
}
}
