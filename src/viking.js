// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else if(this.health <= 0){
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else if(this.health <= 0){
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor (){
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
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; //está a escolher 1 viking
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; //está a escolher 1 saxon

        let fight = randomSaxon.receiveDamage(randomViking.strength);
        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return fight;
    }
    saxonAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let fight2 = randomViking.receiveDamage(randomSaxon.strength);
        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomViking, 1);
        }
        return fight2
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        }
        else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...';
        }
        else if(this.saxonArmy.length === 1 && this.vikingArmy.length === 1){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
