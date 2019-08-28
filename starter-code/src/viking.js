// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
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
    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg);
        this.name = nameArg;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        const message = this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
        return message;
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg);

    }

    attack() {
        return super.attack();
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        const message = this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
        return message;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        const randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomIndex];
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const attackResult = randomSaxon.receiveDamage(randomViking.attack());
        if(randomSaxon.health <= 0){
          this.saxonArmy.splice(randomIndex, 1);
        }
        return attackResult;
      }

    saxonAttack(){
        const randomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomIndex];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const attackResult = randomViking.receiveDamage(randomSaxon.attack());
        if(randomViking.health <= 0){
          this.vikingArmy.splice(randomIndex, 1);
        }
        return attackResult;
      }



    showStatus() {
        let status = {
            '01': "Vikings have won the war of the century!",
            '10': "Saxons have fought for their lives and survive another day...",
            '11': "Vikings and Saxons are still in the thick of battle."
        }
        return status[`${Number(this.saxonArmy.length > 0)}${Number(this.vikingArmy.length > 0)}`]
    }
}