
class Soldier {
    constructor(health, strength) {

        this.health = health
        this.strength = strength
    }


    attack() {
        return this.strength

    }

    receiveDamage(thedamage) {
        this.health -= thedamage

    }
}


class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength)
        this.name = name


    }
    receiveDamage(thedamage) {
        this.health -= thedamage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${thedamage} points of damage`
        }
    }
    battleCry() {
        return "Odin Owns You All!"

    }

}

class Saxon extends Soldier {
    attack() {
        return this.strength
    }

    receiveDamage(thedamage) {
        this.health -= thedamage
        if (this.health > 0) {
            return `A Saxon has received ${thedamage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }

    }
}







// War
class War { }


