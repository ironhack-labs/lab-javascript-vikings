// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health;
        this.strength = strength;
    }
    
    atack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name,health,strength){ 
        super(health, strength);
        this.name = name;
    }
    // atack(){
    //       return this.strength;
    // }
    receiveDamage(damage){
        super.receiveDamage(damage);

        if (this.health > 0) {
            console.log(`${this.name} has received ${damage} points of damage. It now has ${this.health} points of health.`)
        } else {
            console.log(`${this.name} has died in act of combat`)
        }
    }

    battleCry(){
        console.log('Odin Owns You All!')
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        super.receiveDamage(damage);

        if(this.health > 0){
            console.log(`A Saxon has received ${damage} points of damage`)
        } else {
            console.log(`A Saxon has died in act of combat`)
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

    vikingAttack(){
        var viking = this.vikingArmy[Math.floor(Math.random)*this.vikingArmy.length];
        var saxon = this.saxonArmy[Math.floor(Math.random)*this.vikingSaxon.length];

        saxon.receiveDamage(viking.strength)
    }

    saxonAttack(){

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


// EMPEZAMOS!!!

let war = new War();

war.addSaxon(new Saxon(100, 10));
war.addViking(new Viking('Paco',120, 10))
war.vi

