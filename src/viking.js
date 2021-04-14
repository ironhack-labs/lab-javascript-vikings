// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {return this.strength};

    receiveDamage(damage) {
        this.health -= damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
    attack() {return super.attack()};

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`)
        } else { 
            return (`${this.name} has died in act of combat`)
        }
    }

    battleCry() {
       return (`Odin Owns You All!`)
    }
}

// Saxon
class Saxon extends Soldier { 
    constructor (health, strength) {
        super(health, strength) 
    }
    attack() {return super.attack()};

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`)
        }else {
            return(`A Saxon has died in combat`)
        }
    }
}

// War
class War {
vikingArmy = []
saxonArmy = []

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const randViking = (Math.floor(Math.random() * this.vikingArmy.length))
        const randSaxon = (Math.floor(Math.random() * this.saxonArmy.length))
        const result = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].strength)
        return result;
    }
    saxonAttack() {
        const randViking = (Math.floor(Math.random() * this.vikingArmy.length))
        const randSaxon = (Math.floor(Math.random() * this.saxonArmy.length))
        const result = this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].strength)
        return result;
    }
    showStatus()
}
