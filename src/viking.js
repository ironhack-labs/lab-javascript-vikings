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
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    //constructor(){ // BECAUSE IT IS THE SAME AS SOLDIER
      //  super();
    //}

    receiveDamage(damage){
        this.health -= damage;

        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
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
        //const newViking = new Viking(viking.name, viking.health, viking.strenth);
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        //const nexSaxon = new Saxon(saxon.health, saxon.strenth);
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        const attack = randomSaxon.receiveDamage(randomViking.strength);
        this.saxonArmy = this.saxonArmy.filter( (element) => )
        return attack;
    }

    saxonAttack(){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        const attack = randomViking.receiveDamage(randomSaxon.strength);
        return attack;
    }

    showStatus(){}

}

