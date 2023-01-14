// Soldier
class Soldier {
    constructor(health, strength){
this.health = health
this.strength = strength
    }
attack(){
return (this.strength)
}

receiveDamage(theDamage){
this.health -= theDamage
}
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
    super(health, strength)
    this.name = name
    }


    receiveDamage(theDamage){
    this.health -= theDamage

    if (this.health === 0){
        return (`${this.name} has died in act of combat`)
    }

    else {
        return (`${this.name} has received ${theDamage} points of damage` )
    }
    
    }
    battleCry(){
        return ("Odin Owns You All!")    
    }
    }


// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
    super(health, strength)

    }

    receiveDamage(theDamage){
     this.health -= theDamage   

     if(this.health === 0){
        return "A Saxon has died in combat"
     }

     else{
        return `A Saxon has received ${theDamage} points of damage`
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
        this.viking = viking
        vikingArmy.push(this.viking)
    }
    addSaxon(saxon){
        this.saxon = saxon
    }
    vikingAttack(){

    }
    saxonAttack(){

    }
    showStatus(){

    }

}
