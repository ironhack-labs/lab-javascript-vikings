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
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
  
    receiveDamage(damage) {
      super.receiveDamage(damage);
      let status = this.health > 0
        ?  `${this.name} has received ${damage} points of damage`
        :  `${this.name} has died in act of combat`;
        return status;
    }
  
    battleCry() {
      return `Odin Owns You All!`;
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
    constructor(health, strength) {
      super(health, strength);
    }
  
    receiveDamage(damage) {
        super.receiveDamage(damage);
        let status = this.health > 0
            ? `A Saxon has received ${damage} points of damage`
            : `A Saxon has died in combat`;
        return status;
    }
  }
  
  // War
  class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking = viking => { this.vikingArmy.push(viking) };

    addSaxon = saxon => {this.saxonArmy.push(saxon) };

    getRandomfighters() {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[saxonIndex];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        return {
            saxon: randomSaxon,
            saxonIndex, 
            viking: randomViking,
            vikingIndex
        }
    }

    attack(fighter) {
      const {saxon, saxonIndex, viking , vikingIndex } = this.getRandomfighters()
      const isViking = fighter === 'viking';
      const attacker = isViking ? viking : saxon;
      const defender = !isViking ? viking : saxon;
      const army = isViking ? this.saxonArmy : this.vikingArmy;
      const index = isViking ? saxonIndex : vikingIndex;
      const result = defender.receiveDamage(attacker.strength);
        if(defender.health <= 0) {
          army.splice(index, 1);
        }
        return result;
    }


    vikingAttack = () => this.attack('viking');

    saxonAttack = () => this.attack('saxon');

    showStatus() {
        if(!this.saxonArmy.length) return 'Vikings have won the war of the century!';
        else if(!this.vikingArmy.length) return 'Saxons have fought for their lives and survived another day...';
        else return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
  