// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    }
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.damage = damage;
        this.health -= this.damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name ,health, strength){
        super(health, strength);
        this.name = name
    }

    receiveDamage(damage){
        this.damage = damage;
        this.health -= this.damage
        if(this.health > 0){
            return `${this.name} has received ${this.damage} points of damage`
        } else if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }
    };

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.damage = damage;
        this.health -= this.damage;
        if(this.health > 0){
            return `A Saxon has received ${this.damage} points of damage`
        } else if(this.health <= 0){
            return `A Saxon has died in combat`
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
        this.viking = viking
        this.vikingArmy.push(viking)
    };
    addSaxon(saxon){
        this.saxon = saxon
        this.saxonArmy.push(saxon)
    };
    vikingAttack(){
        let randomIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomIndex];
        let vikingAttack = this.viking.strength
        let attackResult = randomSaxon.receiveDamage(vikingAttack)
        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomIndex, 1)
        }

        return attackResult;

    };
    saxonAttack(){
        let randomIndice = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomIndice];
        let saxonAttack = this.saxon.strength;
        let attackResult = randomViking.receiveDamage(saxonAttack);
        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomIndice, 1)
        }

        return attackResult;

    };
    showStatus(){
       
        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
            
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
        
    };

}


