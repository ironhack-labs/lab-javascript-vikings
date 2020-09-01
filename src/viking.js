// Soldier
class Soldier {
    constructor(health, strength) {
       this.health = health;
       this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damages) {
        this.health -= damages
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = "Harald";
    }

    receiveDamage(damages){
        super.receiveDamage(damages);
        if (this.health ===  0){
        return`${this.name} has died in act of combat`
        } else {
        return `${this.name} has received ${damages} points of damage`
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
     receiveDamage(damages){
        super.receiveDamage(damages);
        if (this.health ===  0){
        return`A Saxon has died in combat`
        } else {
        return `A Saxon has received ${damages} points of damage`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    getRandomFighters(){
        return {
            viking : this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)],
            saxon : this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        }
    }
   
    vikingAttack(){
        const fighter = this.getRandomFighters();
        const phrase = "A Saxon has died in combat"
        fighter.saxon.receiveDamage(fighter.viking.strength);
        if (fighter.saxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(fighter.saxon), 1);
            return phrase
        }
        
    }

    saxonAttack(){
        const fighter = this.getRandomFighters();
        const phrase = `${fighter.viking.name} has received ${fighter.saxon.strength} points of damage`;
        fighter.viking.receiveDamage(fighter.saxon.strength);
        if (fighter.viking.health <= 0){
            console.log(phrase);
            this.vikingArmy.splice(this.vikingArmy.indexOf(fighter.viking), 1);
        } else {
            console.log(phrase);
            return phrase
        }
    }
}
