// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 300;
        this.strength = 150;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = "Harald";
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health,strength);
        this.health = 60;
        this.strength = 25;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
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

    }
    addSaxon(Saxon) {
        this.vikingArmy.push(Saxon);

    }
    vikingAttack() {
        Saxon.receiveDamage(150);
        

    }
    saxonAttack() {

    }
    showStatus() {

    }
}
