// Soldier
class Soldier {
  constructor(health,strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health,strength)
    this.name = name;
  
 }
  receiveDamage(damage){
    this.health -= damage
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return 'Odin Owns You All!' 
  }
}



// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health,strength)
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    function selectRandom(array){
      return array[Math.floor(Math.random()*(array.length))]
    }
    let saxon = selectRandom(this.saxonArmy)
    let viking = selectRandom(this.vikingArmy)

    let result = saxon.receiveDamage(viking.strength);

    if (result === `A Saxon has died in combat`) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon),1);
    }

    return result
  }

  saxonAttack(){
    function selectRandom(array){
      return array[Math.floor(Math.random()*(array.length))]
    }
    let saxon = selectRandom(this.saxonArmy)
    let viking = selectRandom(this.vikingArmy)

    let result = viking.receiveDamage(saxon.strength);

    if (result === `${viking.name} has died in act of combat`) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking),1);
    }

    return result
  }

  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.'
    } else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }

  }

}

