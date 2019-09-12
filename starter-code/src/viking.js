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
        this.health -=damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health,strength) {
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if(damage >=300){
            return `${this.name} has died in act of combat`;
        }else{
            return `${this.name} has received ${damage} points of damage`;
        }       
    }

    battleCry(){
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength);
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if(damage>=60){
            return `A Saxon has died in combat`;
        }else{
            return `A Saxon has received ${damage} points of damage`;
        }
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
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let attackV = randomSaxon.receiveDamage(randomViking.strength);
        if(randomSaxon.health <= 0){
            this.saxonArmy = this.saxonArmy.filter(function(randomSaxon) {
                return randomSaxon.health > 0;
            })
        }
        return attackV;
    }

    saxonAttack(){
        let randomViking2 = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon2 = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];    
        let attackS = randomViking2.receiveDamage(randomSaxon2.strength);
        if(randomViking2.health <= 0){
            this.vikingArmy = this.vikingArmy.filter(function(randomViking2) {
                return randomViking2.health > 0;
            })
        }
        return attackS;    
    }

    showStatus(){
        if(this.saxonArmy.length <=0){
            return 'Vikings have won the war of the century!';
        }else if(this.vikingArmy.length <=0){
            return 'Saxons have fought for their lives and survive another day...';
        }else {
           return 'Vikings and Saxons are still in the thick of battle.';
        }
    }

}
