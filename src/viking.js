// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(vikingName, health, strength,) {
        super()
        this.name = vikingName;
        this.health = health;
        this.strength = strength;
    }
    battleCry() {
        return "Odin Owns You All!"

    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return  `${this.name} has received ${damage} points of damage`
        } else{ return `${this.name} has died in act of combat` }
}
}

// Saxon
class Saxon extends Soldier{ 
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0) {
            return  `A Saxon has received ${damage} points of damage`
        } else{ return `A Saxon has died in combat` }

    }
}


// War
class War {constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
}
    
    addViking(Viking){
        this.vikingArmy.push(Viking)

        
    }
    addSaxon(Saxon){ 
        this.saxonArmy.push(Saxon)
        
    }
    vikingAttack(){
        console.log(this.vikingArmy[0].strength)
        // Saxon.receiveDamage(this.vikingArmy[0].strength)

    }
    saxonAttack(){

    }
    showStatus(){

    }
   




 }
