// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
       return this.strength
    }

    receiveDamage(damage) {
         this.health -= damage
    }
}



// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
   
    receiveDamage(damage) {
        super.receiveDamage(damage);

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }

        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage) {
        super.receiveDamage(damage);

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }

        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}

const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
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

    vikingAttack () {
       const randomViking = getRandom(this.vikingArmy);
       const randomSaxon = getRandom(this.saxonArmy);

       const result = randomSaxon.receiveDamage(randomViking.attack());
       this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

       return result;
    }

    saxonAttack () {
        const randomSaxon = getRandom(this.saxonArmy);
        const randomViking = getRandom(this.vikingArmy);

        const result = randomViking.receiveDamage(randomSaxon.attack());
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);

        return result;
    }

    showStatus () {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
