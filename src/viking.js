// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strenght = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}


// Viking

class Viking { }
class Viking extend Soldier {
    constructor(name, health, strenght){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage";
        }
        else {
            return this.name + " had died in act of combat";
        }

        battleCry(){
            return "Odin owns you all!"
        }
    }


    // Saxon
    class Saxon { }
    call Saxon extends Soldier {
        receiveDamage(damage){
            this.health -= damage;
            if (this.health > 0) {
                return "A saxon has received " + damege + " points of damage";
            }
            return "A saxon has died in combat";
        }
    }

    // War
    class War { }
    class War {
        constructor(){
            this.vikingArmy = [];
            this.saxonArmy = [];
        }
        addViking(viking){
            this.vikingArmy.push(viking);
        }
        addSaxon(saxon){
            this.saxonArmy.push(viking);
        }
        vikingAttack(){}
        saxonAttack(){}
        showStatus(){}
    }
