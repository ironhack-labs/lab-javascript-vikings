// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damange){
        this.health -= damange
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }

    receiveDamage(damange){
        this.health -= damange
        if(this.health > 0){
            return `${this.name} has received ${damange} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }

       
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damange){ 
        this.health -= damange
    if(this.health > 0){
        return `A Saxon has received ${damange} points of damage`
    }else{
        return `A Saxon has died in combat`
    }
}
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking){
        let vikingo1 = this.vikingArmy.push(Viking);
        

    }
    addSaxon(Saxon){
        let armaRecibida = this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        

        if(saxon.health <= vik.strength){
            this.saxonArmy.pop(vik)
        }

        return saxon.receiveDamage(vik.strength)
    }
    saxonAttack(){
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        

        if(vik.health <= saxon.strength){
            this.vikingArmy.pop(vik)
        }

        return vik.receiveDamage(saxon.strength)
    }
    showStatus(){
        if(this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!"
        }else if (this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survived another day..."
        }else if (this.saxonArmy.length === this.vikingArmy.length){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
    
}
