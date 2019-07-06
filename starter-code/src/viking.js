// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 300
        this.strength = 150
    }
    //attack() method
    attack(){
        return this.strength
    }
    // receiveDamage() method
    receiveDamage(damage){
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = "Harald"
        this.health = 300
        this.strength = 150
    }
    //attack() method
    attack(){
        return this.strength
    }
    // receiveDamage() method
    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0)
          return `${this.name} has received ${damage} points of damage`
        else
          return `${this.name} has died in act of combat`
    }
    // battleCry() method
    battleCry(){
        return ("Odin Owns You All!")
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
        this.health = 60
        this.strength = 25
    } 
     //attack() method
     attack(){
        return this.strength
     }
    // receiveDamage() method
    receiveDamage(damage){
        this.health = this.health  -  damage
        if (this.health > 0)
          return (`A Saxon has received ${damage} points of damage`)
        else
          return (`A Saxon has died in combat`)
    
    }
}

// War
// class War {
//     constructor(){
//       this.vikingArmy = []
//       this.saxonArmy = []
//     }

//     addViking(viking){
//         this.vikingArmy.push(viking)
//     }

//     addSaxon(saxon)
//     vikingAttack()
//     saxonAttack()
//     showStatus()
// }


