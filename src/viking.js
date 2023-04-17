// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    };
    receiveDamage(theDamage){
        this.health = this.health - theDamage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength,){
        super(health, strength);
        this.name = name;
    };
    receiveDamage(theDamage){
        this.health = this.health - theDamage
        if (this.health <= 0){
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${theDamage} points of damage`  
    };
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength, receiveDamage){
        super(health, strength);   
    };
    receiveDamage(theDamage){
        this.health -= theDamage
        if (this.health <= 0){
            return "A Saxon has died in combat"
        }else if (this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`
        }
       
    }
}
// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
    this.vikingArmy.push(viking)
    };
    addSaxon(saxon){
    this.saxonArmy.push(saxon)
    };
    vikingAttack(){
        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length)

        randomSaxon.receiveDamage(randomViking.attack())
    }
    

}
 
