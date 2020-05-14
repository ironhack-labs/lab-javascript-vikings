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
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
    
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
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

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
      const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
      const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
      const attack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
      this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0)
      return attack
    }

    saxonAttack() {
      const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
      const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
      const attack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
      this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0)
      return attack
    }
    generalAttack(attacker, receivedAttack) {
        const randomAttacker = Math.floor(Math.random() * this.attacker.length)
        const randomReceivedAttack = Math.floor(Math.random() * this.receivedAttack.length)
        const attack = this.receivedAttack[randomReceivedAttack].receiveDamage(this.attacker[randomAttacker].strength)
        this.receivedAttack = this.receivedAttack.filter(man => man.health > 0)
        return attack
    }
   
}
