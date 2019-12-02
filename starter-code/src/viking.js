// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0) {
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
    constructor(health,strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0) {
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
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let vikingNumber = Math.floor(this.vikingArmy.length * Math.random());
        let saxonNumber = Math.floor(this.saxonArmy.length * Math.random());
        let damage = this.vikingArmy[vikingNumber].strength;
        this.saxonArmy[saxonNumber].receiveDamage(damage);
        if (saxonArmy[saxonNumber].health <=0 ){
            saxonArmy[saxonNumber].splice(Math.max(0,saxonNumber-1),saxonNumber);
        }
    }
    saxonAttack(){
        let vikingNumber = Math.floor(this.vikingArmy.length * Math.random());
        let saxonNumber = Math.floor(this.saxonArmy.length * Math.random());
        let damage = this.saxonArmy[saxonNumber].strength;
        this.vikingArmy[vikingNumber].receiveDamage(damage);
        if (vikingArmy[vikingNumber].health <=0 ){
            vikingArmy[vikingNumber].splice(Math.max(0,vikingNumber-1),vikingNumber);
        }
    }
    showStatus(){
        if (this.saxonArmy == []) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy == []) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
