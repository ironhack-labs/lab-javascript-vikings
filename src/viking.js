// Soldier
class Soldier {
    constructor(health, strength) {
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
        super(health, strength)
        this.name = name
     }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }else {
            return `${this.name} has died in act of combat`
        }
       }

    battleCry() {
        return "Odin Owns You All!"
    }


}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else {
            return `A Saxon has died in combat`
        }
       }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
       this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
       /* let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
       let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
       let vikingS = this.vikingArmy[randomViking];
       let saxonS = this.saxonArmy[randomSaxon];
       let vikingSAttack = vikingS.attack();
       let receiveDamagedHealth = saxonS.receiveDamage(vikingSAttack);

       if (saxonS.health <= 0) {
        this.saxonArmy.splice (randomSaxon,1);
       }
       return receiveDamagedHealth; */

       return this.attackBattle(this.vikingArmy, this.saxonArmy);
    }
    saxonAttack() { /*
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let vikingS = this.vikingArmy[randomViking];
        let saxonS = this.saxonArmy[randomSaxon];
        let saxonSAttack = saxonS.attack();
        let receiveDamagedHealth = vikingS.receiveDamage(saxonSAttack);
 
        if (vikingS.health <= 0) {
         this.vikingArmy.splice (randomViking,1);
        }
        return receiveDamagedHealth;
       */

        return this.attackBattle(this.saxonArmy, this.vikingArmy)
    }

    attackBattle(attack, defend) {
        let randomAttack = Math.floor(Math.random() * attack.length)
        let randomDefending = Math.floor(Math.random() * defend.length)
        let attackArmy = attack[randomAttack];
        let  defendArmy = defend[randomDefending];

        let damageHealth = attackArmy.attack();
        let receiveDamages = defendArmy.receiveDamage(damageHealth);

        if( defendArmy.health <= 0) {
          defend.splice(randomDefending,1);
        }
        return receiveDamages;
    }

    showStatus() {
       if (this.saxonArmy.length === 0) {
         return "Vikings have won the war of the century!"
       }else if (this.vikingArmy.length === 0) {
         return "Saxons have fought for their lives and survived another day..."
       } else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !==0){
        return "Vikings and Saxons are still in the thick of battle."
       }
    }
}


