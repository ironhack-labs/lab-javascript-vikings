// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    };

    attack() {
        return this.strength;
    };

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    };

    receiveDamage(damage){
        this.health -= damage;
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    };

    battleCry (){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
        super(health, strength);
    };

    receiveDamage(damage){
        this.health -= damage;
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    };

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    };

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    };

    vikingAttack() {
        let indexVikingRandom = Math.floor(Math.random()*this.vikingArmy.length);
        let indexSaxonRandom = Math.floor(Math.random()*this.saxonArmy.length);
        let saxonDamage = this.saxonArmy[indexSaxonRandom].receiveDamage(this.vikingArmy[indexVikingRandom].strength);
        if (this.saxonArmy[indexSaxonRandom].health <= 0) {
            this.saxonArmy.splice(indexSaxonRandom, 1);
            }
        return saxonDamage;
    }

    saxonAttack() {
        let indexVikingRandom = Math.floor(Math.random()*this.vikingArmy.length);
        let indexSaxonRandom = Math.floor(Math.random()*this.saxonArmy.length);
        let vikingDamage = this.vikingArmy[indexVikingRandom].receiveDamage(this.saxonArmy[indexSaxonRandom].strength);
        if (this.vikingArmy[indexVikingRandom].health <= 0) {
            this.vikingArmy.splice(indexVikingRandom, 1);
            }
        return vikingDamage;
    }

    showStatus() {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else return "Vikings and Saxons are still in the thick of battle."
    }
}
