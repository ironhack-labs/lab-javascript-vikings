class Soldier {
    constructor (health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack() {
      return this.strength;
    };
    receiveDamage(damage) {
       this.health -= damage
       
    }
}

class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health <= 0) {
        return `${this.name} has died in act of combat`
      }
      else {
        return `${this.name} has received ${damage} points of damage`
      }
    }
    battleCry(){
      return "Odin Owns You All!"
    }
}

class Saxon extends Soldier {
    constructor(health, strength) {
      super(health, strength);
    }
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health <= 0) {
        return `A Saxon has died in combat`
      }
      else {
        return `A Saxon has received ${damage} points of damage`
      }
    }
}

class War {
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    addViking(viking){
      this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
      this.saxonArmy.push(saxon)
    }
    generalAttack(attackArmy, defArmy) {
        let attacker = attackArmy[Math.floor(Math.random()*attackArmy.length)];
        let defender = defArmy[Math.floor(Math.random()*defArmy.length)];
        let result = defender.receiveDamage(attacker.strength);
        if (defender.health <= 0) {
            defArmy.splice(defArmy.indexOf(defender), 1);
        }
        return result
    }
    vikingAttack () {
        return this.generalAttack(this.vikingArmy, this.saxonArmy);
    }
    saxonAttack () {
        return this.generalAttack(this.saxonArmy, this.vikingArmy);
    }
    showStatus() {
        if (this.saxonArmy.length === 0 ) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
  