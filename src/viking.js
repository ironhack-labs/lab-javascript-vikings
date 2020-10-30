// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;

    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;

    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
        this.health = health;
        this.strength = strength;

    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }

    }
    battleCry(){
        return `Odin Owns You All!`;
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health,strength);
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        return this.health > 0 ? `A Saxon has received ${theDamage} points of damage` : return `A Saxon has died in combat` ;
        }

    }



// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }  
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
    }
    vikingAttack(){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const vikingDamage = randomSaxon.receiveDamage(randomViking.attack());

        if (randomSaxon.health === 0){
            this.saxonArmy.splice(this.saxonArmy[vikingDamage], 1);
        }
    }
}
