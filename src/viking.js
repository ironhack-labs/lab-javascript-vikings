// Soldier
class Soldier {
    constructor (health, strength) {
      this.health = health;
      this.strength = strength;
    }
   attack() {
     return this.strength;
   }
   receiveDamage(damage) {
     this.health = this.health - damage;
   }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
       super (health, strength);
       this.name = name;
    }
    receiveDamage(damage) {
        //this.health = this.health - damage;
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return  'A Saxon has died in combat';
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
        let damage = this.vikingArmy[0].strength;
        let result = this.saxonArmy[0].receiveDamage(damage);//check again
        if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.shift();
        }
        return result;
    }
    saxonAttack () {
        let damage = this.saxonArmy[0].strength;
        let result = this.vikingArmy[0].receiveDamage(damage);
        if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.shift();
        }
        return result;
    }
}
