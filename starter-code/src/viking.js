// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    attack(){
        return super.attack()
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health <= 0){
            return this.name+" has died in act of combat"
        }
        return this.name+" has received "+damage+" points of damage"
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
    attack(){
        return super.attack()
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health <= 0){
            return "A Saxon has died in combat"
        }
        return "A Saxon has received "+damage+" points of damage"
    }
}

// War
class War {
    constructor(){
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
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        var result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        for(var i=0; i<this.saxonArmy.length; i++){
            if(this.saxonArmy[i].health<=0){
                this.saxonArmy.splice(i,1)
            }
        }
        return result
    }
    saxonAttack(){
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        var result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        for(var i=0; i<this.vikingArmy.length; i++){
            if(this.vikingArmy[i].health<=0){
                this.vikingArmy.splice(i,1)
            }
        }
        return result
    }
    showStatus(){
        if (this.saxonArmy.length === 0) 
            return "Vikings have won the war of the century!"
        else if (this.vikingArmy.length === 0) 
            return "Saxons have fought for their lives and survive another day..."
        else return "Vikings and Saxons are still in the thick of battle."
    }

}
