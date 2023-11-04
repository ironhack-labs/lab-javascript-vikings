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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength); 
        this.name = name;
    }
    
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else if (this.health <= 0){
            return  `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier{
    constructor (health, strength){
        super(health, strength); 
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else if (this.health <= 0){
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

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        const randViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let attack = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].strength);

        if (this.saxonArmy[randSaxon].health <= 0){
            this.saxonArmy.splice (randSaxon,1);
        }

        return attack;
    }

    saxonAttack(){
        const randViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let attack = this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].strength);

        if (this.vikingArmy[randViking].health <= 0){
            this.vikingArmy.splice (randViking,1);
        }

        return attack;
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        }
        else if (this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...';
        }
        else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
