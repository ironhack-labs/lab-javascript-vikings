// Soldier
class Soldier {
    constructor(health, stregnth) {
        this.health = health;
        this.strength = stregnth;

    }

    attack() {
        return this.strength;

    }

    receiveDamage(damage) {
    this.health -= damage; 

    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, stregnth) {
        super(health, stregnth);
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage; 
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
        
        }

        battleCry () {
            return `Odin Owns You All!`;
        }


}

// Saxon
class Saxon extends Soldier {
    constructor(health, stregnth) {
        super(health, stregnth);
        this.name = name

    }

    receiveDamage(damage) {
        this.health -= damage; 
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`;
        }
        
        }

        battleCry () {
            return `Odin Owns You All!`;
        }


}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(object) {

        this.vikingArmy.push(object); 

    } 
    addSaxon(object) {
        this.saxonArmy.push(object); 

    } 
    vikingAttack() {
        //Saxon stuff
        let randomNumS =  Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomNumS];
        //Viking Stuff
        let randomNumV =  Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking= this.vikingArmy[randomNumV];
        let vikingDmg = randomViking.strength;

        let dmgCalc = randomSaxon.receiveDamage(vikingDmg);// randomSaxon += may not be needed
        //trying to remove dead saxsons from array
        dmgCalc;
       if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
        
       } 
        return dmgCalc;
       
       

    }
    saxonAttack() {
        //Saxon stuff
        let randomNumS =  Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomNumS];
        //Viking Stuff
        let randomNumV =  Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking= this.vikingArmy[randomNumV];
        let saxonDmg = randomSaxon.strength;

        let dmgCalc = randomViking.receiveDamage(saxonDmg);// randomSaxon += may not be needed
        //trying to remove dead saxsons from array
        dmgCalc;
       if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomViking, 1);
        
       } 
        return dmgCalc;
       
    }

    showStatus(){
        if (this.saxonArmy.length === 0)  {
           return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
