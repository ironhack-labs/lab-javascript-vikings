// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        super.attack();
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        
        if (this.health === 0) {
            return `${this.name} has died in act of combat`
        } 
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        if (this.health === 0) {
            return 'A Saxon has died in combat'
        }
    }
}

// War
class War {
    // create a constructor() with zero arguments
    // inside the constructor() assign an empty array to the 
    // vikingArmy and to the saxonArmy property
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    addViking(Viking) {
        // add the received Viking to the vikingArmy with push
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        // add the received Saxon to the saxonArmy with push
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        // should make a random Saxon receiveDamage() equal 
        // to the strength of a viking 
        // receiveDamage === this.strength
        let randomSaxon = Math.random()
        console.log(randomSaxon());

        // should remove dead saxons from the army
        // this.health <= 0

        // should return result of calling receivedDamage() 
        // of a Saxon with the strength of a Viking

        

        // remove dead saxons with (this.health <= 0)
        //if (Saxon)

    }
    saxonAttack() {

    }
    showStatus() {
        if (this.saxonArmy.length === []) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === []) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }   
    }
}
