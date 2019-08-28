// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        this.attack = function () {
            return this.strength;
        };
        this.receiveDamage = function (damage) {
            this.health -= damage;
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
        this.battleCry = function() {
            return "Odin Owns You All!";
    }
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.receiveDamage = function (damage) {
            this.health -= damage;
            if (this.health > 0) {
                return `A Saxon has received ${damage} points of damage`;
            } else {
                return "A Saxon has died in combat";
            }
        }
    }

}

// War
class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
      this.addViking = function(vikingObject) {
        this.vikingArmy.push(vikingObject);
      };
      this.addSaxon = function(SaxonObject) {
        this.saxonArmy.push(SaxonObject);
      };
      this.vikingAttack = function() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(
          Math.random() * this.vikingArmy.length
        );
        let result = this.saxonArmy[randomSaxonIndex].receiveDamage(
          this.vikingArmy[randomVikingIndex].strength
        );
        if (this.saxonArmy[randomSaxonIndex].health <= 0) {
          this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return result;
      };
      this.saxonAttack = function() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(
          Math.random() * this.vikingArmy.length
        );
        let result = this.vikingArmy[randomVikingIndex].receiveDamage(
          this.saxonArmy[randomSaxonIndex].strength
        );
        if (this.vikingArmy[randomVikingIndex].health <= 0) {
          this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return result;
      };
    }
    showStatus() {
      if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
      } else return "Vikings and Saxons are still in the thick of battle.";
    }
   }
   