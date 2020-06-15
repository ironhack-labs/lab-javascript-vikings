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
class War {}//end war class
