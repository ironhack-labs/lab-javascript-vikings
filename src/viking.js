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
        this.health -= dmg;
        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    attack() {
        return this.strength;
    }

    receiveDamage(dmg) {
        this.health -= dmg;
        if (this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(aViking) {
        this.vikingArmy.push(aViking)
    }

    addSaxon(aSaxon) {
        this.saxonArmy.push(aSaxon)
    }
    vikingAttack() {
        let attack = this.vikingArmy[0].attack()
        this.saxonArmy[0].receiveDamage(attack)
        if (this.saxonArmy[0].health <= 0) {
             this.saxonArmy.shift()
        }
    }
    
    saxonAttack() {
        let attack = this.saxonArmy[0].attack()
        this.vikingArmy[0].receiveDamage(attack)
        if (this.vikingArmy[0].health <= 0) {
             this.vikingArmy.shift()
        }
    }

    displayInfo() {
        console.log(this.vikingArmy)
        console.log(this.saxonArmy)
    }

    showStatus() {
        if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

let soldier1 = new Soldier(12, 2)
let viking1 = new Viking('Jose',12,8)
let viking2 = new Viking('Didier',14,2)
let viking3 = new Viking('Francis',11,6)

let saxon1 = new Saxon(12,4)
let saxon2 = new Saxon(15,3)
let saxon3 = new Saxon(11,5)

let war1 = new War()
war1.addViking(viking1)
war1.addViking(viking2)
war1.addViking(viking3)

war1.addSaxon(saxon1)
war1.addSaxon(saxon2)
war1.addSaxon(saxon3)

//War is ready : 3 Viking vs 3 Saxon

// console.log(viking1.receiveDamage(10))
// console.log({soldier1, viking1})

war1.displayInfo()
war1.vikingAttack()
war1.saxonAttack()
war1.displayInfo()
war1.vikingAttack()
war1.saxonAttack()
war1.displayInfo()
// console.log({war1})
// console.log({saxon1})
