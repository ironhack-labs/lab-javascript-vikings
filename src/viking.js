// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health,
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name = name
    }
   

    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}
class Saxon extends Soldier {
    
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else if(this.health <= 0){
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [],
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let saxonRandom = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
        let vikingRandom = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())]
        let result = saxonRandom.receiveDamage(vikingRandom.attack())
        if (saxonRandom.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonRandom),1)
        }
        return result 
    }
    saxonAttack(){
        let saxonRandom = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
        let vikingRandom = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())]
        let result2 = vikingRandom.receiveDamage(saxonRandom.attack())
        if(vikingRandom.health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(vikingRandom),1)
        }
        return result2
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }
        else if (this.vikingArmy.length && this.saxonArmy.length >= 1){
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }
}
