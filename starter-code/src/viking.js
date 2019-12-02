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
    let indexRandomSaxon = Math.floor(Math.random(this.saxonArmy.length));
    let randomSaxon = this.saxonArmy[indexRandomSaxon];
    let saxonStatus = randomSaxon
      .receiveDamage(
      (this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))].attack())
      );
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(indexRandomSaxon, 1);
    }
    return saxonStatus;    
  };
  saxonAttack(){
    let indexRandomViking = Math.floor(Math.random(this.vikingArmy.length));
    let randomViking = this.vikingArmy[indexRandomViking];
    let vikingStatus = randomViking
      .receiveDamage(
      (this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length))].attack())
      );
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(indexRandomViking, 1);
    }
    return vikingStatus;    
  };
  showStatus(){
    if (this.saxonArmy.length <= 0){
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length <= 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  };
}
