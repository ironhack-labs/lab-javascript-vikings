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
        this.health -= damage
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength)
        this.name = name;
        console.log('He creado un viking')
    }
    attack() {
       return this.strength 
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry() {
        return ('Odin Owns You All!')
    }
}

const Viking1 = new Viking('pepe', '10, 5')

Viking1.receiveDamage(1)

console.log (Viking1)

// Saxon
class Saxon extends Soldier{
    attack() {
       return this.strength 
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
    } 
}

const Saxon1 = new Saxon('11', '4')

console.log (Saxon1)

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy =[]
    }
    addViking(Viking1) {
        this.vikingArmy.push (Viking1)
    }
    addSaxon(Saxon1) {
        this.saxonArmy.push (Saxon1)
        
    }
    vikingAttack() {
        
        let Vikingrandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let Saxonrandom = 

        this.saxonArmy.pop (Saxon)
    }
    saxonAttack() {
       this.vikingArmy.pop (Saxon)
   }
    showStatus() {
        
    }
}

console.log (this.vikingArmy)