// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        }
        if (this.health === 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`
        }
        if (this.health === 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy =[];
    saxonArmy = [];
    
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        const numberOfVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const numberOfSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const numberViking = this.vikingArmy[numberOfVikingIndex];
        const numberSaxon = this.saxonArmy[numberOfSaxonIndex];

        let damage = numberViking.strength;

        const result = numberSaxon.receiveDamage(damage)
        
        if (numberSaxon.health <= 0) {
            this.saxonArmy.splice(numberOfSaxonIndex, 1)
        }
        return result
    }
    saxonAttack(){
        const numberOfVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const numberOfSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const numberViking = this.vikingArmy[numberOfVikingIndex];
        const numberSaxon = this.saxonArmy[numberOfSaxonIndex];

        let damage = numberSaxon.strength;

        const result = numberViking.receiveDamage(damage)
        
        if (numberViking.health <= 0) {
            this.vikingArmy.splice(numberOfVikingIndex, 1)
        }
        return result
    }
    showStatus(){
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
            return "Vikings and Saxons are still in the thick of battle."
        }
        else if (this.vikingArmy.length >= 1) {
            return "Vikings have won the war of the century!"
        }
        else {
            return "Saxons have fought for their lives and survived another day..."
        }
    }
}
