// Soldier
class Soldier {
    constructor(strength,health){
        this.strength = strength;
        this.health = health;
    }
}

attack() {
    return this.strength;
}

receiveDamage(damage) {
    this.health -= damage;
}


// Viking
class Viking {
    constructor(name,strength,health){
        super(strength, health);
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0) return `$(this.name)
        has received $(damage) point of damage`;
        else return `$(this.name) has died in act of combat`;
    }
}

battleCry() {
    return "Odin owns you all";
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        if(this.health > 0) return `A Saxon
        has received $(damage) point of damage`;
        else return `A Saxon has died in combat;`
    }

}

// War
class War {
    constructor(vickingArmy,saxonArmy) {
        this.vickingArmy = vickingArmy;
        this.saxonArmy= saxonArmy;
    }
    addViking(viking) {
        this.vickingArmy.push(vicking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    
getRandomSaxon() {
    return math.floor(Math.random() * (this.saxonArmy.length -1));

}

getRandomViking() {
    return math.floor(Math.random() * (this.vikingArmy.length -1));

}
vikingAttack() {
    const randomSaxon = this.getRandomSaxon()
    const randomViking = this.getRandomViking()
    this.saxonArmy[RandomSaxon].receiveDamage
    (this.vikingArmy[RandomViking].strength);
    if(!(this.saxonArmy[RandomSaxon].health > 0))
    this.saxonArmy.splice(randomSaxon, 1);
    return "A Saxon has died in combat";
 }

 saxonAttack() {
    const randomSaxon = this.getRandomSaxon()
    const randomViking = this.getRandomViking()
    this.vikingArmy[RandomViking].receiveDamage
    const result = this.saxonArmy[RandomSaxon].strength;
    if(!(this.vikingArmy[RandomViking].health > 0))
    this.vikingArmy.splice(randomViking, 1);
    return result;
 }

 showStatus() {
     if(`!this.saxonArmy.length`) return "Vikings have won the war of the Century";
     if(`!this.vikingArmy.length`) return "Saxon have fought their lives and survives an other day..."
     return "Viking and Saxons are still in a tick of battle.";
    }
}
