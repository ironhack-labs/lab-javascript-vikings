// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(dmg) {
    this.health -= dmg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(dmg) {
    super.receiveDamage(dmg);
    if (this.health <= 0) return `${this.name} has died in act of combat`;
    return `${this.name} has received ${dmg} points of damage`;
  }

  battleCry() {
      return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(dmg) {
        super.receiveDamage(dmg);
        if (this.health <= 0) return `A Saxon has died in combat`;
        return `A Saxon has received ${dmg} points of damage`;
      }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }

    getRandom(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    soldierAttack(soldierType) {
        let dmgResult = "";
        let randomVikingIndex = this.getRandom(0, this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingIndex];

        let randomSaxonIndex = this.getRandom(0, this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex]

        if ( soldierType === 'viking') {
            dmgResult = randomSaxon.receiveDamage(randomViking.strength);
            if ( randomSaxon.health <= 0 ) { this.saxonArmy.splice(randomSaxonIndex, 1) }
        } else {
            dmgResult = randomViking.receiveDamage(randomSaxon.strength);
            if ( randomViking.health <= 0 ) { this.vikingArmy.splice(randomVikingIndex, 1) }
        }
        
        return dmgResult;
    }

    vikingAttack() {
        return this.soldierAttack('viking');
    }

    saxonAttack() {
        return this.soldierAttack('saxon');
    }

    showStatus() {
        if ( this.saxonArmy.length <= 0 ) { return 'Vikings have won the war of the century!'; }
        if ( this.vikingArmy.length <= 0 ) { return 'Saxons have fought for their lives and survived another day...'; }
        if ( this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) { return 'Vikings and Saxons are still in the thick of battle.'; }
    }
}
