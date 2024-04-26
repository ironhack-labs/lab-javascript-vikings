const damage = 30
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

const aSoldier = new Soldier(100,50)

// Viking
class Viking extends Soldier{
     constructor(name,health,strength){
        super(health,strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
 
}


// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return `A Saxon has died in combat`
        }
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
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
         if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxon)
        } 
        return randomSaxon.receiveDamage(randomViking.strength) 
    }
    saxonAttack(){
        let randomVikingIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[randomVikingIndex];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
         if(randomViking.health <= 0){
            this.vikingArmy.splice(randomViking)
        } 
        return randomViking.receiveDamage(randomSaxon.strength)
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
            return "Vikings and Saxons are still in the thick of battle."
        }  
    }
}
const newWar = new War();
let  aViking1 = new Viking('jim', 50, 100)
let aViking2 = new Viking('kay', 30, 80)
newWar.addViking(aViking1)
newWar.addViking(aViking2)
let aSaxon1 = new Saxon(70, 90)
let aSaxon2 = new Saxon(40,90)
let aSaxon3 = new Saxon(20,100)
newWar.addSaxon(aSaxon1)
newWar.addSaxon(aSaxon2)
newWar.addSaxon(aSaxon3)
console.log(newWar.vikingArmy)
console.log(newWar.saxonArmy)
console.log(newWar.vikingAttack())
console.log(newWar.saxonArmy)


