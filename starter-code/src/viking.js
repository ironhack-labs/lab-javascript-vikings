
// Soldier
class Soldier {
    constructor(healthArg, strengthArg){
        this.health = healthArg;
        this.strength= strengthArg;
        this.attack = function attack() {
            return this.strength 
        }
        this.receiveDamage = function receiveDamage(damage) {
            this.health -= damage
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health, strength )
        this.name = name
        this.receiveDamage = function receiveDamage(damage) {
            this.health -= damage
            if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
            } 
            else { return `${this.name} has died in act of combat`}
        }
        this.battleCry = function battleCry() {
            return `Odin Owns You All!`
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health,strength)
        this.receiveDamage = function receiveDamage(damage) {
            this.health -= damage
            if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
            } 
            else { return `A Saxon has died in combat`}
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
        this.SaxonArmy.push(Saxon)
    }

    vikingAttack(){
   this.actSaxon = this.saxonArmy[Math.floor(Math.random()*10) % this.saxonArmy.length];
   actSaxon.health -= this.vikingArmy[Math.floor(Math.random()*10) % this.vikingArmy.length].strength 
   if(actSaxon.health <= 0 ){
       splice(indexOf(actSaxon),1)
   }
}

 saxonAttack() {
    this.actViking = this.VikingArmy[Math.floor(Math.random()*10) % this.VikingArmy.length];
    this.actViking.health -= this.SaxonArmy[Math.floor(Math.random()*10) % this.SaxonArmy.length].strength 
    if(this.actViking.health <= 0 ){
        splice(indexOf(this.actViking),1)
    }

}

 showStatus() {
    if(this.SaxonArmy.length <= 0){
        let answer = `Vikings have won the war of the century!`}
    else if(this.VikingArmy.length <= 0){
        answer = `Saxons have fought for their lives and survive another day...`
    }
    else if(this.SaxonArmy.length && this.VikingArmy.length == 1){
        answer =`Vikings and Saxons are still in the thick battle.`
    }
    }
}
