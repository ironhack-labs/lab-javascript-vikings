// Soldier
class Soldier {
    constructor( health, strength ) {
        this.health = health,
        this.strength = strength
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
    constructor( name, health, strength ) {
        super( health, strength )
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if ( this.health > 0 ) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if ( this.health > 0 ) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        // const randomSaxons = Math.floor( Math.random() * this.saxonArmy.length );
        // const randomVikings = Math.floor( Math.random() * this.vikingArmy.length );
        // const oneSax = saxonArmy[randomSaxons];
        // const oneVik = vikingArmy[randomVikings]
        
        // Saxon.receiveDamage() === Viking.strength
        // if Saxon.health > 0  then  saxonArmy.pop(saxon)
    }
    saxonAttack() {}
    showStatus() {}
}

const vik = new Viking('bob', 300, 500);
const sax = new Saxon(600, 500);
console.log( sax.receiveDamage( vik.attack() ) )
console.log(   )