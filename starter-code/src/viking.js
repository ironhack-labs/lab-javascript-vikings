// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health
        this.strength=strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-=damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health, strength ){
    super(health, strength)
    this.name=name
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health <=0){
            return  `${this.name} has died in act of combat`
        }else{
            return `${this.name} has received ${damage} points of damage`
        }     

    }
    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
constructor(health, strength){
    super(health, strength)
}
receiveDamage(damage){
    this.health -= damage
    if(this.health <=0){
        return  `A Saxon has died in combat`
    }else{
        return `A Saxon has received ${damage} points of damage`
    }     

}


}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    
    addViking(viking){
        this.vikingArmy.push(viking)
        return undefined
    }
    addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
    return undefined
    }

    vikingAttack(){
        let sax1= Math.floor(Math.random()*this.saxonArmy.length)
        let vik1= Math.floor(Math.random()*this.vikingArmy.length)
        let randomSax1 = this.saxonArmy[sax1]
        let randomVik1 = this.vikingArmy[vik1]
        let remainingHealth = randomSax1.receiveDamage(randomVik1.strength)
        if(randomSax1.health<=0){this.saxonArmy.splice(sax1,1)}
        return remainingHealth
    }

    saxonAttack(){
        let sax1= Math.floor(Math.random()*this.saxonArmy.length)
        let vik1= Math.floor(Math.random()*this.vikingArmy.length)
        let randomSax1 = this.saxonArmy[sax1]
        let randomVik1 = this.vikingArmy[vik1]
        let remainingHealth = randomVik1.receiveDamage(randomSax1.strength)
        if(randomVik1.health<=0){this.vikingArmy.splice(vik1,1)}
        return remainingHealth


    }
    showStatus(){
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day..."
        } else { 
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
