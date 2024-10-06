// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage (receivedDamage) {
        this.health -= receivedDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(receivedDamage) { 
        this.health -= receivedDamage;
        if (this.health > 0){
            return `${this.name} has received ${receivedDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    } 
    
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (receivedDamage) {
        this.health -= receivedDamage;
        if (this.health > 0){
            return `A Saxon has received ${receivedDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  //Idea to combine vikingAttack() and saxonAttack()
  attackEnemy(attacker, attackee){
    //Randomly choose attacker
    const randomAttackerIndex = Math.floor(Math.random() * attacker.length);
    const chosenAttacker = attacker[randomAttackerIndex];

    //Randomly choose attackee
    const randomAttackeeIndex = Math.floor(Math.random() * attackee.length);
    const chosenAttackee = attackee[randomAttackeeIndex];

    //Conduct attack
    const attackOutcome = chosenAttackee.receiveDamage(chosenAttacker.strength);

    if (attackOutcome.includes("died")) {
      attackee.splice(randomAttackeeIndex, 1);
    }
    return attackOutcome;
  }

  vikingAttack() {
   return this.attackEnemy(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
   return this.attackEnemy(this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
    if (this.vikingArmy.length <= 0 && this.saxonArmy.length >= 1) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length <= 0 && this.vikingArmy.length >= 1) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else {
      return "Probably everyone is dead..";
    }
  }

}

/* const war1 = new War();
const viking1 = new Viking("A", 5, 5);
const viking2 = new Viking("B", 5, 5);
const viking3 = new Viking("C", 5, 5);
const saxon1 = new Saxon (5, 5);
const saxon2 = new Saxon (5, 5);
const saxon3 = new Saxon (5, 5);
war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);
war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);
console.log(war1.vikingArmy);
console.log(war1.saxonArmy);
war1.vikingAttack();
war1.saxonAttack();
war1.vikingAttack();
war1.saxonAttack();
war1.vikingAttack();
war1.saxonAttack(); */

