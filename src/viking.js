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
        this.damage = damage;
        this.health = this.health - this.damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
        // is attack inherited automatically or do I have to code it?
    }
    
    receiveDamage(damage) { // should be super. ?
        this.damage = damage;
        this.health = this.health - this.damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
       
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}
  

// War
class War {
    constructor(){
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
        Saxon.receiveDamage() = Viking.strength;

        if (Saxon.health <= 0) {
            this.saxonArmy.pop();
        }

    }

    saxonAttack() {

    }

    showStatus() {

    }

}
