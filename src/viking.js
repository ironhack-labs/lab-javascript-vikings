// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(danger) {
        this.health= this.health - danger;
    }
}

// Viking
class Viking extends Soldier{

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(danger) {
        this.health= this.health - danger;
        if(this.health > 0)return `${this.name} has received ${danger} points of damage`;
        else return `${this.name} has died in act of combat`;
        // this.health >= 0 ? return `${this.name} has received ${danger} points of damage` : return `${this.name} has died in act of combat`;
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health,strength);
    }

    receiveDamage(danger) {
        this.health= this.health - danger;
        if(this.health > 0)return `A Saxon has received ${danger} points of damage`;
        else return `A Saxon has died in combat`;
        
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.viking = this.vikingArmy.push(viking);
    }
    addSaxon(){}
    vikingAttack(){}
    saxonAttack(){}
    showStatus(){}
}
