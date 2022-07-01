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

    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
  return `A Saxon has died in combat`;
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
    let hitSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    let hitViking = Math.floor(Math.random()*this.vikingArmy.length);
    let viking = this.vikingArmy[hitViking];
    let attackedSaxon = this.saxonArmy[hitSaxon];
    let attack = attackedSaxon.receiveDamage(viking.attack());
    if (attackedSaxon.health <= 0){
    this.saxonArmy.splice(hitSaxon, 1);
    }
    return attack;
  }
  saxonAttack(){
    let hitSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    console.log(hitSaxon);
    let hitViking = Math.floor(Math.random()*this.vikingArmy.length);
    let saxon = this.saxonArmy[hitSaxon];
    let attackedViking = this.vikingArmy[hitViking];
    let attack = attackedViking.receiveDamage(saxon.attack());
    if (attackedViking.health <= 0){
      this.vikingArmy.splice(hitViking, 1);
      }
    return attack;

  }
  showStatus(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

  //Super Bonus:

// vikingAttack(){
//   return warriorAttack(this.vikingArmy, this.saxonArmy)
// }
// saxonAttack(){
//   return warriorAttack(this.saxonArmy, this.vikingArmy)
// }
// warriorAttack(attackWarrior, getDamageWarrior){
//   let attacking = Math.floor(Math.random()*attackWarrior.length);
//   console.log(attacking);
//   let damagedWarrior = Math.floor(Math.random()*getDamageWarrior.length);
//   let enemy = attackWarrior[attacking];
//   let attacked = getDamageWarrior[attackedWarrior];
//   let attack = attacked.receiveDamage(enemy.attack());
//   if (attacked.health <= 0){
//     getDamageWarrior.splice(damagedWarrior, 1);
//     }
//   return attack;
//
// }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
