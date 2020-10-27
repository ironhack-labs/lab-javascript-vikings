// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    };
    receiveDamage(damage){
        this.health = this.health - damage
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage){
        if (this.health - damage <= 0){
            this.health = this.health - damage
            return `${this.name} has died in act of combat`
        }
        this.health = this.health - damage
        return `${this.name} has received ${damage} points of damage`
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
    
    // super( health, strength)
    // this.health = health;
    // this.strength = strength;
    // this.name = 'Viking'
}
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health <= 0){
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${damage} points of damage`
    }
    }



// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(viking){
        this.vikingArmy.push(viking)
    };
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    };
    vikingAttack(){
        let randSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
       let fight = randSaxon.receiveDamage(randViking.strength)
        if (randSaxon.health <= 0){
            // console.log(randSaxon)
            this.saxonArmy.splice(this.saxonArmy.indexOf(randSaxon),1)
        }
        return fight
    };
    saxonAttack(){
        let randSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
       let fight = randViking.receiveDamage(randSaxon.strength)
        if (randViking.health <= 0){
            // console.log(randSaxon)
            this.vikingArmy.splice(this.vikingArmy.indexOf(randViking),1)
        }
        return fight
    };

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
// if the Saxon array is empty, should return "Vikings have won the war of the century!"
// if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
    }

    }
