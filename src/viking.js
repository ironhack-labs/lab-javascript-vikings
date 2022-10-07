// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    };
    receiveDamage(damage){
        this.health = this.health - damage;
    }
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
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
    constructor(health, strength){
        super(health, strength)
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * (this.saxonArmy.length));
        let randomVikingIndex = Math.floor(Math.random() * (this.vikingArmy.length));
        let vikingAngriff = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);
        if (this.saxonArmy[randomSaxonIndex].health <= 0) this.saxonArmy.splice(randomSaxonIndex);
        return vikingAngriff;
    }

    saxonAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * (this.saxonArmy.length));
        let randomVikingIndex = Math.floor(Math.random() * (this.vikingArmy.length));
        let saxonAngriff = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);
        if (this.vikingArmy[randomVikingIndex].health <= 0) this.vikingArmy.splice(randomVikingIndex);
        return saxonAngriff;
    }

    showStatus(){

        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }

        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }

        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
