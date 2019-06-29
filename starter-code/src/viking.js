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
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        return this.health <=0 ? `${this.name} has died in act of combat` :  `${this.name} has received ${damage} points of damage`;
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        return this.health <=0 ? `A Saxon has died in combat` :  `A Saxon has received ${damage} points of damage`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let positionV = Math.floor(Math.random()*this.vikingArmy.length);
        let positionS = Math.floor(Math.random()*this.saxonArmy.length); 
        let result = this.saxonArmy[positionS].receiveDamage(this.vikingArmy[positionV].attack());
        
        if(this.saxonArmy[positionS].health <= 0) this.saxonArmy.pop(this.saxonArmy[positionS]); 
        return result;

    }
    saxonAttack(){
        let positionV = Math.floor(Math.random()*this.vikingArmy.length);
        let positionS = Math.floor(Math.random()*this.saxonArmy.length); 
        let result = this.vikingArmy[positionV].receiveDamage(this.saxonArmy[positionS].attack());
        
        if(this.vikingArmy[positionV].health <= 0) this.vikingArmy.pop(this.vikingArmy[positionV]); 
        return result;
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        } 
        return "Vikings and Saxons are still in the thick of battle.";
    }
}


const war = new War();
war.addViking(new Viking("Adri", 100, 100));
war.addViking(new Viking("Alan", 100, 100));
war.addViking(new Viking("Adri", 100, 100));
war.addViking(new Viking("Alan", 100, 100));
war.addSaxon(new Saxon(80, 10));
war.addSaxon(new Saxon(90, 20));
war.addSaxon(new Saxon(80, 10));
war.addSaxon(new Saxon(90, 20));

console.log(war.vikingArmy);
console.log(war.saxonArmy);