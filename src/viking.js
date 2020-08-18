// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack(){
        return this.strength
    };
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
    };
    attack(){
        return this.strength
    };
    battleCry() {
        return "Odin Owns You All!";
    };
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength)
        this.health = health;
        this.strength = strength;
    };
    attack(){
        return this.strength
    };
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []; 
    }   ;
    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };
    vikingAttack(){
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonSoldier = this.saxonArmy[randomSaxon];
        let vikingSoldier = this.vikingArmy[randomViking];
        let receivedDamage = saxonSoldier.receiveDamage(vikingSoldier.strength);
        if (saxonSoldier.health <= 0){
            this.saxonArmy.splice(randomSaxon,1);
        }
        return receivedDamage
    };
    saxonAttack(){
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonSoldier = this.saxonArmy[randomSaxon];
        let vikingSoldier = this.vikingArmy[randomViking];
        let receivedDamage = vikingSoldier.receiveDamage(saxonSoldier.strength);
        if (vikingSoldier.health <= 0){
            this.vikingArmy.splice(randomViking,1);
        }
        return receivedDamage
    };
}
