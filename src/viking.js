// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }
    attack() { return this.strength; }
    receiveDamage(damage){ this.health -= damage; }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health <= 0)
            return `${this.name} has died in act of combat`;
        return `${this.name} has received ${damage} points of damage`;
    }
    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health <= 0)
            return `A Saxon has died in combat`;
        return `A Saxon has received ${damage} points of damage`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){this.vikingArmy.push(viking);}
    addSaxon(saxon){this.saxonArmy.push(saxon);}
    vikingAttack(){
        const randomViking = this.generateRandomViking()[0];

        const randomSaxon = this.generateRandomSaxon()[0];

        const damage = randomViking.strength;

        const result = randomSaxon.receiveDamage(damage);

        if(randomSaxon.health <= 0)
            this.saxonArmy.splice(this.generateRandomSaxon[1],1);

        return result;
    }
    saxonAttack(){
        const randomViking = this.generateRandomViking()[0];
        const randomSaxon = this.generateRandomSaxon()[0];

        const damage = randomSaxon.strength;

        const result = randomViking.receiveDamage(damage);

        if(randomViking.health <= 0)
            this.vikingArmy.splice(this.generateRandomViking()[1],1);
        
        return result;
    }
    showStatus(){
        if(this.vikingArmy.length === 0)
            return `Saxons have fought for their lives and survived another day...`;
        if(this.saxonArmy.length === 0)
            return `Vikings have won the war of the century!`;
        return `Vikings and Saxons are still in the thick of battle.`;
    }

    // return the random values and the indexs as Array
    generateRandomViking(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        return [this.vikingArmy[randomVikingIndex] , randomVikingIndex];
    }
    generateRandomSaxon(){
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        return [this.saxonArmy[randomSaxonIndex] , randomSaxonIndex];
    }
    
}
