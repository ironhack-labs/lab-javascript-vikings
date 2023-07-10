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
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  attack(){
    super.attack();
    return this.strength;
  }

  receiveDamage(damage){
    super.receiveDamage(damage);

    if(this.health){
      return `${this.name} has received ${damage} points of damage`
    } else {
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
    super.receiveDamage(damage);
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
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

    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    // console.log('---ARMIES ARE', this.saxonArmy, this.vikingArmy)
    // console.log('--- PICKING FIGHTERS ---',randomSaxon, randomViking)
    let result = randomSaxon.receiveDamage(randomViking.strength)
    // console.log('--- ATTACK RESULTS ---',randomSaxon, randomViking)
    if(randomSaxon.health<=0){
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
    }
    // console.log(this.saxonArmy)
    console.log(result)
    return result
  }

  saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

    let result = randomViking.receiveDamage(randomSaxon.strength);
    if(randomViking.health<=0){
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
    }
    return result

  }

  soldierAttack(attacker, defender){

    const randomAttacker = attacker[Math.floor(Math.random()*attacker.length)]
    const randomVictim = defender[Math.floor(Math.random()*defender.length)]
    let result = randomVictim.receiveDamage(randomAttacker.strength);
    if(randomVictim.health<=0){
      victimArmy.splice(victimArmy.indexOf(randomVictim),1);
    }
    return result
  }

  showStatus(){
    if(!this.saxonArmy.length){
      return 'Vikings have won the war of the century!'
    } else if (!this.vikingArmy.length){
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
const war = new War(
)

war.soldierAttack(war.saxonArmy, war.vikingArmy)
