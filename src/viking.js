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

receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
    }
    }
battleCry() {
    return 'Odin Owns You All!';
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <=0) {
            return "A Saxon has died in combat";
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    }
    
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject); 
    }

    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject);
    }

    vikingAttack() {
        if (this.vikingArmy.length === 0 || this.saxonArmy === 0) {
            return 'Both armies needs soldiers to battle again each other';
        }
        const vikingAndSaxonMinIndex = 0;
        const vikingMaxIndex = this.vikingArmy.length;
        const saxonMaxIndex = this.saxonArmy.length;

        const vikingIndex = Math.floor(Math.random() * (vikingMaxIndex - vikingAndSaxonMinIndex)) + vikingAndSaxonMinIndex;
        const saxonIndex = Math.floor(Math.random() * (saxonMaxIndex - vikingAndSaxonMinIndex)) + vikingAndSaxonMinIndex;

        const viking = this.vikingArmy[vikingIndex];
        const saxon = this.saxonArmy[saxonIndex];

        const battlereturn = saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1);
        }

        return battlereturn;
    }

    saxonAttack() {

    }

    showStatus(){
        
    }

}
