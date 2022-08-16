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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength);
        this.name = name;   
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super(health,strength)
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A ${this.constructor.name} has received ${damage} points of damage`
        } else {
            return `A ${this.constructor.name} has died in combat`
        }
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
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {

        return this.attack(this.vikingArmy,this.saxonArmy)
    }
    saxonAttack() {

        return this.attack(this.saxonArmy, this.vikingArmy)
    }

    attack(attacker,defender) {
        let attacking_side = attacker;
        let defending_side = defender;
        let attacking_side_soldier = attacking_side[Math.floor(Math.random() * attacking_side.length)]
        let defending_side_soldier = defending_side[Math.floor(Math.random() * defending_side.length)]
        let message = defending_side_soldier.receiveDamage(attacking_side_soldier.strength)
        for (let i = 0; i < defending_side.length; i++) {
            if (defending_side[i].health <= 0) {
                defending_side.splice(i,1)
                i--
            }
        }
        return message
    }



    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
