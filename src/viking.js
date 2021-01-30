  
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
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage){
        this.health -= damage;
        if(this.health<=0){
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`;
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    armyAttack(army1, army2){
        let randomArmy1 = Math.floor(Math.random() * army1.length);
        let randomArmy2 = Math.floor(Math.random() * army2.length);
        let attackResult = army2[randomArmy2].receiveDamage(army1[randomArmy1].strength);
        if(army2[randomArmy2].health <= 0){
            army2.splice(randomArmy2, 1);
        }
        return attackResult;
    }

    vikingAttack(){
        let vikingResult = this.armyAttack(this.vikingArmy, this.saxonArmy);
        return vikingResult;
    }

    saxonAttack(){
        let saxonResult = this.armyAttack(this.saxonArmy, this.vikingArmy);
        return saxonResult;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        }
        if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`;
        }
        return `Vikings and Saxons are still in the thick of battle.`
    }
}