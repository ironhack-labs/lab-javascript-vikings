// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
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
    constructor(name,health,strength) {
        super(health, strength)
        this.name = name
    }

    attack() {
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health, strength)
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0){
           return `A Saxon has received ${damage} points of damage`
        }else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){

        let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
        let saxon = this.saxonArmy[randomSaxon]

        let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))]
        let vikingStrength = randomViking.attack()

        let attack = saxon.receiveDamage(vikingStrength)

        if(saxon.health <= 0){

            this.saxonArmy.splice(randomSaxon,1)

          }

        return attack;      
    }


    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];
        let saxonStrength = randomSaxon.attack()

        let randomViking = Math.floor(Math.random() * (this.vikingArmy.length))
        let viking = this.vikingArmy[randomViking]

        let attack = viking.receiveDamage(saxonStrength)


        if(viking.health <= 0){

            this.vikingArmy.splice(randomViking,1)

          }

        return attack;
    }


    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        }else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }else {
            return`Vikings and Saxons are still in the thick of battle.`
        }
        
    }
}


