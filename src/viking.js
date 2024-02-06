// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(demage){
        this.health = this.health - demage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(demage) {
        this.health = this.health - demage;
        if (this.health > 0) {
            return `${this.name} has received ${demage} points of damage`
        }
            return `${this.name} has died in act of combat`
        

    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    attack() {
        return this.strength;
    }
    receiveDamage(demage){
        this.health = this.health - demage;
        if (this.health > 0) {
            return `A Saxon has received ${demage} points of damage`
        }else if (this.health === 0) {
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
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){

        const ramdomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const result = randomSaxon.receiveDamage(ramdomViking.attack());
       

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return result;
            
    }
    saxonAttack(){
        const ramdomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const result = ramdomViking.receiveDamage(randomSaxon.attack());
        if (ramdomViking.health <= 0) {
            this.vikingArmy.splice(ramdomViking, 1);
        }
        return result;
    }
    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
          } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
          } else {
            return "Vikings and Saxons are still in the thick of battle.";
          }
    }
}
