// Soldier
class Soldier {
    constructor(health , strength){
        this.health = health
        this.strength = strength
    }
  attack(){
    return this.strength
  }  
  receiveDamage(damage){
     this.health  = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
    constructor(name , health , strength){
        super(health , strength)
        this.name = name
    }
  
    receiveDamage(damage){
        this.health = this.health - damage
       
        if(this.health > 0){
         return `${this.name} has received ${damage} points of damage`
        }
       else{
            return `${this.name} has died in act of combat`
        }

    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    
        vikingArmy = []
        saxonArmy = []
    

    addViking(Viking){
        this.vikingArmy.unshift(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.unshift(Saxon)
    }

    vikingAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        
        let battle = randomSaxon.receiveDamage(randomViking.strength)

        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy[randomSaxon])
        }
        return battle

    }

    saxonAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        let battle = randomViking.receiveDamage(randomSaxon.strength)

        if(randomViking.health <= 0){
            this.vikingArmy.splice(this.vikingArmy[randomViking])
        }
        return battle

    }

    showStatus(){
        if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }
        if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }



}
