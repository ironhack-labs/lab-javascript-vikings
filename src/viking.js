// Soldier
class Soldier {
    constructor(health, strength){

        this.health = health;
        this.strength = strength;
    }

    attack() {

    return this.strength

    }

    receiveDamage(damage){

        this.damage = damage
        this.health -= this.damage
        
    }
}

// Viking
class Viking  extends Soldier {
    constructor(name, health, strength) {
       super(health, strength); 

       this.name = name
    }

    receiveDamage(damage){

        this.damage = damage
        this.health -= this.damage

    if(this.health > 0) return `${this.name} has received ${this.damage} points of damage`
    return `${this.name} has died in act of combat`
    } 

    battleCry (){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength); 
 }
    receiveDamage(damage){

        this.damage = damage
        this.health -= this.damage

        if(this.health > 0) return `A Saxon has received ${this.damage} points of damage`
        return `A Saxon has died in combat`
    } 
}

// War
class War {
    constructor(){
    
    this.vikingArmy = []
    this.saxonArmy =[] 
}
    
     
    
    addViking (viking){

        this.vikingArmy.push (viking);

    }

    addSaxon(saxon){
        
        this.saxonArmy.push (saxon);
    }

    vikingAttack(){
        
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

        let lutadorSaxon = this.saxonArmy[saxonIndex]
        let lutadorViking = this.vikingArmy[vikingIndex]

        
        let resultado = lutadorSaxon.receiveDamage(lutadorViking.strength)

        if(lutadorSaxon.health <= 0){
            this.saxonArmy.splice(saxonIndex, 1)
        }
        return resultado
    }

    saxonAttack (){

        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

        let lutadorSaxon = this.saxonArmy[saxonIndex]
        let lutadorViking = this.vikingArmy[vikingIndex]

        
        let resultado = lutadorViking.receiveDamage(lutadorSaxon.strength)

        if(lutadorViking.health <= 0){
            this.vikingArmy.splice(vikingIndex, 1)
        }
        return resultado

    }

    showStatus(){
        
        if(!this.saxonArmy.length) return "Vikings have won the war of the century!"
        if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."

    return "Vikings and Saxons are still in the thick of battle."
    }
}
