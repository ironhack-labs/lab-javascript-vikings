// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
   constructor(name, health, strength){
       super(health, strength)
       this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    } 
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health, strength)
    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return `A saxon has recibed ${damage} points of damage` 
        }
        else{
            return `A saxon has died in combat`
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    random(number) {
        return Math.floor(Math.random() * number);
    }

    vikingAttack() {
        let numberOfSaxon = this.random(this.saxonArmy.length);
        let saxon = this.saxonArmy[numberOfSaxon];
        let numberOfViking = this.random(this.saxonArmy.length);
        let viking = this.vikingArmy[numberOfViking];
        let result = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0) {
            this.saxonArmy.splice(numberOfSaxon, 1);
        }
        return result;
    }
    saxonAttack() {
        let numberOfSaxon = this.random(this.saxonArmy.length);
        let saxon = this.saxonArmy[numberOfSaxon];
        let numberOfViking = this.random(this.saxonArmy.length);
        let viking = this.vikingArmy[numberOfViking];
        let result = viking.receiveDamage(saxon.strength);
        if (viking.health <= 0) {
            this.vikingArmy.splice(numberOfViking, 1);
        }
        return result;
    }

    showStatus(){
        if(vikingArmy < 0){
            console.log(`Saxons have fought for their lives and survive another day...`)
       } else if (saxonArmy < 0) {
           console.log(`Vikings have won the war of the century!`)
       } else {
            console.log(`Vikings and Saxons are still in the thick of battle.`)
       }
    }
}


