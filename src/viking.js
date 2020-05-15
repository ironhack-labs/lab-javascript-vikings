// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }


    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage (damage) {
        super.receiveDamage (damage);
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
        receiveDamage (damage) {
            super.receiveDamage (damage);
            return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
        }

}

// War
class War {
        constructor() {
            this.vikingArmy = []
            this.saxonArmy = []
        }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon)
    }

    addViking (viking) {
        this.vikingArmy.push(viking)
    }


    attack (armyAttack, armyDefende) {

        

        const randomAttack = Math.floor(Math.random() * armyAttack.length)
        const randomDefende = Math.floor(Math.random() * armyDefende.length)


        const resultAttack = armyDefende[randomDefende].receiveDamage(armyAttack[randomAttack].strength)

            if (armyDefende[randomDefende].health <= 0) {
                armyDefende.splice(randomDefende,1)
            }
    
       
       // Esta forma y la de arriba deberia ser igual no? En las funciones por separado vikingAttack() y saxonAttack() si 
       //me funcionaba pero cuando las he intentado juntar esta forma no he sido capaz de que funcione
       // armyDefende = armyDefende.filter (person => person.health > 0)


        return resultAttack
    }

    vikingAttack () {

        return this.attack (this.vikingArmy, this.saxonArmy)


    }

    saxonAttack () {
        return this.attack (this.saxonArmy, this.vikingArmy)
    }

    showStatus () {

        let status = ''
        const saxonlength = this.saxonArmy.length
        const vikinglength = this.vikingArmy.length

        if (saxonlength > 0 && vikinglength > 0) {
            status = "Vikings and Saxons are still in the thick of battle."
        } else if (saxonlength === 0) {
            status = "Vikings have won the war of the century!"
        } else if (vikinglength === 0) {
            status = "Saxons have fought for their lives and survived another day..."
        }

        return status

    }


}
