// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack = () => this.strength;
    receiveDamage = damage => {this.health -= damage}

}

// Viking
class Viking extends Soldier {
    constructor (name, health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage = damage => {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else return `${this.name} has received ${damage} points of damage`;
    };
    battleCry = () => `Odin Owns You All!`;
};

// Saxon
class Saxon extends Soldier{
    receiveDamage = damage => {
        this.health -= damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else return `A Saxon has received ${damage} points of damage`;
    };
}

// War
class War {
    vikingArmy = [];
    saxonArmy =[];
    addViking = Viking => {this.vikingArmy.push(Viking)};
    addSaxon = Saxon => {this.saxonArmy.push(Saxon)};
    vikingAttack = () => {
        let hurtSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let attackingViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        if (hurtSaxon.health <= attackingViking.strength) {this.saxonArmy.splice(this.saxonArmy.indexOf(hurtSaxon),1)}
        return hurtSaxon.receiveDamage(attackingViking.strength)};
    saxonAttack = () => {
        let hurtViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let attackingSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        if (hurtViking.health <= attackingSaxon.strength) {this.vikingArmy.splice(this.vikingArmy.indexOf(hurtViking),1)}
        return hurtViking.receiveDamage(attackingSaxon.strength)};
    showStatus = () => this.saxonArmy.length == 0 ? `Vikings have won the war of the century!`: this.vikingArmy.length == 0 ? "Saxons have fought for their lives and survived another day..." : "Vikings and Saxons are still in the thick of battle.";

}
