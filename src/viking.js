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
    constructor(name, health, strength) {
        super(health, strength);   //constructor del soldier
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}



// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}


// War
class War {
    constructor() {

        let this.vikingArmy = [];
        let this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(this.Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(this.Saxon)
    }

    vikingAttack() {
        let attackingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let indexOfSaxon = Math.floor(Math.random() * this.saxonArmy.length) //para saber el indice del saxon, hay que saber cual es
        let attackedSaxon = this.saxonArmy[indexOfSaxon]

        let result = attackedSaxon.receiveDamage(attackingViking.attack())

        if (attackedSaxon.health <= 0) {
            this.saxonArmy.splice(indexOfSaxon, 1)
        }
        return result;
    }


    saxonAttack() {
        let attackingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let indexOfViking = Math.floor(Math.random() * this.vikingArmy.length)
        let attackedViking = this.vikingArmy[indexOfViking]

        let ans = attackedViking.receiveDamage(attackingSaxon.attack())

        if (attackedSaxon.health <= 0) {
            this.saxonArmy.splice(indexOfSaxon, 1)
        }
        return ans;
    }



showStatus() {
    if (this.saxonArmy.length===0){ 
        return "Vikings have won the war of the century!" ;
    }
    if ( this.vikingArmy.length===0){
        return "Saxons have fought for their lives and survived another day..." ;
    }
    if (this.vikingArmy.length > 0 && this.saxonArmy.length >0){
       return "Vikings and Saxons are still in the thick of battle.";
    }
}

}
