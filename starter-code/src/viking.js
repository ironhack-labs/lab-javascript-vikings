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
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    return this.health <= 0 ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`;
  }

  battleCry(){
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }

  receiveDamage(damage){
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
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

  // This method lets any army to attack any other army
  armyAttack(fromArmy, toArmy){
    let attackerStrength = fromArmy[Math.floor(Math.random()*fromArmy.length)].attack();
    let response = toArmy[Math.floor(Math.random()*toArmy.length)].receiveDamage(attackerStrength);
    
    // Filter does not mutate the array, that's why I use forEach with splice instead
    toArmy.forEach((defender, index) => defender.health <= 0 ? toArmy.splice(index, 1) : defender);
    return response;
  }

  // This method is limited because right now vikings can only attack saxons. If there were another army this method would not work and it would be mandatory to use armyAttack instead
  vikingAttack(){
    return this.armyAttack(this.vikingArmy, this.saxonArmy);
  }

  // It has the same problems as vikingAttack
  saxonAttack(){
    return this.armyAttack(this.saxonArmy, this.vikingArmy);
  }

  showStatus(){
    if(this.saxonArmy.length <= 0){
      return 'Vikings have won the war of the century!';
    }
    if(this.vikingArmy.length <= 0){
      return 'Saxons have fought for their lives and survive another day...';
    }

    return 'Vikings and Saxons are still in the thick of battle.';
  }
}
