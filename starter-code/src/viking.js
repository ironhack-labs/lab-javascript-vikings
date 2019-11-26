// Soldier
class Soldier {
constructor(health, strength) {
    this.health = health;
    this.strength = strength;
}
attack(){
    return this.strength;
    };
receiveDamage(damage){
    this.health = this.health - damage;
    };
};


// Viking
class Viking extends Soldier {
constructor(name, health, strength){
    super(health, strength);
    this.name = name;
}
receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0){
        return(`${this.name} has received ${damage} points of damage`);
        }
    else {
        return(`${this.name} has died in act of combat`);
        }
    }
battleCry(){
    return("Odin Owns You All!");
}
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0){
        return(`A Saxon has received ${damage} points of damage`);
        }
    else {
        return(`A Saxon has died in combat`);
        }
    }
}

// War
class War {
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
}
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
      this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        const saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let msg = saxon.receiveDamage(viking.strength);
        if (saxon.health < 1){
            this.saxonArmy.splice(saxon);
        }
        return msg;
    }

    saxonAttack(){
        const saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let msg = viking.receiveDamage(saxon.strength);
        if (viking.health < 1){
            this.vikingArmy.splice(viking);
        }
        return msg;
    }
}
