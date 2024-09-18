// Soldier
class Soldier {
    constructor(health, strength) {
        this.health     = health;
        this.strength   = strength;
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
    constructor(name, health, strength) {
        super(health, strength);
        this.name   = name;
    }

    receiveDamage (damage) {
        this.health -= damage;

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage (damage) {
        this.health -= damage;

        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy  = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let saxon   = this.selectRandomArmy(this.saxonArmy);
        let viking  = this.selectRandomArmy(this.vikingArmy);
        
        let attack  = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0){
            let idx = this.saxonArmy.indexOf(saxon);
            this.saxonArmy.splice(idx, 1);
        }
        return attack;
    }

    saxonAttack(){
        let saxon   = this.selectRandomArmy(this.saxonArmy);
        let viking  = this.selectRandomArmy(this.vikingArmy);
        
        let attack  = viking.receiveDamage(saxon.strength);
        if (viking.health <= 0){
            let idx = this.vikingArmy.indexOf(viking);
            this.vikingArmy.splice(idx, 1);
        }
        return attack;
    }

    showStatus(){
        if (this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

    selectRandomArmy(randomArmy){
        let len     = randomArmy.length;
        let randomNo= Math.floor(Math.random() * len);
        
        return randomArmy[randomNo];
    }
}