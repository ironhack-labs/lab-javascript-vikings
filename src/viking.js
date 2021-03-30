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
       super.receiveDamage(damage);
       if (this.health > 0) {
           return `${this.name} has received ${damage} points of damage`
       } else {
           return `${this.name} has died in act of combat`
       }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
     }
}

// War
class War {
    constructor () {
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
        let randomViking = this.getRandomSoldier(this.vikingArmy);
        let randomSaxon = this.getRandomSoldier(this.saxonArmy);
        let result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            let index = this.saxonArmy.indexOf(randomSaxon);
            this.saxonArmy.splice(index, 1)
        }
        return result;
    }
    getRandomSoldier(soldierArr) {
        const randomIndex = Math.floor(Math.random() * soldierArr.length);
        return soldierArr[randomIndex];
    }
}
