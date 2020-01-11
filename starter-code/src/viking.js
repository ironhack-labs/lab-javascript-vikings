// Soldier
class Soldier {
  constructor(health, strength){
    this.health = 300;
    this.strength = 150;
  }
  attack(){
      return this.strength;
  };
  receiveDamage(damage){
     this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health > damage){
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }

  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage){
    this.health -= damage
    if (this.health > damage) {
      return `${this} has received ${damage} points of damage`
    } else {
      return `${this} has died in act of combat`
    }  
  }
  
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    let saxonAttacked = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)];
    saxonAttacked.receiveDamage(this.vikingArmy[0].strength);
    if (saxonAttacked.health < 1 ) {
      removeItemFromArr(this.saxonArmy, saxonAttacked)
    }
  }
}
