// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
    super(health, strength)
    this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return `Odin Owns You All!`;
    }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
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
    getRandom(tribeArmy) {
        return tribeArmy[Math.floor(Math.random()*tribeArmy.length)]
    }

    vikingAttack() {
        let randomSaxon = this.getRandom(this.saxonArmy);
        let randomViking = this.getRandom(this.vikingArmy);
        let result = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon,1);
        }
        return result
    }
    saxonAttack() {
        let randomSaxon = this.getRandom(this.saxonArmy);
        let randomViking = this.getRandom(this.vikingArmy);
        let result = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking,1);
        }
        return result
    }


    showStatus(){

    }
}
