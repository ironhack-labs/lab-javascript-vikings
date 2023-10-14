// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;

    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health, strength){
        super (health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
      }
        else {
            return 'A Saxon has died in combat'
        }
    }
}

// War

class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
    
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        let damage = randomViking.attack();

        const damageDealtToSax = randomSaxon.receiveDamage(damage);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return damageDealtToSax
    }
    saxonAttack(){

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        let damage = randomSaxon.attack();

        const damageDealtToVik = randomViking.receiveDamage(damage);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return damageDealtToVik
    }

        
    performAttack(attacker, defender) {

        const damage = attacker.attack();
        const damageDealt = defender.receiveDamage(damage);
        
        if (defender.health <= 0) {
            if (defender instanceof Viking) {
                        const index = this.vikingArmy.indexOf(defender);
                        this.vikingArmy.splice(index, 1);
                } 
            else if (defender instanceof Saxon) {
                        const index = this.saxonArmy.indexOf(defender);
                        this.saxonArmy.splice(index, 1);
                    }
                }
        
        return damageDealt;

        }
        
        vikingAttack() {
                const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
                const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
                return this.performAttack(randomViking, randomSaxon);
        }
        
        saxonAttack() {
                const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
                const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
                return this.performAttack(randomSaxon, randomViking);
        }
        
        showStatus() {
            if (this.saxonArmy.length === 0) {
                return "Vikings have won the war of the century!";
            } else if (this.vikingArmy.length === 0) {
                return "Saxons have fought for their lives and survived another day...";
            } else {
                return "Vikings and Saxons are still in the thick of battle.";
            }
        }
    }
        
        
