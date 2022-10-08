// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength; 
    }
            attack(){
                return this.strength 
            }
            receiveDamage(damage){
                this.health = this.health - damage
            }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
            receiveDamage(damage){
                this.health -= damage
                if(this.health > 0){
                    return(`${this.name} has received ${damage} points of damage`)
                }      
                else if(this.health <= 0){
                    return(`${this.name} has died in act of combat`)
                }
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
                if(this.health > 0){
                    return(`A Saxon has received ${damage} points of damage`)
                }
                else if(this.health <= 0){
                    return(`A Saxon has died in combat`)
                }
            }
            battleCry(){
                return "Odin Owns You All!"
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
                let newVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
                let newSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
                let result = newSax.receiveDamage(newVik.attack())
                if(newSax.health <= 0){
                    this.saxonArmy.pop(newSax);
                }
                return result
            }
            saxonAttack(){
                let newViki = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
                let newSaxi = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
                let result = newViki.receiveDamage(newSaxi.attack())
                if(newViki.health <= 0){
                    this.vikingArmy.pop(newViki);
                }
                return result
            }
            showStatus(){ 
                if(!this.saxonArmy.length){
                    return ("Vikings have won the war of the century!")
                }
                else if(!this.vikingArmy.length){
                    return ("Saxons have fought for their lives and survived another day...")
                }
                else if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
                    return ("Vikings and Saxons are still in the thick of battle.")
                }
            }    
}
