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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);   
        this.health = this.health - damage;
        let isAllive;
        if (this.health < damage) {
            isAllive = `${this.name} has died in act of combat`;
        } else { 
            isAllive = `${this.name} has received ${damage} points of damage`;
        }
        return isAllive;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        this.health = this.health - damage;
        let isAlliveSaxon;
        if (this.health < damage) {
            isAlliveSaxon = "A Saxon has died in combat";
        } else { 
            isAlliveSaxon = `A Saxon has received ${damage} points of damage`;
        }
        return isAlliveSaxon;
    }
}

// War
class War {

    addViking(arr={}){
        this.VikingArmy = arr;
    }
    addSaxon(){}
    vikingAttack(){}
    saxonAttack(opts=[]){}
    showStatus(){}
}
