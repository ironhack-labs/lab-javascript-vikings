// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health -= damage;
    };

};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
      };
      attack() {
        return this.strength;
      };
      receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
          return `${this.name} has received ${damage} points of damage`;
        } else {
        return `${this.name} has died in act of combat`;
    }
        
      };
      battleCry() {
        return "Odin Owns You All!";
      };
};

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
          return `A Saxon has received ${damage} points of damage`;
        } else {
        return `A Saxon has died in combat`;
    }
      };

}

// War
class War {
    constructor (){
    this.vikingArmy = []
    this.saxonArmy = []
    }

    addViking(Viking) {
     this.vikingArmy.push(Viking)   
    }
    
    addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        //choose viking and Saxon at random
        let saxonNum = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingNum = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[saxonNum];
        let randomViking = this.vikingArmy[vikingNum];
        //update Saxon so the damage is equal to the strength of the Viking Army
        let saxon = randomSaxon.receiveDamage(randomViking.strength);
        //console.log(saxon);
        //Deveop if statement to remove the the random Saxon
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(saxonNum,1)
        }
        return saxon;
        //math.floor and math.random splice
    }
    saxonAttack() {
        //choose viking and Saxon at random
        let saxonNum = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingNum = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[saxonNum];
        let randomViking = this.vikingArmy[vikingNum];
        //update Viking so the damage is equal to the strength of the Saxon Army        
        let v = randomViking.receiveDamage(randomSaxon.strength);
        //console.log(v);
        
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(vikingNum,1)
        };
        return v;
    }
    showStatus() {
       //If Else Statement = SUCCESS
        // if (this.saxonArmy.length === 0) {
        //     return `Vikings have won the war of the century!`;
        // } else if (this.vikingArmy.length === 0) {
        //     return `Saxons have fought for their lives and survived another day...`;
        // } else {
        //     return `Vikings and Saxons are still in the thick of battle.`;
        // } 

        //Switch Case = SUCCESS
        let saxonArmyDead = this.saxonArmy.length === 0;
        let vikingArmyDead = this.vikingArmy.length === 0;
        switch (true) {
            case saxonArmyDead:
            return `Vikings have won the war of the century!`;
            break;
            case vikingArmyDead:
            return `Saxons have fought for their lives and survived another day...`;
            break;
            default:return `Vikings and Saxons are still in the thick of battle.`
        }
        
    }

    
}
