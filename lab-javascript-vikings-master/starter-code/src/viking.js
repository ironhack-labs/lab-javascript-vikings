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
        this.health = this.health - damage;
        // this.health -= damage (same thing)
    }  

}
    // can place functions out side the constructor
    // Soilder.prototype.attack = function(){return this.strength;}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health == 0) {
            return(`${this.name} has died in act of combat`);
        } else {
            return(`${this.name} has received ${damage} points of damage`);
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
        //Pointless, just dont define the method because it comes from parent class
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health == 0) {
            return "A Saxon has died in combat";
        } else {
            return `A Saxon has received ${damage} points of damage`;
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
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxon];
        let randomViking = this.vikingArmy[randomViking];

        let theAmount = randomViking.attack();
        let result = randomSaxon.receiveDamage(theAmount)

        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxonIndex, 1)
        } else {
            return result;
        }
    }
    saxonAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxon];
        let randomViking = this.vikingArmy[randomViking];

        let theAmount = randomSaxon.attack();
        let result = randomViking.receiveDamage(theAmount)

        if (randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingIndex, 1)
        } else {
            return result;
    }
    showStatus(){
if (this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!""
}
if(this.vikingArmy.length === 0){
    return ""
}
return "Saxons have fought for their lives and survive another day..."
    }
}
