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
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if(this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
        }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if(this.health <= 0) {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor(){
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
        let randomIndex = Math.floor(Math.random()*this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomIndex];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        randomSaxon.receiveDamage(randomViking.attack());
      if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomIndex,1);
      return "A Saxon has died in combat";
      }
      else {
        return `A Saxon has received ${receiveDamage} points of damage`;
      }
    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        randomViking.receiveDamage(randomSaxon.attack());
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(randomViking, 1);
          return `${randomViking.name} has died in act of combat`;
        } else {
          return `${randomViking.name} has received ${randomSaxon.attack()} points of damage`;
        }
      }
    showStatus() {
        if(this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy <= 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}