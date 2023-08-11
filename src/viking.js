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
class Viking  extends Soldier{
    constructor(name, health, strength) {
        super(health, strength, name)
        this.name = name;

    }
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } return `${this.name} has died in act of combat`
    }
    battleCry()  {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } return `A Saxon has died in combat`
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
    vikingAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        
        let saxonStatus = randomSaxon.receiveDamage(randomViking.strength);

        if(saxonStatus === 'A Saxon has died in combat') {
            this.saxonArmy.pop();
        }
        return saxonStatus;
    }
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        
        let vikingStatus = randomViking.receiveDamage(randomSaxon.strength);
        
        if(vikingStatus === `${randomViking.name} has died in act of combat`) {
            this.vikingArmy.pop();
        }
        return vikingStatus;
    }
    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        }else if (this.saxonArmy.length >0 && this.vikingArmy.length >0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
