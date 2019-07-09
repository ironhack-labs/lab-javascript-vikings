// Soldier

class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
        this.attack = function()  {
            return this.strength;
        },
        this.receiveDamage = function(damage) {
            this.health = this.health - damage;
        };

    }
}

// Viking

class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg)    {
        super(healthArg, strengthArg);
        this.name = nameArg;

        // this.health = healthArg;
        // this.strength = strengthArg;
        // this.attack = function()    {
        //     return this.strength;
        // },

        this.receiveDamage = function(damage)   {
            this.health = this.health - damage;
            if (this.health > 0)    {
                return (this.name + " has received " + damage + " points of damage");
            } else {
                return (this.name + " has died in act of combat");
            }
            }
        
        this.battleCry = function() {
            return ("Odin Owns You All!")
        }
        }
    }

// Saxon

class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg);
    
    this.receiveDamage = function(damage)   {
        this.health = this.health - damage;
        if (this.health > 0)    {
            return ("A Saxon has received " + damage + " points of damage");
        } else {
            return ("A Saxon has died in combat");
        }
    }
  }
}

// War

class War {
    constructor() {

        this.vikingArmy = [],
        this.saxonArmy = [];
    }
         addViking (viking) {
            this.vikingArmy.push(viking);
        }

        addSaxon (saxon)   {
            this.saxonArmy.push(saxon);
        }

        vikingAttack ()  {
            let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
            let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
            let result = randomSaxon.receiveDamage(randomViking.strength); 
            this.saxonArmy = this.saxonArmy.filter(soldier => soldier.health > 0);
            return result;
        }
        saxonAttack ()  {
            let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
            let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
            let result = randomViking.receiveDamage(randomSaxon.strength); 
            this.vikingArmy = this.vikingArmy.filter(soldier => soldier.health > 0);
            return result;
        }
        showStatus ()   {
            if (this.saxonArmy.length == 0)   {
                return ("Vikings have won the war of the century!");
             } else if (this.vikingArmy.length == 0)  {
                return ("Saxons have fought for their lives and survive another day...");
             } else if (this.saxonArmy.length != 0 && this.vikingArmy.length != 0)  {
                return ("Vikings and Saxons are still in the thick of battle.");
             }
        }
}

