// Soldier
class Soldier {
    constructor(health, strength){
        this.health= health;
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
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
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
    
    addViking(viking){
    this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        const idViking = Math.floor(Math.random()* this.vikingArmy.length);
        const idSaxon = Math.floor(Math.random()* this.saxonArmy.length);

        const saxonRandom = this.saxonArmy[idSaxon];
        const vikingRandom = this.vikingArmy[idViking];

        const finalResult = saxonRandom.receiveDamage(vikingRandom.strength)
        if(saxonRandom.health < 0){
            this.saxonArmy.splice(idSaxon, 1);
        }
        return finalResult;
    }

    saxonAttack(){}
    
    showStatus(){}
}
