// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    //WHY IN THIS CASE, WE ARE PASSING THE TEST ONLY WHEN WE ARE  REDECLARING THE METHOD ATTACK?

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health-= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name= name;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health-= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }

    //WHY IN THIS CASE, WE ARE PASSING THE TEST, AND WE ARE NOT REDECLARING THE METHOD ATTACK?

    receiveDamage(damage) {
        this.health-= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
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

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let selectedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let selectedSaxon = this.saxonArmy[randomIndexSaxon];

        if(selectedViking.strength >= selectedSaxon.health){
        this.saxonArmy.splice(randomIndexSaxon,1);
        }

        return selectedSaxon.receiveDamage(selectedViking.strength);
    }

    saxonAttack(){
        let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let selectedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let selectedViking = this.vikingArmy[randomIndexViking];

        if(selectedSaxon.strength >= selectedViking.health){
        this.vikingArmy.splice(randomIndexViking,1);
        }

        return selectedViking.receiveDamage(selectedSaxon.strength);
    }

    showStatus(){
        if(this.saxonArmy.length && this.vikingArmy.length){
            return "Vikings and Saxons are still in the thick of battle.";
        }
        else if (!this.saxonArmy.length){
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
    }
}
