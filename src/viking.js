// Soldier
class Soldier {
    constructor(health, strength) {
        this.health= health;
        this.strength= strength;
        
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= this.damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name= name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } 
        return `${this.name} has died in act of combat`
    
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
          return 'A Saxon has died in combat'
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    // only one saxon math random for that randomSaxon 
    // and randomViking in a variable does the saxon die or not

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    // Armies Attack

    vikingAttack() {
        let randomSaxonNumber = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonNumber];
        let randomVikingNumber = Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingNumber];
        let result = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <=0) {
            this.saxonArmy.splice(randomSaxonNumber, 1);
        }
        return result;
    }

    saxonAttack() {
        let randomSaxonNumber = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonNumber];
        let randomVikingNumber = Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingNumber];
        let result = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <=0) {
            this.vikingArmy.splice(randomVikingNumber, 1);
        }
        return result;
    }

    showStatus () {

        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";

            
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
      
        } else {
           return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}