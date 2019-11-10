// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health <= 0){
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${theDamage} points of damage`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health <= 0){
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${theDamage} points of damage`
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
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        let stillAlive = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        if(this.saxonArmy[randomSaxon].health <= 0) this.saxonArmy.splice(randomSaxon,1);
        return stillAlive;
    }

    saxonAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        let stillAlive = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        if(this.vikingArmy[randomViking].health <= 0) this.vikingArmy.splice(randomViking,1);
        return stillAlive;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
