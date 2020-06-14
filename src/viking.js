let randomIndex = (arr) => Math.floor(Math.random() * arr.length);

// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0) return `${this.name} has received ${damage} points of damage`;
        if(this.health <= 0) return `${this.name} has died in the act of combat`;
    }

    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0) return `A Saxon has received ${damage} points of damage`;
        if(this.health <= 0) return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
       this.vikingArmy = [];
       this.saxonArmy = [];
    }
    

    addViking(Viking){
        this.vikingArmy.push(Viking);
    };

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    };

    vikingAttack(){
        let attackingViking = this.vikingArmy[randomIndex(this.vikingArmy)];
        let attackedSaxon = this.saxonArmy[randomIndex(this.saxonArmy)];
        attackedSaxon.receiveDamage(attackingViking.strength);
        if(attackedSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(attackedSaxon), 1);
            return `A Saxon has died in combat`;
        }
    };

    saxonAttack(){
        let attackingSaxon = this.saxonArmy[randomIndex(this.saxonArmy)];
        let attackedViking = this.vikingArmy[randomIndex(this.vikingArmy)];
        attackedViking.receiveDamage(attackingSaxon.strength);
        if(attackedViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(attackedViking), 1);
            return `A viking has died in combat`;
        }
        return `${attackedViking.name} has received ${attackingSaxon.strength} points of damage`;
    };

    showStatus(){

    };
}
