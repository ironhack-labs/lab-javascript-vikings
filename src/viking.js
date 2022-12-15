// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    attack() {
        return this.strength;
    }
    receiveDamage(thedamage) {
        this.health -= thedamage;
        if (this.health > 0) {
            return `A Saxon has received ${thedamage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }

}


    class War {
        constructor() {
        // I am initializing empty arrays for the viking and saxon armies
          this.vikingArmy = [];
          this.saxonArmy = [];
        }
      
        // Adding 1 Viking to the vikingArmy.
        addViking(viking) {
          this.vikingArmy.push(viking);
        }
      
        // Adding 1 Saxon to the saxonArmy.
        addSaxon(saxon) {
          this.saxonArmy.push(saxon);
        }
      
        // I am making a random Saxon receive damage from a random Viking.
        vikingAttack() {
          if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) return;
        
        // I am getting a random index for the viking and saxon armies
          const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
          const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      
        // I am making the Saxon receive damage equal to the Viking´s strength
          const damage = saxon.receiveDamage(viking.strength);
      
         // I remove dead Saxons from the army
          if (saxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter(s => s !== saxon);
          }
        // Returning the result of calling the receiveDamage() lmethod of the Saxon.
          return damage;
        }
      
        // I am making a random Viking receive damage from a random Saxon.
        saxonAttack() {
          if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) return;
      
        // I am getting a random index for the viking and saxon armies
          const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
          const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      
        // I am making the Viking receive damage equal to the Saxon´s strength
        // Call the receiveDamage() method of the chosen Viking, passing in the strength of the chosen Saxon. This will cause the Viking to take damage.
          const damage = viking.receiveDamage(saxon.strength);
      
         // I remove dead Vinkings from the army - If the Viking´s health is less than or equal to 0, remove it from the army.
          if (viking.health <= 0) {
            this.vikingArmy = this.vikingArmy.filter(v => v !== viking);
          }
        // Returning the result of calling the receiveDamage() lmethod of the Viking.
          return damage;
        }
      
        // Returns the current status of the War.
        showStatus() {
          if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
          } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
          } else {
            return "Vikings and Saxons are still in the thick of battle.";
          }
        }
      }
      
