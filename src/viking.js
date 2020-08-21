class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
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
        if (this.health > 0)
            return `${this.name} has received ${damage} points of damage`
        else
            return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {


    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0)
            return `A Saxon has received ${damage} points of damage`
        else
            return `A Saxon has died in combat`
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)

    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let viking = this.selectRandom(this.vikingArmy)
        let saxon = this.selectRandom(this.saxonArmy)

        let result = this.saxonArmy[saxon].health -= this.vikingArmy[viking].strength
        if (this.saxonArmy[saxon].health <= 0) {
            this.saxonArmy.splice(saxon, 1);
            return `A Saxon has died in combat`
        }
        else
            return `A Saxon has received ${this.vikingArmy[viking].strength} points of damage`
    }
    saxonAttack() { //Los vikingos por algun motivo no pasan el test de jasmin de remove dead vikings from the array(y lo saxones si)
        let viking = this.selectRandom(this.vikingArmy)
        let saxon = this.selectRandom(this.saxonArmy)

        let result = this.vikingArmy[viking].health -= this.saxonArmy[saxon].strength
        if (this.vikingArmy[viking].health <= 0) {
            this.vikingArmy.splice(viking, 1);
            return `${this.vikingArmy[viking].name} has died in act of combat`
        }
        else
            return `${this.vikingArmy[viking].name} has received ${this.saxonArmy[saxon].strength} points of damage`

    }
    showStatus() {
        if (this.saxonArmy.length == 0 && this.vikingArmy.length > 0)
            return "Vikings have won the war of the century!"
        else if (this.saxonArmy.length > 0 && this.vikingArmy.length == 0)
            return "Saxons have fought for their lives and survived another day..."
        else
            return "Vikings and Saxons are still in the thick of battle."
    }

    selectRandom(army) {
        let fighter = 0;
        if (army.length === 0) {
            return null
        } else {
            fighter = Math.floor(Math.random() * army.length)

            return fighter
        }
    }

}
