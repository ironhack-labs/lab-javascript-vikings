// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength;
  }

  receiveDamage (damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {
    
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage (damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry () {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage (damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }

}

// War
class War {

  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }

  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack() {
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let resultAttackViking = undefined;  
  
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      resultAttackViking = saxon.receiveDamage(viking.strength);
      
      if (saxon.health <= 0) {
        this.saxonArmy.splice(saxon, 1);
      }
    } else {
      resultAttackViking = this.showStatus();
    }

    return resultAttackViking;
  }

  saxonAttack() {
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let resultAttackSaxon = undefined
    
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      resultAttackSaxon = viking.receiveDamage(saxon.strength);

      if (viking.health <= 0) {
        this.vikingArmy.splice(viking, 1);
      }
    } else {
      resultAttackSaxon = this.showStatus();
    }

    return resultAttackSaxon;
  }

  showStatus() {
    let battleStatus = '';
    const vikingArmyStatus = this.vikingArmy.length;
    const saxonArmyStatus = this.saxonArmy.length;

    if (vikingArmyStatus >= 1 && saxonArmyStatus >= 1) {
        battleStatus = 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.saxonArmy.length === 0) {
        battleStatus = 'Vikings have won the war of the century!'; 
    } else if (this.vikingArmy.length === 0) {
        battleStatus = 'Saxons have fought for their lives and survived another day...';

    }

    return battleStatus;
  }

  /**************** Extra lab ******************/

  // This method is made in replace of vikingAttack() and saxonAttack()

  soldierAttack(soldierType) {
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let resultAttack = undefined;
    let message = '';

    //I know i can ask if saxon or viking is undefined but i prefer ask if the length of the array is empty.
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      if (soldierType.toLowerCase() === 'saxon') {
        resultAttack = viking.receiveDamage(saxon.strength);
        if (viking.health <= 0) {
          this.vikingArmy.splice(viking, 1);
        }
      } else if (soldierType.toLowerCase() === 'viking') {
        resultAttack = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0) {
          this.saxonArmy.splice(saxon, 1);
        }
      } else {
        throw new Error('Type of soldier wrong, please chose between: \nsaxon\nviking');
      }
    } else {
      resultAttack = this.showStatus();
    }
     
    return resultAttack;
  }
}

/**************** Extra tests ******************/
/*
const saxon_1 = new Saxon(10, 9);
const saxon_2 = new Saxon(10, 8);
const saxon_3 = new Saxon(10, 8);

const viking_1 = new Viking('First', 10, 11);
const viking_2 = new Viking('Second', 10, 10);
const viking_3 = new Viking('Third', 10, 9);

const war = new War();

war.addSaxon(saxon_1);
war.addSaxon(saxon_2);
war.addSaxon(saxon_3);

war.addViking(viking_1);
war.addViking(viking_2);
war.addViking(viking_3);

console.log('Testeando War vikingAttack()');
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.vikingAttack());

console.log('Testeando War showStatus()');
console.log(war.showStatus());

console.log('Testeando War saxonAttack()');
console.log(war.saxonAttack());
console.log(war.saxonAttack());
console.log(war.saxonAttack());

console.log('Testeando War showStatus()');
console.log(war.showStatus());
console.log(war.showStatus());
console.log(war.showStatus());

console.log('Testeando War soldierAttack()');
console.log(war.soldierAttack('Viking'));
console.log(war.soldierAttack('Saxon'));
console.log(war.soldierAttack('Rome Soldier'));
*/






