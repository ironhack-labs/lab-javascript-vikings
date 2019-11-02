// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
            
        }
        return "A Saxon has died in combat"
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let idxSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxon = this.saxonArmy[idxSaxon];

        let idxViking = Math.floor(Math.random() * this.vikingArmy.length);
        let viking = this.vikingArmy[idxViking];

        let result = saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0){
            this.saxonArmy.splice(idxSaxon, 1)
        }

        return result;
    }

    saxonAttack(){
        let idxSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxon = this.saxonArmy[idxSaxon];

        let idxViking = Math.floor(Math.random() * this.vikingArmy.length);
        let viking = this.vikingArmy[idxViking];

        let result = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0){
            this.vikingArmy.splice(idxViking, 1)
        }

        return result;
    }
}
