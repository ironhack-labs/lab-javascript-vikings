// Soldier
class Soldier {
    constructor (health, strength){
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
    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage){
         super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack (){
        let indexViking = Math.floor(Math.random()*this.vikingArmy.length);
        let indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);

       this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].strength)

        if (this.saxonArmy[indexSaxon].health < 0){
            this.saxonArmy.splice(indexSaxon, 1);
            return `A Saxon has died in combat`; 
        }
    }

    saxonAttack (){
        let indexViking = Math.floor(Math.random()*this.vikingArmy.length);
        let indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);

       this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].strength)

        if (this.vikingArmy[indexViking].health <= 0){
            this.vikingArmy.splice(indexViking, 1);
        } else {
            return `${this.vikingArmy[indexViking].name} has received ${this.saxonArmy[indexSaxon].strength} points of damage`; 
        }

        console.log(this.VikingArmy)
    } 
    
}
