// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength 
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}


// Viking
class Viking extends Soldier {  
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);      
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return 'A Saxon has died in combat'
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(oneViking) {
        this.vikingArmy.push(oneViking);
    }
    addSaxon(oneSaxon) {
        this.saxonArmy.push(oneSaxon);
    }
    vikingAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        const vikingStrength = randomViking.strength
        return randomSaxon.receiveDamage(vikingStrength)

        // should make Saxon receiveDamage() equal to the strength of a Viking
        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
    }
    saxonAttack() {
        // should make a Viking receiveDamage() equal to the strength of a Saxon
        // should return result of calling receiveDamage() of a Viking with the strength of a Saxon
    }
    showStatus(){
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        }
        
        // should return "Vikings have won the war of the century!", if the Saxons array is empty
        // should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty
        // should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons
    }


   

}
