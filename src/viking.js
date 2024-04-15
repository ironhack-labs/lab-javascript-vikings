// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        

        this.health = this.health-theDamage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength) {
        super(health,strength);

        this.name = name}
        
        
        receiveDamage(theDamage) {
        this.health -= theDamage;

        if(this.health>0) {
            return `${this.name} has received ${theDamage} points of damage`
        }
        else if(this.health <= 0) {
            return `${this.name} has died in act of combat`
        }

        
    }  
    battleCry() {
            return `Odin Owns You All!`
        }

}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength)

    }

    receiveDamage(theDamage) {
        this.health -=theDamage;

        if(this.health > 0) {
           return  `A Saxon has received ${theDamage} points of damage`
        }
        else if(this.health <=0) {
           return  `A Saxon has died in combat`
        }

    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        const vikingIndex = this.vikingArmy.sort(() => Math.random() -0.5)
        const saxonIndex = this.saxonArmy.sort(() => Math.random()-0.5)

        const chosenViking = this.vikingArmy[0];
        const chosenSaxon = this.saxonArmy[0];

        return chosenSaxon.receiveDamage(chosenViking.strength)


    }
    saxonAttack() {}

}
