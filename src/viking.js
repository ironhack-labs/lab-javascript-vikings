// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack(){
        return this.strength;
    };
    receiveDamage(someDamage){
       this.health -= someDamage;
    };
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    };
    receiveDamage(someDamage){
        this.health -= someDamage;
        if(this.health > 0){
            return  `${this.name} has received ${someDamage} points of damage`
        }else if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }
    };

    battleCry(){
        return "Odin Owns You All!";
    }
    
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(someDamage){
        this.health -= someDamage;
        if(this.health > 0){
            return  `A Saxon has received ${someDamage} points of damage`
        }else if(this.health <= 0){
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

        addViking(vikingSoldier){
            this.vikingArmy.push(vikingSoldier);
        };
        addSaxon(saxonSoldier){
            this.saxonArmy.push(saxonSoldier);
        };
        vikingAttack(){
            let oldHealth = Saxon.health;
            if(Viking.attack){
                Saxon.health = oldHealth - Viking.strength;
            }

        //    this.saxonArmy.forEach(() => {
        //     Viking.strength === Saxon.receiveDamage;
        //    });
        //    if(Saxon.health <= 0){

        //    }
            
        }
        saxonAttack(){}
        showStatus(){}
}
