// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health,
        this.strength = strength
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health- damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name = name
    }
    receiveDamage(damage){
        this.health = this.health- damage;
        if(this.health > 0 )return `${this.name} has received ${damage} points of damage`
        else return `${this.name} has died in act of combat`
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    //super(health, strength)
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0 )return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`
    }
    
}

// War
class War {
    constructor(){
        this.vikingArmy = [],
        this.saxonArmy = []
    }
    addViking(viking){
        
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let saxonDamageReceive = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].attack());
        if(saxonDamageReceive.includes('died')) this.saxonArmy.splice(saxonIndex,1)
        return saxonDamageReceive
    }
    saxonAttack(){
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let vikingDamageReceive = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].attack());
        if(vikingDamageReceive.includes('died')) this.vikingArmy.splice(vikingIndex,1)
        return vikingDamageReceive
    }
    showStatus(){
        if(this.saxonArmy == 0)return 'Vikings have won the war of the century!'
        else if(this.vikingArmy == 0)return 'Saxons have fought for their lives and survived another day...'
        else return 'Vikings and Saxons are still in the thick of battle.'
    }
}
