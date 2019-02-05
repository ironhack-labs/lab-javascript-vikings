// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = () => {
        return this.strength;
    }

    this.receiveDamage = (dmg) => {
        this.health = this.health - dmg;
    }
}

// Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = (dmg) => {
        this.health = this.health - dmg;
        return this.health > 0 ? `${this.name} has received ${dmg} points of damage` : `${this.name} has died in act of combat`;
    }

    this.battleCry = () => {
        return "Odin Owns You All!";
    }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = (dmg) => {
        this.health = this.health - dmg;
        return this.health > 0 ? `A Saxon has received ${dmg} points of damage` : `A Saxon has died in combat`;
    }
}
Saxon.prototype = Object.create(Soldier.prototype);
// War
function War() {}
