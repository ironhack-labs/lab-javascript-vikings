// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}
    
// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
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
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let afterVAttack = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        
        if (this.saxonArmy[0].health <= 0){
            this.saxonArmy.shift();
        }
        return afterVAttack;
    }

    saxonAttack(){
        let afterSAttack = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
        
        // this.vikingArmy.filter((vikingSoldier) => vikingSoldier.health <= 0);

        if (this.vikingArmy[0].health <= 0){
            this.vikingArmy.shift();
        }

        console.log(this.vikingArmy)
           
        return afterSAttack;

    }

    showStatus(){
        if(this.saxonArmy.length <= 0){
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length <= 0) {
            return 'Saxons have fought for their lives and survive another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
