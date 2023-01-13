// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength; 
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }

}

// Saxon
class Saxon extends Soldier{
    
    
    receiveDamage(damage) {
        this.health -= damage;

        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
            return `A Saxon has died in combat`;
        }
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
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let attackedSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let attackingViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        
        let result = attackedSaxon.receiveDamage(attackingViking.strength);

        if (attackedSaxon.health <= 0){
            this.saxonArmy.splice(attackedSaxon, 1);
        }
        return result;
    }

    saxonAttack(){
        let attackingSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let attackedViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        let result = attackedViking.receiveDamage(attackingSaxon.strength);

        if(attackedViking.health <= 0){
            this.vikingArmy.splice(attackedViking,1);
        }
        return result;
    }

    showStatus(){
        if(this.saxonArmy == ""){
            return `Vikings have won the war of the century!`;
        }
        else if(this.vikingArmy == ""){
            return `Saxons have fought for their lives and survived another day...`;
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
