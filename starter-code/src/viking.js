// Soldier
class Soldier {
    constructor(health, strength) {}
    attack (health, strength) {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {}
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health >= 0){
            return ( this.name + "has received " + damage + " points of damage")
        } else {
            return ( this.name + "has die in act of combat ")
        }
    }

    battleCry(){
        return "Odin owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength
    }
    reciveDamage(damage){
        this.health -= damage;
        if (this.health >= 0){
            return ( "A Saxon has received " + damage + " points of damage")
        } else {
            return ( "A Saxon has died in combat ")
        }
    }

}

// War
class War {
    constructor(name, health, strength) {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(name, health,strength){
        new Viking(name, health,strength);

    }

    addSaxon(){}
    vikingAttack(){}
    saxonAttack(){}
    showStatus(){}
}


