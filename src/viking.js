// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    }

    attack = ()=>{
        return this.strength
    }

    receiveDamage = (damage)=>{
        this.health = (this.health - damage)

    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }
    battleCry = ()=>{
        return `Odin Owns You All!`
        
    }
    receiveDamage = (damage)=>{
        this.health = (this.health - damage);
        let dead = 0

        if(this.health === dead){
            return `${this.name} has died in act of combat`
        }else {
            return `${this.name} has received ${this.damage} points of damage`
        }
    }

}

// Saxon
class Saxon {}

// War
class War {}
