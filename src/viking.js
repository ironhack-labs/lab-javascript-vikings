// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(dmg){
        this.health -= dmg
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength
    }
    receiveDamage(dmg){
        this.health -= dmg
        if(this.health > 0){
        return `${this.name} has received ${dmg} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {    constructor(health, strength){
    super(health, strength)
}
    attack(){
        return this.strength
    }
    receiveDamage(dmg){
        this.health -= dmg
        if(this.health > 0){
        return `A Saxon has received ${dmg} points of damage`
        }
        else{
            return `A Saxon has died in combat`
        }
    }
}


// War
class War {    
    vikingArmy = []
    saxonArmy = []
    addViking(Viking){
        this.vikingArmy.push(Viking) 
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon) 
    }
    vikingAttack(){
        const randomVikingArmy = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxonArmy = Math.floor(Math.random() * this.saxonArmy.length)

        const randomViking = this.vikingArmy[randomVikingArmy]
        const randomSaxon = this.saxonArmy[randomSaxonArmy]

        const resultBattle = randomSaxon.receiveDamage(randomViking.strength);

        if(randomSaxon.health <= 0 ){
            this.saxonArmy.splice(randomSaxonArmy, 1)
        }
        return resultBattle
    }
    saxonAttack(){
        const randomVikingArmy = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxonArmy = Math.floor(Math.random() * this.saxonArmy.length)

        const randomViking = this.vikingArmy[randomVikingArmy]
        const randomSaxon = this.saxonArmy[randomSaxonArmy]

        const resultBattle = randomViking.receiveDamage(randomSaxon.strength)

        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingArmy, 1)
        }
        return resultBattle
    }



}

