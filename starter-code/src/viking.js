// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  // attack() {
  //   return this.strength;
  // }
  receiveDamage(damage) {
    this.health -= damage;
    let messegeDamage = '';
    if (this.health > 0) {
      messegeDamage = `${this.name} has received ${damage} points of damage`
    } else {
      messegeDamage = `${this.name} has died in act of combat`
    }
    return  messegeDamage;
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health,strength)
  }
  receiveDamage(damage) {
    this.health -= damage;
    let messegeDamage = '';
    if (this.health > 0) {
      messegeDamage = `A Saxon has received ${damage} points of damage`
    } else {
      messegeDamage = `A Saxon has died in combat`
    }
    return  messegeDamage;
  }
}

// War
class War {
  constructor (){
    this.armies = [];
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(newViking){
    this.vikingArmy.push(newViking);
  };
  addSaxon(newSaxon){
    this.saxonArmy.push(newSaxon);
  };
  vikingAttack(){
    this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length))]
    .receiveDamage(
      (this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))].attack())
    );
    
  };
  saxonAttack(){};
  showStatus(){};
}

// vikingAttack() method
// A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.

// should be a function
// should receive 0 arguments
// should make a Saxon receiveDamage() equal to the strength of a Viking
// should remove dead saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking
// saxonAttack() method
// The Saxon version of vikingAttack(). A Viking receives the damage equal to the strength of a Saxon.

// should be a function
// should receive 0 arguments
// should make a Viking receiveDamage() equal to the strength of a Saxon
// should remove dead vikings from the army
// should return result of calling receiveDamage() of a Viking with the strength of a Saxon
