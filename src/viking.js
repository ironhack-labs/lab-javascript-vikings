// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack () {
        return this.strength
    };

    receiveDamage (damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {

    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    };

    receiveDamage (damage) {
        this.health -= damage;
        return this.health > 0
        ? `${this.name} has received ${damage} points of damage` 
        : `${this.name} has died in act of combat`
    };

    battleCry () {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
  
    receiveDamage (damage) {
this.health -= damage;
return this.health > 0
  ? `A Saxon has received ${damage} points of damage`
  : `A Saxon has died in combat`;
    };
}

// War
class War {

    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (viking) {
        this.vikingArmy.push(viking)
    };

    addSaxon (saxon) {
        this.saxonArmy.push(saxon)
    };

    vikingAttack () {

      //choose random Viking, choose random Saxon
      const attackerIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const defenderIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const randomViking = this.vikingArmy[attackerIndex];
      const randomSaxon = this.saxonArmy[defenderIndex];

      const attack = randomViking.attack();
      const damage = randomSaxon.receiveDamage(attack);
      if (randomSaxon.health < 0) {
        this.saxonArmy.splice(defenderIndex, 1);
      }

      return damage;
    };

    saxonAttack () {
        const attackerIndex = Math.floor(
          Math.random() * this.vikingArmy.length
        );
        const defenderIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[attackerIndex];
        const randomViking = this.vikingArmy[defenderIndex];

        const attack = randomSaxon.attack();
        const damage = randomViking.receiveDamage(attack);
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(defenderIndex, 1);
        }

        return damage;
    };


    genericAttack(attackingArmy, defendingArmy) {

        function getRandomIndex (arr) {
            return Math.floor(Math.random() * this.arr.length);
        };

        const attackerIndex = getRandomIndex(attackingArmy);
        const defenderIndex = getRandomIndex(defendingArmy)
        const randomAttacker = this.attackingArr[attackerIndex];
        const randomDefender = this.defendingArr[defenderIndex];

        const attack = randomAttacker.attack();
        const damage = randomDefender.receiveDamage(attack);
       
        if (randomDefender.health <= 0) {
          this.defendingArr.splice(defenderIndex, 1);
        }

        return damage;
    };
    
    
    showStatus () {

        console.log("Varmy: ", this.vikingArmy.length)
        console.log("SaxonArmy: ", this.saxonArmy.length);
        if (this.vikingArmy.length > 0 && this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return `Vikings and Saxons are still in the thick of battle.`;
        } else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
            return `Saxons have fought for their lives and survived another day...`;
        }
    };
}

let viking, saxon, war;

function generateViking() {
  const name = "Harald";
  const strength = 150;
  const health = 300;
  return new Viking(name, health, strength);
}

function generateSaxon() {
  const health = 60;
  const strength = 25;
  return new Saxon(health, strength);
}

viking = generateViking();
saxon = generateSaxon();
war = new War();

war.addSaxon(saxon)
war.addSaxon(saxon);
war.addSaxon(saxon);
war.addSaxon(saxon);
war.addViking()

console.log(war.genericAttack(this.vikingArmy, this.saxonArmy))

