// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }


}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage; 
        if(this.health>damage){
            return this.name + " has received " + damage + " points of damage"
        }else if(this.health<=damage){
            return this.name + " has died in act of combat"
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
    attack(){
        return this.strength;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        var result;
        if(this.health>damage){
            result = "A Saxon has received " + damage + " points of damage"
        }else if(this.health<=damage){
            result = "A Saxon has died in combat"
        }
        this.health = this.health - damage; 
        return result;
    }
}

class War{
    constructor(){
        vikingArmy = new Viking()
    }
    
}