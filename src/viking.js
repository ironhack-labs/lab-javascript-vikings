// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
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
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    } else if (this.health <= 0){
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health <= 0){
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(vikingObj){
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);
  }

  attackMovement(attackingArr, defendingArr){
    const firstAttacker = attackingArr[0];
    const lastDefender = defendingArr[defendingArr.length - 1];
    
    const attackAgainstDefense = lastDefender.receiveDamage(firstAttacker.attack());

    if(lastDefender.health <= 0){
      defendingArr.pop();
    }

    return attackAgainstDefense;
  }

  vikingAttack(){
   return this.attackMovement(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack(){
   return this.attackMovement(this.saxonArmy, this.vikingArmy);
  }


  showStatus(){
    if(this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    }

    if(this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    }

    if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
