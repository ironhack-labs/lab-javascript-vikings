// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)

        this.name = name
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        return (this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`)
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}
    

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        super.receiveDamage(damage)
        return (this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`)
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){}
    saxonAttack(){}
    showStatus(){}
}




let war1 = new War

war1.addViking(new Viking('Rajnak',100,20))
war1.addViking(new Viking('Rolo',120,15))
war1.addViking(new Viking('Floki',90,8))

war1.addSaxon(new Saxon(80,5))
war1.addSaxon(new Saxon(75,5))
war1.addSaxon(new Saxon(85,5))

console.log(war1.vikingArmy)
console.log(war1.saxonArmy)
