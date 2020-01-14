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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
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

  vikingAttack() {
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let result = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
    }
    return result;
  }

  saxonAttack() {
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let result = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
    }
    return result;
  }

  //This is our attempt on the superbonus. Please give us feedback!

//   attack(attacker, receiver) {

//     if(attacker === "viking" && receiver === "saxon" ){
//         let attackerArray = this.vikingArmy;
//         let receiverArray = this.saxonArmy;
//     }else{
//         let attackerArray = this.saxonArmy;
//         let receiverArray = this.vikingArmy;
//     }
//     let theAttacker = attackerArray[Math.floor(Math.random() * attackerArray.length)];
//     let theReceiver = receiverArray[Math.floor(Math.random() * receiverArray.length)];
//     let result = theReceiver.receiveDamage(theAttacker.strength);
//     if (theReceiver.health <= 0) {
//       this.receiverArray.splice(receiverArray.indexOf(theReceiver), 1);
//     }
//     return result;
//   }
  
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

let vikings = [];
for (let i = 0; i < 10; i++) {
  let newViking = new Viking("Hans" + i, 100, 10);
  vikings.push(newViking);
}
let tuesdayWar = new War();

for (viking of vikings) {
  tuesdayWar.addViking(viking);
}


