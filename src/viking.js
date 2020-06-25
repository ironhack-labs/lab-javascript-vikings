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
        this.damage = damage;
        this.health = this.health - this.damage;
    };
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super (health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health = this.health - this.damage;
        if(this.health > 0){
            return `${this.name} has received ${this.damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    };
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.damage = damage;
        this.health = this.health - this.damage;
        if(this.health > 0){
            return `A Saxon has received ${this.damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        };
    };
};


// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    };
    addViking(Viking){
        this.vikingArmy.push(Viking);
    };
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    };
    vikingAttack(){
        const rdmS = Math.floor((Math.random() * this.saxonArmy.length));
        const rdmV = Math.floor((Math.random() * this.vikingArmy.length));
        const attackDamage = this.saxonArmy[rdmS].receiveDamage(this.vikingArmy[rdmV].strength);
        if (this.saxonArmy[rdmS].health <= 0){
            this.saxonArmy.splice(rdmS,1);
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${attackDamage} points of damage`;
        };
    };
    saxonAttack(){
        const rdmSa = Math.floor((Math.random() * this.saxonArmy.length));
        const rdmVi = Math.floor((Math.random() * this.vikingArmy.length));
        const attackDamages = this.vikingArmy[rdmVi].receiveDamage(this.saxonArmy[rdmSa].strength);
        if (this.vikingArmy[rdmVi].health <= 0){
            this.vikingArmy.splice(rdmVi,1);
            return `A Viking has died in combat`;
        } else {
            let name = this.vikingArmy[rdmVi].name;
            return `${name} has received ${attackDamages} points of damage`;
        };
    };
    /* Super Bonus
    Attack(defendingArmy, attackingArmy,defender){
        const rdmA = Math.floor((Math.random() * this.defendingArmy.length));
        const rdmB = Math.floor((Math.random() * this.attackingArmy.length));
        const attackDamage = this.defendingArmy[rdmA].receiveDamage(this.attackingArmy[rdmB].strength);
        if (this.defendingArmy[rdmA].health <= 0){
            this.defendingArmy.splice(rdmA,1);
            return `A ${defender} has died in combat`;
        } else {
            return `A ${defender} has received ${attackDamage} points of damage`;
        };
    };
    }
    */
    showStatus(){
        if (this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length <= 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        };
        }; 
}
