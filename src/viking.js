// Soldier
class Soldier {
constructor(health, strength) {
    this.health = health;
    this.strenght = strenght;
    
}
attack() {
    return this.strenght;
}
receiveDamage(the damage) {
    this.health -= the damage;
}
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strenght)
    super(health, strenght);
    this.name = name;
}
receiveDamage(the damage) {
    this.health = this.health - the damage;
    if (this.health > 0)
        return `${this.name} has received ${the damage} points of damage`;
     else if (this.health === 0)
        return `${this.name} has died in act of combat`;
}
    battleCry() {
        return 'Odin owns you all!';
    }


// Saxon
class Saxon extends Soldier{
    constructor (health, strenght) {
        super(health, strenght);
    }
    receiveDamage(the damage) {
        this.health -= the damage;
        
        if (this.health > 0) {
            return `A Saxon has received ${the damage} points of damage`;
        } 
        else {
            return `A Saxon has died in combat`;
        }
    }
}
    

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    
    addSaxon() {
        this.saxonArmy.push(Saxon);
    }
    
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
        return result;
     }

     saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return result;
     }

     showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
     }
     else {
        return "Vikings and Saxons are still in the thick of battle.";
     }
    }
}