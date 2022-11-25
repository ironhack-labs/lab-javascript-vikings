// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
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
    constructor(name, health, strength) {
        super(health, strength, name);
        this.name = name;
    }

    battleCry() {
        return 'Odin Owns You All!';
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

}

// Saxon
class Saxon extends Soldier {
  // No volvemos a implementar el método attack porque lo heredamos tal cual del padre Soldier
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
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
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let saxonRandomIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon =  this.saxonArmy[saxonRandomIndex];
        let randomViking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))];
        
        if(randomViking.strength >= randomSaxon.health) {
            this.saxonArmy.splice(saxonRandomIndex,1);
        }
        
        return randomSaxon.receiveDamage(randomViking.attack());
    }

    saxonAttack() {
        let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking =  this.vikingArmy[vikingRandomIndex];
        let randomSaxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))];
        
        if(randomSaxon.strength >= randomViking.health) {
            this.vikingArmy.splice(vikingRandomIndex,1);
        }
        
        return randomViking.receiveDamage(randomSaxon.attack());
    }

}