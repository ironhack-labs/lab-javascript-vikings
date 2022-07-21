// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        console.log(this.health)
    }        
    
}


// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        this.name = name;
        super(health, strength)
    }
    receiveDamage(damage){
        this.health - damage;
        if (this.health > 0){
            console.log(this.health)
            return `${this.name} has received ${damage} points of damage `;
        }
        else {
            return `${this.name} has died in combat`
        }
    battleCry(){
        return 'Odin Owns You All'
    }
     }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage(damange){
        this.health - damage;
        if (this.health > 0){
            console.log(this.health)
            return `A Saxon has received ${damange} point of damage `
        }
        else 
            return `A Saxon has died in combat`
    }
}

// War
class War {}
