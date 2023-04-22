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
        if (damage<this.health){
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

// War
class War {
    vikingArmy=[];
    saxonArmy=[]
        
    addViking(viking){
        new Viking("Example", Math.floor(Math.random()*5+15), Math.floor(Math.random()*5+3))
        this.vikingArmy.push(viking)
    }
    
    addSaxon(saxon){
        new Saxon(Math.floor(Math.random()*5+15), Math.floor(Math.random()*5+3))
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let attacker= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let target = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let fight = target.receiveDamage(attacker.attack())
        if (attacker.strength>target.health){
            this.saxonArmy.splice(this.saxonArmy[target])
        }
        return fight
    }
    saxonAttack(){
        let attacker= this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let target = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let fight = target.receiveDamage(attacker.attack())
        if (attacker.strength>target.health){
            this.vikingArmy.splice(this.vikingArmy[target])
        }
        return fight
    }
    showStatus(){
        let status
        if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
            status = "Vikings and Saxons are still in the thick of battle."
        }else if(this.vikingArmy.length>0 && this.saxonArmy.length===0){
            status = "Vikings have won the war of the century!"
        }else if (this.saxonArmy.length>0 && this.vikingArmy.length===0){
            status = "Saxons have fought for their lives and survived another day..."
        }
        return status        
    }
}