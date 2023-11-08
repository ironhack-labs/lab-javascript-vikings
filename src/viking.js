// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength
    }
    receiveDamage (damage) {
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    receiveDamage (damage) {
        this.health -= damage;

        if (this.health <= 0){
            return `${this.name} has died in act of combat`
        }
        else {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry (){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage (damage) {
        this.health -= damage;

        if (this.health <= 0){
            return `A Saxon has died in combat`
        }
        else {
            return `A Saxon has received ${damage} points of damage`
        } 
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let attackedSaxonId = Math.floor(Math.random() * this.saxonArmy.length);
        let attackedSaxon = this.saxonArmy[attackedSaxonId];
        let attackingVikingId = Math.floor(Math.random()* this.vikingArmy.length);
        let attackingViking = this.vikingArmy[attackingVikingId];
        let damageToSaxon = attackedSaxon.receiveDamage(attackingViking.strength)
        if (attackedSaxon.health <=0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(attackedSaxon))}
        return damageToSaxon;
    }

    saxonAttack() {
        let attackedVikingId = Math.floor(Math.random() * this.vikingArmy.length);
        let attackedViking = this.vikingArmy[attackedVikingId];
        let attackingSaxonId = Math.floor(Math.random()* this.saxonArmy.length);
        let attackingSaxon = this.saxonArmy[attackingSaxonId];
        let damageToViking = attackedViking.receiveDamage(attackingSaxon.strength);
        if (attackedViking.health <=0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(attackedViking))}
        return damageToViking;
    }
    showStatus() {
            if (this.saxonArmy.length <1) {
            return 'Vikings have won the war of the century!';
          } else if (this.vikingArmy.length <1) {
            return 'Saxons have fought for their lives and survived another day...';
          } else {
            return 'Vikings and Saxons are still in the thick of battle.';
          }
        }
}
