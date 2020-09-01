// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(dmg) {
        this.health = this.health - dmg;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super (health, strength);
        this.name = name;
    }
    receiveDamage(dmg) {
        this.health -= dmg;
        if(this.health <= 0){
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${dmg} points of damage`;
        }
    }
   
    battleCry() {
        return "Odin Owns You All!";
    }
   
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
      }
    
      receiveDamage(dmg) {
        this.health-=dmg;
        if(this.health <= 0){ return `A Saxon has died in combat`
    } else
    {return `A Saxon has received ${dmg} points of damage`}
      }
      
}

// War
class War  {
    constructor (){
        this.vikingArmy =[];
        this.saxonArmy=[];
    }
    addViking (viking) {
        this.vikingArmy.push(viking);

    }

    addSaxon (saxon){
        this.saxonArmy.push(saxon);

    }
    vikingAttack() {
        console.log('------vikiking attack------');
        if(this.vikingArmy.length > 0) {
            for(var i = 0; i < this.vikingArmy.length; i++){
                let dmg = this.vikingArmy[i].attack();
                let recDmg = this.saxonArmy[i].receiveDamage(dmg);
                if(this.saxonArmy[i].health <= 0) {
                    this.saxonArmy.shift(i);
                    return recDmg;
                } else {
                    return recDmg;
                }
            }
        } else {
            return 0;
        }
    }
    saxonAttack() {
        if(this.saxonArmy.length > 0) {
            for(var j = 0; j < this.saxonArmy.length; j++) {
                let dmg = this.saxonArmy[j].attack();
                let recDmg = this.vikingArmy[j].receiveDamage(dmg);
                if(this.vikingArmy[j].health <= 0) {
                    this.vikingArmy.shift(j);
                    return recDmg;
                }
                return recDmg;
            }
        } else {
            return 0;
        }
    }
    showStatus() {
        if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        } else {
            if(this.saxonArmy.length == 0 && this.vikingArmy.length > 0) {
                return "Vikings have won the war of the century!";
            } else {
                return "Saxons have fought for their lives and survived another day...";
            }
        }
    }



        
    }

