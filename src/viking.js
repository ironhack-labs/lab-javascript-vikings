// Soldier
class Soldier {
    constructor(health, strength){
        this.health= health;
        this.strength = strength;
    }
    attack() {
    return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking 
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength) 
            this.name = name;
    }
attack(){
    return this.strength;
}
receiveDamage(damage){
    this.health -= damage;
    if (this.health > damage) {
        return `${this.name} has received ${damage} points of damage`;
    } else {
       return `${this.name} has died in act of combat`;}
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if ( this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
    }

// War
class War {
   constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
   }
   addViking(axe) {
    this.vikingArmy.push(axe);
   }
   addSaxon(key){
    this.saxonArmy.push(key);
   }
   vikingAttack() {
    let random = Math.random().Viking;
   }
}
