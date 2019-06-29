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
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage 

        return this.health > 0 ?
        `${this.name} has received ${damage} points of damage` :
        `${this.name} has died in act of combat`

    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health -= damage 

        return this.health > 0 ?
        `A Saxon has received ${damage} points of damage` :
        `A Saxon has died in combat`

    }
}

// War
class War {
    constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }

addViking(viking) {

let newViking = new Viking(viking.name, viking.health, viking.strength);
this.vikingArmy.push(newViking);

};

addSaxon(saxon) {
 
    let newSaxon = new Saxon(saxon.health, saxon.strength);
    this.saxonArmy.push(newSaxon);

}
vikingAttack() {
    let randomViking = Math.floor(Math.random() * (this.vikingArmy.length ));
    let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length ));

    if ((this.vikingArmy.length > 0) && (this.saxonArmy.length > 0)) {
    let message = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

    if (this.saxonArmy[randomSaxon].health <= 0){
        this.saxonArmy.splice(randomSaxon, 1)
    } 

    return message;
    }
}
saxonAttack() {

    let randomViking = Math.floor(Math.random() * (this.vikingArmy.length  ));
    let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length ));

    if ((this.vikingArmy.length > 0) && (this.saxonArmy.length > 0)) {
    let message = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);    

    if (this.vikingArmy[randomViking].health <= 0){
        this.vikingArmy.splice(randomViking, 1)
    }

    return message;
    }

}
showStatus() {

    if (this.saxonArmy.length === 0){
        return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survive another day...`
    } else {
        return `Vikings and Saxons are still in the thick of battle.`
    }

}

};

let game = new War(

)
game.addViking({name: 'Thor',health: 500,strength: 50})
game.addViking({name: 'Odin',health: 200,strength: 100})
game.addViking({name: 'hulk',health: 600,strength: 30})

for (let i = 1; i <= 24; i += 1) {
game.addSaxon({health: 100, strength: 20});
}

for (let i = 1; i <= 200; i += 1){

   if  (Math.floor(Math.random() * 2 ) === 1) {
    game.vikingAttack();
   } else {
       game.saxonAttack();

    }
    
}
console.log(game.showStatus())
console.log(game)