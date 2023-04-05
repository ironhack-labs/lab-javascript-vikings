// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength,){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return  `${this.name} has received ${damage} points of damage`
        
    } else {
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
        this.health = this.health - damage;
        if(this.health > 0){
            return  `A Saxon has received ${damage} points of damage`
        
    } else {
        return `A Saxon has died in combat`
    }
 }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

addViking(Viking){
    this.vikingArmy.push(Viking);
}

addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
}

vikingAttack() {
    //Get Random Saxon
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const getSaxon = this.saxonArmy[randomSaxon];
    //Get Random Viking
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const getViking = this.vikingArmy[randomViking];

    const damageSaxon = getSaxon.receiveDamage(getViking.strength);

    if (getSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1) 
    }

    return damageSaxon;
    
}

saxonAttack(){
    //Get Random Saxon
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const getSaxon = this.saxonArmy[randomSaxon];
    //Get Random Viking
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const getViking = this.vikingArmy[randomViking];

    const damageViking = getViking.receiveDamage(getSaxon.strength);

    if (getViking.health <= 0) {
        this.vikingArmy.splice(randomViking, 1) 
    }

    return damageViking;
    
}

showStatus(){
    if(this.saxonArmy <= 0){
        return "Vikings have won the war of the century!";
    } else if(this.vikingArmy <= 0){
        return "Saxons have fought for their lives and survived another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
 }
}



