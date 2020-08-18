// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage){
        this.health -= theDamage; 
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    battleCry(){
        return `Odin Owns You All!`;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
    }
}

 //Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health){
            return `A Saxon has received ${theDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [],
        this.saxonArmy = []
    }
        addViking(viking){
            this.vikingArmy.push(viking)
        }
        addSaxon(saxon){
            this.saxonArmy.push(saxon)
        }
        vikingAttack(){
            let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
            let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
            this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)       
            //console.log(this.saxonArmy[randomSaxon].receiveDamage())
            if (this.saxonArmy[randomSaxon].health <= 0){
            this.saxonArmy.length -= 1
            } else this.saxonArmy[randomSaxon].receiveDamage()
        }
        saxonAttack(){
            let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
            let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
            this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
            if (this.vikingArmy[randomViking].health <= 0){
                this.vikingArmy.length -= 1
            } 
        }
        showStatus(){
            if (this.vikingArmy.length > this.saxonArmy.length){
                return "Vikings have won the war of the century!"
            } else if (this.vikingArmy.length < this.saxonArmy.length){
                return "Saxons have fought for their lives and survived another day..."
            } else 
            return "Vikings and Saxons are still in the thick of battle."
        }
}
