// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health,
      this.strength = strength
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength),
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []
    }

addViking(Viking){
    this.vikingArmy.push(Viking)
}

addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
}

vikingAttack(){
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[indexSaxon];
    let randomViking = this.vikingArmy[indexViking];
    let damage = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0){
        this.saxonArmy.splice(indexSaxon, 1);
    }
    return damage;
};

saxonAttack(){
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[indexSaxon];
    let randomViking = this.vikingArmy[indexViking];
    let damage = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0){
        this.vikingArmy.splice(indexViking, 1);
    }
    return damage;

}

showStatus(){
    if(this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!"
    }
    if(this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }
}
}