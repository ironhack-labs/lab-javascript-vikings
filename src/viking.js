// Soldier
class Soldier {
    constructor(health, strength) {
    
        this.health = health;
        this.strength = strength;
    };

    attack() {
        
        return this.strength;
    }

    receiveDamage(damage) {
        
        this.health= this.health - damage;
    }

}

// Viking
class Viking extends Soldier {

    constructor(name,health,strength) {
     
        super(health,strength);

        this.name = name;
 }

 receiveDamage(damage) {
        
     
     this.health = this.health - damage;
     if (this.health > 0) {
         
         return `${this.name} has received ${damage} points of damage`;
     }
     else {
         return `${this.name} has died in act of combat`;
     }
 }
    
    battleCry() {
        
        return 'Odin Owns You All!';

    }


}

// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
     
        super(health, strength);
    }

    receiveDamage(damage) {
        
     
        this.health = this.health - damage;
        if (this.health > 0) {
            
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }

}

// War
class War {


    constructor() {
        
        this.vikingArmy = [];
        this.saxonArmy = [];


    };

    addViking(Viking) {

        this.vikingArmy.push(Viking);

        
    };

    addSaxon(Saxon) {
        
        this.saxonArmy.push(Saxon);

    };

    vikingAttack() {

        let pickVik = Math.floor(Math.random() * this.vikingArmy.length);

        let pickSax = Math.floor(Math.random() * this.saxonArmy.length);
        
        let attack = this.saxonArmy[pickSax].receiveDamage(this.vikingArmy[pickVik].strength);

        if (this.saxonArmy[pickSax].health <= 0) {
            this.saxonArmy.splice(pickSax);
        }
    
        return attack;

        
    };

    saxonAttack() {

        let pickVik = Math.floor(Math.random() * this.vikingArmy.length);

        let pickSax = Math.floor(Math.random() * this.saxonArmy.length);
        
        let attack = this.vikingArmy[pickVik].receiveDamage(this.saxonArmy[pickSax].strength);

        if (this.vikingArmy[pickVik].health <= 0) {
            this.vikingArmy.splice(pickVik);
        }
    
        return attack;
        
    };

    showStatus() {
        
        if (this.saxonArmy.length === 0) {
           
            return 'Vikings have won the war of the century!';

        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        
        } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            
            return 'Vikings and Saxons are still in the thick of battle.';
        }
        

    };



}
