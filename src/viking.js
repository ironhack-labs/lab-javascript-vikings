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
            this.health = this.health - damage;
    }
};


// Viking


class Viking  extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
};

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return "A Saxon has died in combat";
        }
    }
};

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
            let vikingOne = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
            let saxonOne = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
            return saxonOne.receiveDamage(vikingOne.strength);
            if (this.saxonArmy[this.saxonArmy.indexOf(saxonOne)].health === 0){
                delete this.saxonArmy[this.saxonArmy.indexOf(saxonOne)];
            }
        }
        saxonAttack(){
            return vikingOne.receiveDamage(saxonOne.strength);
            if (this.vikingArmy[this.vikingArmy.indexOf(vikingOne)].health === 0){
                delete this.vikingArmy[this.vikingArmy.indexOf(vikingOne)];
            }
        
        }
        showStatus(){
            if (this.saxonArmy.length === 0){
                return "Vikings have won the war of the century!";
            } else if (this.vikingArmy.length === 0){
                return "Saxons have fought for their lives and survived another day...";
            } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
                return "Vikings and Saxons are still in the thick of battle.";
            }
        }
};

