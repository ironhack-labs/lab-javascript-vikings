// Soldier
class Soldier {
    constructor(health, strength) {
       this.health = health;
       this.strength =  strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(theDamage) {
        this.health -= theDamage; 
       return 
    } 
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(theDamage) {
        let vikingDamaged = this.health -= theDamage;
        if(vikingDamaged === 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${theDamage} points of damage`
        }
     }

     battleCry() {
        return "Odin Owns You All!"
     }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        let saxonDamaged = this.health -= theDamage;
        if(saxonDamaged === 0) {
            return "A Saxon has died in combat"
        } else {
            return `A Saxon has received ${theDamage} points of damage`
        }
     }   
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    
    addViking(Viking) {
        this.vikingArmy.push(Viking)
        return
    }
    
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
        return
    }
   
    // vikingAttack()
    // saxonAttack()
}
