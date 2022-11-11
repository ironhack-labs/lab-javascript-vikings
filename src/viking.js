// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
        this.attack = function (){
            return this.strength;
        }
        this.receiveDamage = function(damage){
            this.health -= damage
        }
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super (health, strength);
        this.name = name;
        this.receiveDamage = function(damage){
            this.health -= damage
            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`
            } else {
                return `${this.name} has died in act of combat`
            }
        }
        this.battleCry = function(){
            return "Odin Owns You All!"
        }
    }

}

// Saxon
class Saxon extends Soldier {
   constructor (health, strength){
    super (health, strength);
    this.receiveDamage = function(damage){
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }  
   }
}

// War
class War {
    constructor (vikingArmy = [], saxonArmy = []) {
        this.vikingArmy = vikingArmy;
        this.saxonArmy = saxonArmy;

    }
    addViking (Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        const randomNumber = Math.floor(Math.random() * this.saxonArmy.length)
        const randomSaxon = this.saxonArmy[randomNumber];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomDamage = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy[randomNumber], 1);
        }
        return randomDamage;
        
    }
    saxonAttack(){
        const randomNumber = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomNumber];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomVikingDamage = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[randomNumber], 1);
        } 
        return randomVikingDamage;
    }
    showStatus(){
        if (this.saxonArmy = []) {
            return "Vikings have won the war of the century!"
        } 
        if (this.vikingArmy = []) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
     
}


