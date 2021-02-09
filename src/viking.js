// Soldier
class Soldier {
    constructor(health, strength){
        this.health= health;
        this.strength= strength;
    } 
    attack(){
            return this.strength;
    };

    receiveDamage(damage){
        this.health = this.health - damage
    };  
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        };
    attack(){
        super.attack();
        return this.strength;
    };
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        };
    };
    battleCry (){
        return "Odin Owns You All!"
    }; 
}


// Saxon

class Saxon extends Soldier {
   
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        };
    };
}

// War

class War {
    constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
    };

addViking(viking){
    this.vikingArmy.push(viking);
};

addSaxon(saxon){
    this.saxonArmy.push(saxon);
};
vikingAttack() {
    let saxonId = 0 + Math.floor(this.saxonArmy.length * Math.random());
    let vikingId = 0 + Math.floor(this.vikingArmy.length * Math.random());
    let chosenSaxon = this.saxonArmy[saxonId];
    let chosenViking = this.vikingArmy[vikingId];

    let result = chosenSaxon.receiveDamage(chosenViking.strength);

    if (chosenSaxon.health <= 0){
        this.saxonArmy.pop(chosenSaxon);
    };

    return result;
};
saxonAttack(){
    let saxonId = 0 + Math.floor(this.saxonArmy.length * Math.random());
    let vikingId = 0 + Math.floor(this.vikingArmy.length * Math.random());
    let chosenSaxon = this.saxonArmy[saxonId];
    let chosenViking = this.vikingArmy[vikingId];

    let result = chosenViking.receiveDamage(chosenSaxon.strength);

    if (chosenViking.health <= 0){
        this.vikingArmy.pop(chosenViking);
    };

    return result;
};

showStatus(){
    if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
        return "Vikings and Saxons are still in the thick of battle."
    };
};

}