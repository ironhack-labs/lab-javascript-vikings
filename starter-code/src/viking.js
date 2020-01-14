// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    };

    attack(){
        return this.strength;
    };

    receiveDamage(damage){
        this.health -= damage;
    };
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    };

    receiveDamage(damage) {
        super.receiveDamage(damage);
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    };

    battleCry() {
        return "Odin Owns You All!"
    };
};

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    };
};

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(viking){
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    };

    vikingAttack(){
        const viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const sIndex = this.saxonArmy.indexOf(saxon);
        const damage = viking.attack();

        if (damage>saxon.health) {
            this.saxonArmy.splice(sIndex, 1);
        };

        return saxon.receiveDamage(damage);
    };

    saxonAttack(){
        const viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const vIndex = this.vikingArmy.indexOf(viking);
        const damage = saxon.attack();

        if (damage>viking.health) {
            this.vikingArmy.splice(vIndex, 1);
        };

        return viking.receiveDamage(damage);
    };

    showStatus(){
        return !this.saxonArmy.length 
        ? "Vikings have won the war of the century!" 
        : !this.vikingArmy.length 
        ? "Saxons have fought for their lives and survive another day..." 
        : "Vikings and Saxons are still in the thick of battle.";
    }
};
