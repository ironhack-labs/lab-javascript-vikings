// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
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
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health){return `${this.name} has received ${damage} points of damage`}
        else {return `${this.name} has died in act of combat`};
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health){
            return `A Saxon has received ${damage} points of damage`;
        } else {return `A Saxon has died in combat`}
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []
    }
    
    addViking(viking){
        //viking = new Viking();
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        //saxon = new Saxon();
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let saxon1 = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let viking1 = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let result1 = saxon1.receiveDamage(viking1.attack());
        if(saxon1.health <= 0){this.saxonArmy.splice(this.saxonArmy.indexOf(saxon1), 1)};
        return result1;
    }

    saxonAttack(){
        let saxon2 = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let viking2 = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let result2 = viking2.receiveDamage(saxon2.attack());
        if(viking2.health <= 0){this.vikingArmy.splice(this.vikingArmy.indexOf(viking2), 1)};
        return result2;
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length && this.vikingArmy.length){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

