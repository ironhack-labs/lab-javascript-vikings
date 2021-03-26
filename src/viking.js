// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength =  strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        let currentHealth = this.health - damage;
    }
}



// Viking
class Viking extends Soldier {
    constructor(health, strength, name){
    super (health, strength)
        this.name= name;
    }
    receiveDamage(damage){
        let currentHealthViking = this.health - damage;
        if (currentHealthViking > 0){return `${this.name} has received ${this.damage} points of damage`}
        else if (currentHealthViking <= 0){return `${this.name} has died in act of combat`}

    }
    battleCry() {
        return "Odin Owns You All!"

    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        let currentHealthSaxon = this.health - damage;
        if (currentHealthSaxon > 0){return `A Saxon has received ${this.damage} points of damage`}
        else if (currentHealthSaxon <= 0){return `A Saxon has died in act of combat`}

    }
    battleCry() {
        return "Odin Owns You All!"

    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];

    }

    addViking(viking){
        this.vikingArmy.push(viking);

    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);

    }
    vikingAttack(){
        

        
        // Saxon.receiveDamage(damage) {Saxon.health - Viking.strength};
        // if (Saxon.health < 0){this.saxonArmy.pop}

    }
    saxonAttack(){
        
        // Saxon.receiveDamage(damage) {Viking.health - Saxon.strength};
        // if (Viking.health < 0){this.saxonArmy.pop}

    }
    showStatus(){

    }
}
