// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health,
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
    constructor(name, health, strength){
        super(health, strength);
        this.name=name
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health>0){
        return `${this.name} has received ${damage} points of damage`
        }else {return `${this.name} has died in act of combat`}
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health>0){
            return `A Saxon has received ${damage} points of damage`
            }else {return 'A Saxon has died in combat'}
    }
}
/*
// War
class War {
    vikingArmy=[];
    saxonArmy=[]
        
    addViking(Viking){
        this.vikingArmy.push(new Viking(Example, Math.floor(Math.random()*5+15), Math.floor(Math.random()*5+3)))
    }
    
    addSaxon(Saxon){
        this.saxonArmy.push(new Saxon(Math.floor(Math.random()*5+15), Math.floor(Math.random()*5+3)))
    }
    vikingAttack(){
        randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        attackResult = randomSaxon.receiveDamage(randomViking.strength)
        
        for(Saxon of this.saxonArmy){
            if(Saxon.health===0){
                delete this.saxonArmy[indexOf(Saxon)]
            }
        }
        return attackResult
    }
    saxonAttack(){
        randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        attackResult = randomViking.receiveDamage(randomSaxon.strength)
        for(Viking of vikingArmy){
            if(viking.health===0){
                delete vikingArmy[indexOf(Viking)]
            }
        }
        return attackResult
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return console.log("Vikings have won the war of the century!")
        }else if (this.vikingArmy.length === 0){
            return console.log("Saxons have fought for their lives and survived another day...")
        }else if(this.vikingArmy.length&&this.saxonArmy.length != 0){
            return console.log("Vikings and Saxons are still in the thick of battle.")
        }
    }
}
war.showStatus()*/
