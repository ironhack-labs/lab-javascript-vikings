// Soldier
class Soldier {
constructor(health, strength){
this.health = health
this.strength = strength
}
 attack = () => {
    return this.strength
}
receiveDamage = (damage) => {
    this.health= this.health - damage
}
}
// Viking
class Viking extends Soldier {
constructor(name, health, strength){
super(health, strength)
this.name = name
}
attack = () => {
    return this.strength
}
receiveDamage = (damage) => {
    this.damage= damage
    this.health= this.health - damage
 if (this.health > 0)
 return `${this.name} has received ${this.damage} points of damage`
 else return `${this.name} has died in act of combat`
}
battleCry = () => {
    this.battleCry = this.battleCry
    return "Odin Owns You All!"
}
}

// Saxon
class Saxon extends Soldier {
    attack = () => {
        return this.strength
    }
    receiveDamage = (damage) => {
        this.damage = damage
        this.health= this.health - damage
        if (this.health > 0)
        return `A Saxon has received ${this.damage} points of damage`
        else return `A Saxon has died in combat`

    }  
}

// War
class  War {
    constructor(){ 
    this.vikingArmy = [];
     this.saxonArmy = [];
    }
     addViking = (Viking) => {
       this.vikingArmy.push(Viking);
     }
     addSaxon = (Saxon) => {
         this.saxonArmy.push(Saxon)
     }
    
     vikingAttack = () => {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] 
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxonIndex = this.saxonArmy.indexOf(saxon)
        if (saxon.health - viking.strength <= 0)
        this.saxonArmy.splice(saxonIndex, 1)
        return saxon.receiveDamage(viking.strength)
     }
     saxonAttack = () => {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] 
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let vikingIndex = this.saxonArmy.indexOf(saxon)
        if (viking.health - saxon.strength <= 0)
        this.vikingArmy.splice(vikingIndex, 1)
        return viking.receiveDamage(saxon.strength)
     }
}
