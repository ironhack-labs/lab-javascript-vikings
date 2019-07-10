// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength
    }
    receiveDamage(damage){
this.health = this.health - damage

    }
}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
        
    attack(){
        return this.strength
    }
    receiveDamage(damage){
this.health = this.health - damage
if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`
}
    if (this.health <= 0) {
        return `${this.name} has died in act of combat` 
}
    }  
    battleCry(){
        return `Odin Owns You All!`
    }
}
let viking1 = new Viking("Harald", 300, 150);
   
// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
this.health = this.health - damage
if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`
}
    if (this.health <= 0) {
        return "A Saxon has died in combat"
}
    }  
   
}

// War
class War {
    constructor(){
 this.vikingArmy = []
 this.saxonArmy = []
    }

    
addViking(viking) {
this.vikingArmy.push(viking)
    }

addSaxon(saxon){
this.saxonArmy.push(saxon)
}


vikingAttack(){
let strongViking = Math.floor(Math.random() * this.vikingArmy.length)
let weakSaxon = Math.floor(Math.random() * this.saxonArmy.length)
let result = [weakSaxon].receiveDamage([strongViking].strength)
for (let i = 0; i <= this.saxonArmy.length; i++)
if (this.saxonArmy[i].health <= 0) {
    this.saxonArmy -= this.saxonArmy[i]
}

return result
} // nothing is working here. Why???
saxonAttack(){
    Viking.receiveDamage(Saxon.strength)
}

showStatus(){
if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
  {return "Vikings have won the war of the century!"}
} 
if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0){
    {return "Saxons have fought for their lives and survive another day..."}
    }
    else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
    {return "Vikings and Saxons are still in the thick of battle."} //this one is working but the other ones (with ===) are not. Why???
} 
else {return "All dead now. End of stupid war forever."}
}
}
