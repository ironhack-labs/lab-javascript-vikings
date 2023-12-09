// Soldier
class Soldier{
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        console.log(this.strength);
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else if(this.health < 1){
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else if(this.health < 1){
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War{
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)

    }
    vikingAttack(){
        return this.attack("saxon")

    }
    saxonAttack(){
        return this.attack("viking")
    }

    attack(opponent){
        const randomSaxonIndex = Math.floor(Math.random()*(this.saxonArmy.length));
        const randomVikingIndex = Math.floor(Math.random()*(this.vikingArmy.length));
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
        let attacker; let enemy;
        if(opponent==="viking"){
            enemy = randomSaxon;
            attacker = randomViking;
        }
        else{
            enemy = randomViking;
            attacker = randomSaxon;
        }
        const damage = attacker.receiveDamage(enemy.strength);
        if(this.vikingArmy[randomVikingIndex].health<1){
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
        if(this.saxonArmy[randomSaxonIndex].health<1){
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
  
        return damage
    }
    showStatus(){
        if(this.saxonArmy.length<1){
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length<1){
            return "Saxons have fought for their lives and survived another day..."
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

//tests
/* 
const viking1 = new Viking("Viking1", 100, 10)
const viking2 = new Viking("Viking2", 100, 10)
const saxon1 = new Saxon(50, 5)
const saxon2 = new Saxon(50, 5)

const War1 = new War
War1.addViking(viking1)
War1.addViking(viking2)
War1.addSaxon(viking1)
War1.addSaxon(viking2)
War1.vikingAttack()

 */