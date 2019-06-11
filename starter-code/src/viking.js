// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(d) {
        this.health -= d;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;

    }
    receiveDamage(d) {
        super.receiveDamage(d);
        if (this.health > 0) { return `${this.name} has received ${d} points of damage` }
        else { return `${this.name} has died in act of combat` }
    };
    battleCry() {
        return "Odin Owns You All!";
    }
}
// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.name = name;
        super.attack;
    }
    receiveDamage(d) {
        super.receiveDamage(d);
        if (this.health > 0) { return `A Saxon has received ${d} points of damage` }
        else { return `A Saxon has died in combat` }
        //should return "A Saxon has received DAMAGE points of damage", if the Saxon is still alive
        //should return "A Saxon has died in combat", if the Saxon dies
    }
}
// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vicking) {
        this.vikingArmy.push(vicking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        // should make Saxon receiveDamage() equal to the strength of a Viking
        // should remove dead saxons from the army
        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        let rand = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.saxonArmy[rand].receiveDamage(this.vikingArmy[rand].strength);
        let updatedSaxonArmy = this.saxonArmy.filter(x => x.health > 0);
        this.saxonArmy = updatedSaxonArmy;
        return result;
    }
    saxonAttack() {
        let rand = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.vikingArmy[rand].receiveDamage(this.saxonArmy[rand].strength);
        let updatedVikingArmy = this.vikingArmy.filter(x => x.health > 0);
        this.vikingArmy = updatedVikingArmy;
        return result;
    }
    showStatus() {
        // should return "Vikings have won the war of the century!", if the Saxons array is empty
        // should return "Saxons have fought for their lives and survive another day...", if the Vikings array is empty
        // should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons
        let nSaxons = this.saxonArmy.length;
        let nViking = this.vikingArmy.length;

        if (nSaxons > 0 && nViking > 0) { return "Vikings and Saxons are still in the thick of battle." }
        else if (nSaxons === 0) { return "Vikings have won the war of the century!" }
        return "Saxons have fought for their lives and survive another day...";
    }
}
