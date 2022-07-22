// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage
        console.log(`you have ${this.health}`)
    }
}

let soldier1 = new Soldier(10, 5)
soldier1.receiveDamage(5)

// Viking
class Viking extends Soldier {
    constructor(nameViking, health, strength) {
        super(health, strength);
        this.name=nameViking;
}
    battleCry(){
        return `Odin Owns You All!`
    }
    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
}

let viking1 = new Viking("Anton", 10, 5)
viking1.battleCry
viking1.receiveDamage(5)

// Saxon
class Saxon extends Soldier {
   
receiveDamage(damage){
    this.health-=damage
    if(this.health>0){
        return `A Saxon has received ${damage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }
}
}

let saxon1 = new Saxon("Vicky", 20, 3)
saxon1.receiveDamage(5)

// War
class War {
    constructor() {
        this.vikingArmy=[];
        this.saxonArmy=[];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        this.saxonArmy.pop(Saxon)
        Math.floor(Math.random*this.vikingArmy.length)
        return
    }
    saxonAttack(){
        this.vikingArmy.pop(Viking)
        return 

    }
    showStatus(){
        if(saxonArmy.length===0){
            return `Vikings have won the war of the century!`
        }
        if(vikingArmy.lenght===0){
            return `Saxons have fought for their lives and survived another day...`
        }
    }
}
