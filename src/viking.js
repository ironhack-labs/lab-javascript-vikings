// Soldier
class Soldier {
    constructor(health,strength){
    this.health  = health ,
    this.strength = strength 
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
       this.health = this.health - damage
    }
}


// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name=name
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage;

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else{
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
        this.health = this.health - damage

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
    this.vikingArmy= [];
    this.saxonArmy = [];
    }
    addViking(viking){
        // this.vikingArmy = viking.push;
        // vikingArmy.push(viking);
        // viking = new viking;
        this.vikingArmy.push(viking);
    }
    
    addSaxon(saxon){
        // saxonArmy.push(new Saxon());
        // let saxon = new saxon
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let result = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxon, 1)

        return result

        // let randomSaxon = Math.floor(this.saxonArmy.length * Math.random())
        // let randomViking = Math.floor(this.vikingArmy.length * Math.random())
        // randomSaxon.receiveDamage() = randomViking.strength
        // if (randomSaxon.strength = 0) return

    }
    saxonAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let result = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) this.vikingArmy.splice(randomViking, 1)

        return result

        // return this.soldierAttack(this.saxonArmy, this.vikingArmy)
    }
    showStatus(){
        if(!this.saxonArmy.length && this.vikingArmy.length > 0){
            return `Vikings have won the war of the century!`;
        } else if(!this.vikingArmy.length && this.saxonArmy.length > 0){
            return `Saxons have fought for their lives and survived another day...`;
        } else if(this.vikingArmy.length >= 1  && this.saxonArmy.length >= 1){
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

    }
