// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0) return `${this.name} has received ${damage} points of damage`
        return `${this.name} has died in act of combat`
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0) return `A Saxon has received ${damage} points of damage`
        return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)

        const saxonSoldier = this.saxonArmy[randomSaxon]
        const vikingHero = this.vikingArmy[randomViking]

        const res = saxonSoldier.receiveDamage(vikingHero.strength)
        
        if(saxonSoldier.health <= 0){
            this.saxonArmy.splice(randomSaxon, 1)
            return res
        }
        
        // this.saxonArmy.forEach((e, i) => {
        //     if(e.health <= 0) {
        //         this.saxonArmy.splice(i,1)
        //         return "A Saxon has died in combat"
        //     }
        // })

    }
    saxonAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

        const saxonSoldier = this.saxonArmy[randomSaxon]
        const vikingHero = this.vikingArmy[randomViking]

        const res = vikingHero.receiveDamage(saxonSoldier.strength)

        if(vikingHero.health <= 0){
            this.vikingArmy.splice(randomViking, 1)
        }
        return res
    }

    showStatus(){
        if(this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
            }
        else if(this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
            }
        else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
