// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super (health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health >0){
            return `${this.name} has received ${damage} points of damage`;
        } else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else{
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(vicking){
        this.vikingArmy.push(vicking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        const attackingViking = this.vikingArmy[Math.floor((Math.random()*this.vikingArmy.length))];
        const attackedSaxon = this.saxonArmy[Math.floor((Math.random()*this.saxonArmy.length))];
        
        const attack = attackedSaxon.receiveDamage(attackingViking.strength);

        if (attackedSaxon.health <= 0){
            this.saxonArmy.splice(Math.floor((Math.random()*this.saxonArmy.length)),1)
        }
        return attack;
    }

    saxonAttack(){
        const attackingSaxon = this.saxonArmy[Math.floor((Math.random()*this.saxonArmy.length))];
        const attackedViking = this.vikingArmy[Math.floor((Math.random()*this.vikingArmy.length))];

        const attack = attackedViking.receiveDamage(attackingSaxon.strength);

        if (attackedViking.health <=0){
            this.vikingArmy.splice(Math.floor((Math.random()*this.vikingArmy.length)),1);
        }
        return attack;
    }

    showStatus(){
        if(!this.vikingArmy.length){
            return "Saxons have fought for their lives and survive another day..."
        }
        if(!this.saxonArmy.length){
            return "Vikings have won the war of the century!"
        }
        if(this.saxonArmy.length && this.vikingArmy.length){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
