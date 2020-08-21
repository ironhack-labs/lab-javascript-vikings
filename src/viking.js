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
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        
        this.name = name
        }
        receiveDamage(damage){

            this.health -= damage
            if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        
            if (this.health <= 0) return `${this.name} has died in act of combat`
        }
        battleCry(){
            return `Odin Owns You All!`
        }
}

console.log({Soldier})

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
        
        }
        receiveDamage(damage){

            this.health -= damage
            if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        
            if (this.health <= 0) return `A Saxon has died in combat`
        }
}

// War
class War {
    
    vikingArmy = []
    saxonArmy = []

    addViking(Viking){
        this.vikingArmy.push(Viking);

    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let vikingPerson = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonPerson =  Math.floor(Math.random() * this.saxonArmy.length)
        let damageDone = this.saxonArmy[saxonPerson].receiveDamage(this.vikingArmy[vikingPerson].strength)
        if (this.saxonArmy[saxonPerson].health <= 0) {
            this.saxonArmy.splice(saxonPerson)
        }
        return damageDone
    }

    saxonAttack(){
        let vikingPerson = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonPerson =  Math.floor(Math.random() * this.saxonArmy.length)
        let damageDone = this.vikingArmy[vikingPerson].receiveDamage(this.saxonArmy[saxonPerson].strength)
        if (this.vikingArmy[vikingPerson].health <= 0) {
            this.vikingArmy.splice(vikingPerson)
        }
        return damageDone
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0){
         return `Saxons have fought for their lives and survived another day...`
        }
         else {
             return `Vikings and Saxons are still in the thick of battle.`
         }
    }
}
