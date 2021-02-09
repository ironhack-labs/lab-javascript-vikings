// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        return super.attack();
    }
   
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
        return `${this.name} has died in act of combat`;
        }
    }
    
    battleCry() {
        return `Odin Owns You All!`;
    }
};

// Saxon
class Saxon extends Soldier {
    
    attack() {
        return super.attack();
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
        return `A Saxon has died in combat`;
        }
    }
};

// War
class War {
    constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        
        let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let defenderSaxon = this.saxonArmy[randomSaxonIndex];
        let attackerViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const resultVA = defenderSaxon.receiveDamage(attackerViking.strength);
        if (defenderSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
            return resultVA;
        }           
    }

    saxonAttack() {
        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let defenderViking = this.vikingArmy[randomVikingIndex];
        let attackerSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        console.log(`Before the attack, viking health is ${defenderViking.health}`);
        console.log(`Saxon's strength is ${attackerSaxon.strength}`);
        const resultSA = defenderViking.receiveDamage(attackerSaxon.strength);
        console.log(`After the attack, viking health is ${defenderViking.health}`);
        if (defenderViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
            return resultSA;
        }
    }

    showStatus() {
        if ((this.saxonArmy).length === 0) {
            return "Vikings have won the war of the century!"
        }
        if ((this.vikingArmy).length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
             return "Vikings and Saxons are still in the thick of battle."
        }
    }
};

console.log('--- Solders ---');
const soldier1 = new Soldier(100, 33);
const soldier2 = new Soldier(100, 52);
const soldier3 = new Soldier(100, 43);

console.log('--- Vikings ---');
const viking1 = new Viking("Thor", 100, 99);
const viking3 = new Viking("Loki", 110, 67);
const viking2 = new Viking("Odin", 100, 87);

console.log('--- Saxons ---');
const saxon1 = new Saxon(100, 11);
const saxon2 = new Saxon(100, 25);
const saxon3 = new Saxon(100, 47);

console.log('--- WAR 1 ---');
const war1 = new War();
war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);
war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);

console.log(war1.vikingArmy);
console.log(war1.saxonArmy);
war1.saxonAttack();