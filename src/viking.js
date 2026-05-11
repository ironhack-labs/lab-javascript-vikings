// Soldier
class Soldier {
    constructor(health, strength){
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
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        return this.health<=0 ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage
        return this.health<=0 ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    attack(attacker, defender){
        const indexAttacker = Math.floor(Math.random() * attacker.length)
        const indexDefender = Math.floor(Math.random() * defender.length)
        const randomAttacker = attacker[indexAttacker]
        const randomDefender= defender[indexDefender]
        const defenderDamage = randomDefender.receiveDamage(randomAttacker.strength)
        if (randomDefender.health <= 0) {
            defender.splice(indexDefender, 1)
        }
        return defenderDamage
    }
    vikingAttack(){
        return this.attack(this.vikingArmy, this.saxonArmy)
    }
    saxonAttack(){
        return this.attack(this.saxonArmy, this.vikingArmy)
    }
    showStatus(){
        if (this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }
        if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
