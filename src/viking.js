// Soldier
class Soldier {
  constructor(health, strength) {
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
class Viking extends Soldier { //Herança
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){ //Polimorphism
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    } else{
      return `${this.name} has died in act of combat`
    }
    
  };
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{ 
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    };
    
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

  };

  addSaxon(saxon){
this.saxonArmy.push(saxon);
  };

  getRandomSoldier(armyLength) { // refatoração pro showStatus.
    return Math.floor(armyLength * Math.random())
  }

  vikingAttack(){
    const viking = this.vikingArmy[this.getRandomSoldier(this.vikingArmy.length)]; // acesso ao viking
    const saxonIndex = this.getRandomSoldier(this.saxonArmy.length);// Indicie aleatorio entre 0 e vikingArmy.length
    const saxon = this.saxonArmy[saxonIndex]; // acesso ao viking

    return this.attack(viking, saxon, this.saxonArmy, saxonIndex)// refatoração
  };

  saxonAttack(){
    const vikingIndex = this.getRandomSoldier(this.vikingArmy.length);// Indicie aleatorio entre 0 e vikingArmy.length
    const viking = this.vikingArmy[vikingIndex]; // acesso ao viking
    const saxon = this.saxonArmy[this.getRandomSoldier(this.saxonArmy.length)]; // acesso ao viking

    return this.attack(saxon, viking, this.vikingArmy, vikingIndex) // refatoração do show status;
  };

  attack(attacker, attacked, attackedArmy, attackedIndex) { //criação
    const damageResult = attacked.receiveDamage(attacker.strength)
    
    if (attacked.health <= 0) {
      attackedArmy.splice(attackedIndex, 1)
    }
    
    return damageResult
  }

  showStatus(){
    if(this.saxonArmy.length <= 0){
      return 'Vikings have won the war of the century!'
    }else if(this.vikingArmy.length <= 0){
     return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  };
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
