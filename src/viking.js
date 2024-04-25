// Soldier

class Soldier {
    constructor (health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage (damage) {
        this.health -= damage 
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
     }   
    battleCry() {
        console.log(`Odin Owns You All!`);
        return `Odin Owns You All!`
    }
}
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
    battleCry() {
        console.log(`With Sword and Fire!`);
        return `With Sword and Fire!`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
        console.log(`Our viking army now has ${this.vikingArmy.length} vikings, because ${Viking.name} has joined the fight`);
    };
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
        console.log(`I am adding a Saxon, the army is now ${this.saxonArmy.length} strong `);
    };
    vikingAttack() {
        const randomSaxon = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))]
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))]
        const result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0 ) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return result
    }
    saxonAttack() {
        const randomSaxon = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))]
        const randomViking = this.vikingArmy[(Math.floor(Math.random() * this.saxonArmy.length))];
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return result
    }
    showStatus() {
        if (this.saxonArmy.length === 0 ) {
            return `Vikings have won the war of the century!`;
        }
        else if (this.vikingArmy.length === 0 ) {
            return `Saxons have fought for their lives and survived another day...`;
        }
        else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1 ) {
            return `Vikings and Saxons are still in the thick of battle.`;
        };
    }
}

// creation of my way 
const greatWar = new War();

// Creation of my Vikings
const Ragnarok = new Viking("Ragnarok", 100, 50);
const Sacate = new Viking("Sacate", 200, 150);
const Thor = new Viking("Thor", 180, 80);
const Loki = new Viking("Loki", 150, 70);
const Bjorn = new Viking("Bjorn", 220, 90);
const Sigurd = new Viking("Sigurd", 170, 75);
const Olaf = new Viking("Olaf", 200, 85);
const Erik = new Viking("Erik", 160, 60);
const Leif = new Viking("Leif", 190, 65);
const Ivar = new Viking("Ivar", 210, 95);
const Gunnar = new Viking("Gunnar", 165, 70);
const Hrolf = new Viking("Hrolf", 230, 100);

//addming my Vikings
greatWar.addViking(Ragnarok);
greatWar.addViking(Sacate);
greatWar.addViking(Thor);
greatWar.addViking(Loki);
greatWar.addViking(Bjorn);
greatWar.addViking(Sigurd);
greatWar.addViking(Olaf);
greatWar.addViking(Erik);
greatWar.addViking(Leif);
greatWar.addViking(Ivar);
greatWar.addViking(Gunnar);
greatWar.addViking(Hrolf);

//Creation of my Saxons
const William = new Saxon(150, 70);
const Theodor = new Saxon(90,80);
const Redwald = new Saxon(140, 60);
const Aelfric = new Saxon(120, 50);
const Oswin = new Saxon(160, 75);
const Eadric = new Saxon(110, 65);
const Wulfstan = new Saxon(130, 55);
const Beornwulf = new Saxon(100, 45);
const Cynewulf = new Saxon(170, 80);
const Godric = new Saxon(150, 70);
const Hereward = new Saxon(180, 85);
const Leofric = new Saxon(190, 90);

// adding my Saxons to the army
greatWar.addSaxon(William);
greatWar.addSaxon(Theodor);
greatWar.addSaxon(Redwald);
greatWar.addSaxon(Aelfric);
greatWar.addSaxon(Oswin);
greatWar.addSaxon(Eadric);
greatWar.addSaxon(Wulfstan);
greatWar.addSaxon(Beornwulf);
greatWar.addSaxon(Cynewulf);
greatWar.addSaxon(Godric);
greatWar.addSaxon(Hereward);
greatWar.addSaxon(Leofric);

// now lets make them fight!

console.log(greatWar.vikingAttack());
console.log(greatWar.saxonAttack());

console.log(greatWar.showStatus());

console.log(greatWar.saxonAttack());
console.log(greatWar.vikingAttack());

console.log(greatWar.vikingArmy)
console.log(greatWar.saxonArmy)

console.log(greatWar.vikingAttack());

console.log(greatWar.saxonArmy)
console.log(greatWar.vikingAttack());
console.log(greatWar.saxonArmy)
console.log(greatWar.vikingArmy)
console.log(greatWar.saxonAttack());