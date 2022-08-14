// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength
    };
    attack (){
        return this.strength;
    };
    receiveDamage (thedamage) {
        this.thedamage=thedamage;
        this.health=this.health - this.thedamage;
    };
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    };
    receiveDamage (vikingReceivedDamage) {
        super.receiveDamage (vikingReceivedDamage);
        if (this.health>0){
            return `${this.name} has received ${vikingReceivedDamage} points of damage`;
        }else {
            return `${this.name} has died in act of combat`;

        }
    }
    battleCry (){
        return "Odin Owns You All!";
    };
}

// Saxon
class Saxon extends Soldier{
    constructor (health, strength){
        super(health, strength);
    };
    receiveDamage (saxonReceivedDamage) {
        super.receiveDamage (saxonReceivedDamage);
        if (this.health>0){
            return `A Saxon has received ${saxonReceivedDamage} points of damage`;
        }else {
            return `A Saxon has died in combat`;

        }
    }
}

// War
class War {

    vikingArmy=[];
    saxonArmy=[];
    
    addViking (aViking){
        this.aViking=aViking;
        this.vikingArmy.push(this.aViking);
    }
    addSaxon (aSaxon){
        this.aSaxon=aSaxon;
        this.saxonArmy.push(this.aSaxon);
    }

    vikingAttack (){
        const attackViking=this.vikingArmy.length;
        const attackVResult=attackSaxon.receiveDamage(this.saxonArmy.strenght)
        
    };

    saxonAttack (){
        const attackSaxon=this.saxonArmy.length;
    };

    showStatus (){
        if (!this.saxonArmy.length){
            return "Vikings have won the war of the century!";
        } else if (!this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";        
        }
    }
}
