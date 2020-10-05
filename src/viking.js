// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength; 
    }

    attack() {
        return this.strength; }
    
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name,health,strength) //es correcto esto?? //
    {
        super(health,strength);
        this.name = name;

    }
    attack()
    { return Viking.strength} // como se hace ? (This method should be inherited from Soldier, no need to re-implement it.)
}

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`${this.name} has received ${this.damage}  points of damage`) 
        }
        else {
            return (`${this.name} has died in act of compact`)
        }
    }

    battleCry () {
        return "Odin Owns You All!" }
    


// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength; }
    receiveDamage(damage) {
        this.health -= damage}
    if (this.health > 0) {
    return (`A Saxon has received ${this.damage}  points of damage`) 
        }
        else {
    return (`A Saxon has died in act of compact`)
        }
}


// War

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let damage = randomViking.attack();
        let fightDamage = randomSaxon.receiveDamage(randomViking.attack());
        
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon,1)
        }
        return fightDamage
    }


    saxonAttack() { 
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let damage = randomViking.attack();
        let fightDamage = randomViking.receiveDamage(randomSaxon.attack());
    
    if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomSaxon,1)
    }
    return fightDamage
}
    showStatus() {
            if (this.saxonArmy.length === 0) {
                return "Vikings have won the war of the century!"
            }
            else if (this.vikingArmy.length === 0) {
                return "Saxons have fought for their lives and survived another day..."
            }
            else {
                return "Vikings and Saxons are still in the thick of battle."
            }
        }
    
  