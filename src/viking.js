// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health
        this.strength=strength
    }
    attack(){return this.strength}
    receiveDamage(damage){this.health-=damage}
}//end soldier

// Viking
class Viking extends Soldier{
    constructor(name, health,strength){
        super(health,strength)
        this.name=name
    }
    receiveDamage(damage){
        this.health-=damage
        return (this.health>0)? `${this.name} has received ${damage} points of damage`:`${this.name} has died in act of combat`
    }//end receiveDamage method
    battleCry(){
        return "Odin Owns You All!"
    }//end battleCry method

}//end viking


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health-=damage
        return (this.health>0)? `A Saxon has received ${damage} points of damage`:`A Saxon has died in combat`
    }
}//end Saxon class


// War
class War {
    saxonArmy=[];
    vikingArmy=[];
    addViking(viking){this.vikingArmy.push(viking)}
    addSaxon(saxon){this.saxonArmy.push(saxon)}
    vikingAttack(){
        //stored in a vaiable because battlefield needs to be cleared before returning the message
        let temp=this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        if(this.saxonArmy[0].health<=0){this.saxonArmy.splice(0,1)}
        return temp
    }
    saxonAttack(){
        //stored in a vaiable because battlefield needs to be cleared before returning the message
        let temp=this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
        if(this.vikingArmy[0].health<=0){this.vikingArmy.splice(0,1)}
        return temp
    }
    showStatus(){
        if(this.saxonArmy.length<1)
            return "Vikings have won the war of the century!"
        if(this.vikingArmy.length<1)
            return "Saxons have fought for their lives and survived another day..."
        return "Vikings and Saxons are still in the thick of battle."}
    }

}//end war class
