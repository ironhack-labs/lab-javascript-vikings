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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        if(damage < this.health){
            this.health -= damage;
            return `${this.name} has received ${damage} points of damage`
        }   
        else if(damage >= this.health){
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
        this.health = health;
        this. strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        if(damage <this.health){
            this.health -= damage;
            return `A Saxon has received ${damage} points of damage`
        }   
        else if(damage >= this.health){
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    addViking(){

    }
    addSaxon(){

    }
    vikingAttack(){

    }
    saxonAttack(){

    }
    showStatus(){

}
}
