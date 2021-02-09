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
    constructor(name,health,strength) {
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health>0){
        return `${this.name} has received ${damage} points of damage`;
        } else {
         return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health>0){
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
addViking(vik){
    this.vikingArmy.push(vik);
}
addSaxon(sax){
    this.saxonArmy.push(sax);
}
vikingAttack(){
    const getRandomSoldier = armyLength => Math.floor(Math.random()*(armyLength))
    let randomSaxon = getRandomSoldier(this.saxonArmy.length);
    let randomViking = getRandomSoldier(this.vikingArmy.length);
    let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if (this.saxonArmy[randomSaxon].health <= 0)  this.saxonArmy.splice(randomSaxon,1);
    return result;
}
saxonAttack(){
    const getRandomSoldier = armyLength => Math.floor(Math.random()*(armyLength))
    let randomSaxon = getRandomSoldier(this.saxonArmy.length);
    let randomViking = getRandomSoldier(this.vikingArmy.length);
    let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if (this.vikingArmy[randomViking].health <= 0)  this.vikingArmy.splice(randomViking,1);
    return result;
}
showStatus(){
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }
}
}
// const viking1 = new Viking("Thor",100,50);
// const viking2 = new Viking("Odin",100,50);
// const saxon1 = new Saxon(100,40);
// const saxon2 = new Saxon(100,40);
// const war1 = new War();
// war1.addSaxon(saxon1);
// war1.addSaxon(saxon2);
// war1.addViking(viking1);
// war1.addViking(viking2);
// console.log(war1.vikingAttack());
// console.log(war1.showStatus());
// console.log(war1.saxonAttack());
// console.log(war1.showStatus());
// console.log(war1.vikingAttack());
// console.log(war1.showStatus());
// console.log(war1.vikingAttack());
// console.log(war1.showStatus());
// console.log(war1.vikingAttack());
// console.log(war1.showStatus());