// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health,
        this.strength=strength
    }
};
Soldier.prototype.attack = function(){
    return this.strength
};
Soldier.prototype.receiveDamage = function(theDamage){
    this.health-=theDamage
};



// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name=name
    }
    receiveDamage(theDamage){
        this.health-=theDamage
        if (this.health===0){
            return `${this.name} has died in act of combat`}
        else return `${this.name} has received ${theDamage} points of damage`
    }
}
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}



// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
    super( health,strength)   
    }
    receiveDamage(theDamage){
        this.health-=theDamage
        if (this.health===0){
            return `A Saxon has died in combat`}
        else return `A Saxon has received ${theDamage} points of damage`
    }
   
}

// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let randNum=Math.floor(Math.random()*this.saxonArmy.length)

        let randomViking= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let randomSaxon= this.saxonArmy[randNum]

    
        randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health<=0){
            this.saxonArmy.splice(randNum,1)
            return "A Saxon has died in combat"
        
        }


    }
    saxonAttack(){
        let randNum=Math.floor(Math.random()*this.vikingArmy.length)

        let randomSaxon= this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let randomViking= this.vikingArmy[randNum]

    
        randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health<=0){
            this.vikingArmy.splice(randNum,1)
        }
        return `${randomViking.name} has received ${randomSaxon.strength} points of damage`
    }
    showStatus(){
        if (this.vikingArmy.length ===0 ){
            return "Saxons have fought for their lives and survived another day..."

        }

        if (this.saxonArmy.length ===0 ){
            return "Vikings have won the war of the century!"
        
        }
        return "Vikings and Saxons are still in the thick of battle."

    }




    

}








