// Soldier
class Soldier {
    
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage (damage) {
        this.health -= damage
    }
    
}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    attack () {
        return this.strength
    }
    
    receiveDamage (damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
}

battleCry () {
    return `Odin Owns You All!`
}
}

// Saxon
class Saxon extends Soldier{

    attack () {
        return this.strength
    }

    receiveDamage (damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    
    constructor () {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking (Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
     let randomSaxIn = Math.floor(Math.random()*this.saxonArmy.length)
     let randomVikIn = Math.floor(Math.random()*this.vikingArmy.length)
     let randomSax = this.saxonArmy[randomSaxIn]
     let randomVik = this.vikingArmy[randomVikIn]
     //update saxon 
     let saxDam = randomSax.receiveDamage(randomVik.strength);
     if (randomSax.health <= 0) {
         this.saxonArmy.splice(randomSax,1)
     }
     return saxDam;
    }

    saxonAttack(){
        let randomSaxIn = Math.floor(Math.random()*this.saxonArmy.length)
        let randomVikIn = Math.floor(Math.random()*this.vikingArmy.length)
        let randomSax = this.saxonArmy[randomSaxIn]
        let randomVik = this.vikingArmy[randomVikIn]
        //update saxon 
        let vikDam = randomVik.receiveDamage(randomSax.strength);
        if (randomVik.health <= 0) {
            this.vikingArmy.splice(randomVik,1)
        }
        return vikDam;
       }

       showStatus() {
        if (this.saxonArmy <= 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy <= 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}

