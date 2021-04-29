
// Soldier

class Soldier {
    constructor(health,strength) {
      this.health = health;
      this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage
    }

}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return`${this.name} has received ${damage} points of damage`;
        } else if (this.health < 0) {
            return`${this.name} has died in act of combat`;
        }
    }


    battleCry() {
        return `Odin Owns You All!`;
    }
}


  // // Saxon

class Saxon extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return`A Saxon has received ${damage} points of damage`;
        } else if (this.health < 0) {
            return`A Saxon has died ${damage} in combat`;
        }
    }
}

// // War

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy = Viking;
    }

    addSaxon(Saxon) {
        this.saxonArmy = Saxon;
    }

    vikingAttack() {
        this.saxonArmy.random()

    }

    saxonAttack() {


    }

    showStatus() {
        if (this.Saxon === 0) {
            return`Vikings have won the war of the century!`;
        } else if (this.Viking === 0) {
            return`Saxons have fought for their lives and survived another day...`;
        } else if(this.Saxon === 1 && this.Viking === 1){
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}

