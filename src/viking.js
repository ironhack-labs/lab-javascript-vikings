// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(demage) {
        this.health -= demage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health, strength){
        super(health, strength)
        this.name = name;
    }

    battleCry() {
        return "Odin Owns You All!";
    }

    receiveDamage(demage) {
        this.health -= demage;
        if (this.health > 0) {
            return `${this.name} has received ${demage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }

    receiveDamage(demage) {
        this.health -= demage;
        if (this.health > 0) {
            return `A Saxon has received ${demage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}



// War

class War {
    //class
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    //adding vikings & saxons method
    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
    }

    //armies attack
    vikingAttack() {
        Saxon.receiveDamage().demage = Viking.strength;
    }

    saxonAttack() {

    }

    showStatus(){
        console.log(this.saxonArmy)
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

/* let viking1 = new Viking (100, 100)
let saxon1 = new Saxon (200, 50)

war(viking1, saxon1);

viking1.war()
*/
