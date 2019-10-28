// Soldier
class Soldier {
    constructor(health,strength) {
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
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
if(this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
} else {
    return `${this.name} has died in act of combat`;
}
    }
    battleCry() {
return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
if(this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
} else {
    return `A Saxon has died in combat`;
}
    }
}

// War
class War {
    constructor() {
        this.saxonArmy = [];
        this.vikingArmy = [];
    }
    addViking(vikingObj) {
this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj) {
this.saxonArmy.push(saxonObj);
    }
    vikingAttack() {
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
       let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let result = saxonRandom.receiveDamage(vikingRandom.attack());
        if(saxonRandom.health < 1) {
this.saxonArmy.splice(this.saxonArmy.indexOf(saxonRandom),1);
}
return result;
    }
    saxonAttack() {
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let result = vikingRandom.receiveDamage(saxonRandom.attack());
        if( vikingRandom.health < 1) {     let result = saxonRandom.receiveDamage(vikingRandom.attack());
 this.vikingArmy.splice(this.vikingArmy.indexOf(vikingRandom),1);
}
 return result;
    }
    showStatus() {
if(this.saxonArmy.length === 0) {
    return `Vikings have won the war of the century!`;
} else if (this.vikingArmy.length === 0) {
    return `Saxons have fought for their lives and survived another day...`;
} else  {
    return `Vikings and Saxons are still in the thick of battle.`;
}
    }
}
