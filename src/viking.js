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
};
// Viking
class Viking extends Soldier {
  // Override of the default constructor
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  };
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
  };
  battleCry () {
        return `Odin Owns You All!`;
    }
};

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
          if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
          else return `A Saxon has died in combat`;
        
    }
}

// Bonus Iteration 4: War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };
    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);
        if (this.saxonArmy[randomSaxonIndex].health <= 0) {
        this.saxonArmy.splice([randomSaxonIndex], 1)}
        return result;
    }
    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);
        if (this.vikingArmy[randomVikingIndex].health <= 0) {
        this.vikingArmy.splice([randomVikingIndex], 1)}
        return result;
}
// Bonus Iteration 5: Generic Method
generalAttack(attacker) {
    this.attacker = attacker;
    if (attacker.ToLowerCase() === saxon || attacker.ToLowerCase() === s) {
        attackerArray = this.saxonArmy;
        defenderArray = this.vikingArmy;
    }
    else if (attacker.ToLowerCase() === viking || attacker.ToLowerCase() === v) {
        attackerArray = this.vikingArmy;
        defenderArray = this.saxonArmy;
    }

    let randomAttackerIndex = Math.floor(Math.random() * this.attackerArray.length);
    let randomDefenderIndex = Math.floor(Math.random() * this.defenderArray.length);

    let result = this.attackerArray[randomAttackerIndex].receiveDamage(this.attackerArray[randomAttackerIndex].strength);
    if (this.defenderArray[randomDefenderIndex].health <= 0) {
    this.defenderArray.splice([randomDefenderIndex], 1)}
    return result;
}
//
    showStatus() {
    if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`
    }
    else if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`
    }
    else if (this.saxonArmy.length >= 1 || this.vikingArmy.length >= 1) {
        return `Vikings and Saxons are still in the thick of battle.`
    }
}
}






 