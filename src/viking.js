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

    vikingAttack(){
        if(this.vikingArmy.length > 0){
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)

        let result = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].attack())

        if(this.saxonArmy[saxonIndex].health <= 0){
            this.saxonArmy.splice(saxonIndex,1)
        }

        return result
        }
    }
    
    saxonAttack(){

        if(this.saxonArmy.length > 0){
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)

        let result = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].attack())

        if(this.vikingArmy[vikingIndex].health <= 0){
            this.vikingArmy.splice(vikingIndex,1)
        }

        return result
        }
    }
    showStatus(){
        return this.vikingArmy.length === 0 ? `Saxons have fought for their lives and survived another day...` : this.saxonArmy.length === 0 ? `Vikings have won the war of the century!` : `Vikings and Saxons are still in the thick of battle.`
    }

    figth(){
        let randomFight = Math.floor(Math.random() * 2);
        if(randomFight === 1){
            this.vikingAttack()
        }
        else{
            this.saxonAttack()
        }
    }
}




const war1 = new War

war1.addViking(new Viking('Rajnak',100,40))
war1.addViking(new Viking('Rolo',120,40))
war1.addViking(new Viking('Floki',90,40))

war1.addSaxon(new Saxon(80,25))
war1.addSaxon(new Saxon(75,25))
war1.addSaxon(new Saxon(85,20))
war1.addSaxon(new Saxon(80,25))
war1.addSaxon(new Saxon(75,20))
war1.addSaxon(new Saxon(85,20))

console.log(war1.vikingArmy)
console.log(war1.saxonArmy)


/* war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()
war1.vikingAttack()

war1.saxonAttack()
war1.vikingAttack()
war1.saxonAttack()
war1.vikingAttack()
war1.saxonAttack() 
war1.saxonAttack() 
war1.saxonAttack() 
war1.saxonAttack() */

war1.figth()
war1.figth()
war1.figth()
war1.figth()
war1.figth()
war1.figth()
war1.figth()
war1.figth()
war1.figth()
war1.figth()
war1.figth()
war1.figth()

console.log(war1.vikingArmy)
console.log(war1.saxonArmy)


console.log(war1.showStatus())