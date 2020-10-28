// Soldier
class Soldier {
    constructor (health,strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return `Odin Owns You All!`;
    }

}

// Saxon
class Saxon extends Soldier {
    // constructor(health,strength){
    //     super(health,strength);
    //     }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    // vikingAttack() {
    //     let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    //     let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    //     const saxon = this.saxonArmy[saxonIndex];
    //     const viking = this.vikingArmy[vikingIndex];

    //     const message = saxon.receiveDamage(viking.strength);
    //     if (saxon.health <1) {
    //         this.saxonArmy.splice(saxonIndex,1);
    //     } 
    //     return message;

    // }


    vikingAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        // const saxon = this.saxonArmy[saxonIndex];
        // const viking = this.vikingArmy[vikingIndex];

        // const message = randomSaxon.receiveDamage(randomViking.strength);
        randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <1) {
            this.saxonArmy.splice(randomSaxon,1);
        } 
        return randomSaxon.receiveDamage(randomViking.strength);;

    }
    
    
    saxonAttack() {}
    showStatus() {}
}
