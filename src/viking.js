// Soldier
class Soldier {
    constuctor(health, strength) {
        this.health = health
        this.strength = strength
    }


    attack() {

        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health-damage
    }
}

// Viking
class Viking extends Soldier {
    constuctor(name, health, strength) {
        super(health,strength)
        this.name = name
    }


    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (health > 0) {
            return this.name + (" has recieved " + damage + " points of damage " )
        }
        else return this.name + (" has died in combat ")
    }

    battleCry() {
        return "Odin Owns You All!"

    }

}

// Saxon
class Saxon extends Soldier {


    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (health > 0) {
            return  ("A Saxon has recieved " + damage + " points of damage " )
        }
        else return (" A Saxon has died in combat")
    }




}


// War
class War {}
