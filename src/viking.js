// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength
    }

    attack(){
        return this.strength

    }

    receiveDamage(damage){
        this.health -= damage

    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
         
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
    }
    else 
    return `${this.name} has died in act of combat`

    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else 
        return `A Saxon has died in combat`
    }
}

// War
class War {
    
        vikingArmy = [ ];
        saxonArmy = [ ];



    addViking(Viking){
        this.vikingArmy.push(Viking)

    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let vFight = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0){
            this.saxonArmy.pop(randomSaxon);
        }
        return vFight
    }

    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let sFight = randomViking.receiveDamage(randomSaxon.strength);
        if  (randomViking.health <= 0){
            this.vikingArmy.pop(randomViking);
        }
        return sFight

    }

    showStatus(){
        let resultMessage;
        if (this.saxonArmy.length == 0){
            resultMessage = "Vikings have won the war of the century!";
        }

            else if (this.vikingArmy.length == 0){
                resultMessage = "Saxons have fought for their lives and survived another day..."
            }
            else {
                resultMessage = "Vikings and Saxons are still in the thick of battle."
            }
        
        return resultMessage

    }

}
