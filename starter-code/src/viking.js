// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength= strength;
    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }
}


// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage){
        if (this.health){
            
        }
    return `${this.name} has received ${this.damage} points of damage`;
    return `${this.name} has died in act of combat`;
        
    }
    
}

// Saxon
class Saxon {

}

// War
class War {}
