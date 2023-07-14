// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
        this.damage = 0;
    }

    attack(){
        return this.strength;
    };

    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage;
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    battleCry(){
        return "Odin Owns You All!";
    }

    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage;

        if(this.health <= 0){
            return `${this.name} has died in act of combat`;
        }else{
            return `${this.name} has received ${this.damage} points of damage`; 
        }
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage;

        if(this.health <= 0){
            return `A Saxon has died in combat`;
        }else{
            return `A Saxon has received ${this.damage} points of damage`; 
        }
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

    }

    saxonAttack(){

    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }else if(this.saxonArmy.length && this.vikingArmy.length ){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}