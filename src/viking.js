// Soldier
class Soldier {
    constructor(health, strength){
        this health = health;
        this strength = strength;
    }
    attack(){
        return this.strength;
    }
    recieveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super (health, strength)
        this.name = name
    }
    attack(){
        return this.strength;
    }
    recieveDamage(damage){
        this.health -= damage;
        if (this.health > 0 ){
            return (${this.name} has received ${damage} points of damage)
        }else {
            return (${this.name} has died in act of combat)
        }
    }
    battlecry(){
        return console.log ('Odin Owns You All!')
    }
}

// Saxon
class Saxon extends Soldier{
    attack(){
        return this.strength;
    }
    recieveDamage(damage){
        this.health -= damage;
        if (this.health > 0 ){
            return (${this.name} has received ${damage} points of damage)
        }else {
            return (${this.name} has died in combat)
        }
    }
}

// War
class War {}
