// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        return this.health > 0 
        ? `${this.name} has received ${damage} points of damage` 
        : `${this.name} has died in act of combat`;
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        super.receiveDamage(damage)
        return this.health > 0 
        ? `A Saxon has received ${damage} points of damage` 
        : 'A Saxon has died in combat';
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    getRandomCharacter(army) {
        if (!army.length) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * army.length);
        return army[randomIndex];
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)

    }

    vikingAttack() {
        const saxon = this.getRandomCharacter(this.saxonArmy);
        const viking = this.getRandomCharacter(this.vikingArmy);

        const result = saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter(s => s !== saxon);
        }

        return result;
    }

    saxonAttack() {
        const saxon = this.getRandomCharacter(this.saxonArmy);
        const viking = this.getRandomCharacter(this.vikingArmy);

        const result = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0) {
            this.vikingArmy = this.vikingArmy.filter(v => v !== viking);
        }

        return result;
    }

}
