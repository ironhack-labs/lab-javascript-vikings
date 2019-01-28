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
  constructor(name, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg)
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return 'A Saxon has died in combat';
  }
}

// War
class War {
  constructor() {
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
    let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    saxon.receiveDamage(viking.attack());

    if (saxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
      return 'A Saxon has died in combat';
    } else {
      return `${viking.name} has received ${damage} points of damage`;
    }
  
  }
  saxonAttack(){
    let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    viking.receiveDamage(saxon.attack());

    if (viking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
    } else {
      return `${viking.name} has received ${saxon.strength} points of damage`
    }
  }
  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.'; 
    } else if (this.saxonArmy.length > 0) {
      return 'Saxons have fought for their lives and survive another day...';
    } else { 
      return 'Vikings have won the war of the century!';
    }
  }
}
