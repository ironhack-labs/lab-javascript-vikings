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
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxon = saxon
        this.saxonArmy.push(saxon)
    }
    
    vikingAttack(){
        this.saxon.receiveDamage = Viking (this.strength)
        if (Saxon.health === 0){
            this.saxonArmy.pop(saxon)
        }
        return receiveDamage[Math.floor(Math.random()* array.length )]
        }
       

        saxonAttack(){
            if (Saxon.heatlh === 0){
                this.vikingArmy.pop(viking)
            }
    
    }
    showStatus(){
    if (this.saxonArmy === []){
        return "Vikings have won the war of the centyry!"
    } else if (this.vikingArmy === []){
        return "Saxos have fought for their lives and survived another day"
    }else {
        "Vikings and Saxons are still in the thick of battle"
    }

    }

    }

  

