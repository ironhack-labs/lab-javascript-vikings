// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

//const user1 = new Soldier(50,60);
//console.log(user1);

attack(){
    return this.strength
}

receiveDamage(theDamage){
    this.health = this.health - theDamage;
}


}


// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength);       
        this.name = name;
    }   
    receiveDamage(theDamage){
        this.health = this.health - theDamage;
        if(this.health>0){
            return this.name + " has received " + theDamage + " points of damage"}
        else {return this.name + " has died in act of combat"}
    }    

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage){
        this.health = this.health - theDamage;
        if(this.health>0){
            return "A Saxon has received "  + theDamage + " points of damage"}
        else {
            return "A Saxon has died in combat"}
    }    

}

// War
class War {
    constructor(){
        this.vikingArmy= [];
        this.saxonArmy= [];
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        
        saxon.health = viking.strength
    }
}




