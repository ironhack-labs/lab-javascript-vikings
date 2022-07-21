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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    
        constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
        attack(){
            return this.strength;
        }
    
        receiveDamage(damage){
            this.health  -= damage;
            if (this.health > 0) {
                
                console.log(`${this.name} has received ${damage} points of damage`);
            }
            else 
            {
                console.log(`${this.name} has died in act of combat`);
            }
        }

        battleCry(){
            
            return "Odin Owns You All!";
        }

}

//Saxon

class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            
           console.log(`A Saxon  has received ${this.damage} points of damage`);
        }
        else 
        {
           console.log(`${this.name} has died in act of combat`);
        }
    }
}

// War
class War {
    //should assign an empty array to the vikingArmy property
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    //Armies Attack

    vikingAttack(){

        //should make Saxon receiveDamage() equal to the strength of a Viking
        this.saxonArmy.forEach(saxon => {
            this.vikingArmy.forEach(viking => {
                saxon.receiveDamage(viking.attack());
            });
        }
        );
        //should remove dead saxons from the army
        this.saxonArmy = this.saxonArmy.filter(saxon => {
            return saxon.health > 0;
        }
        );


    }

    saxonAttack(){
            
            //should make Viking receiveDamage() equal to the strength of a Saxon
            this.vikingArmy.forEach(viking => {
                this.saxonArmy.forEach(saxon => {
                    viking.receiveDamage(saxon.attack());
                });
            }
            );
            //should remove dead vikings from the army
            this.vikingArmy = this.vikingArmy.filter(viking => {
                return viking.health > 0;
            }
            );
        }

    showStatus(){
        console.log(`Vikings: ${this.vikingArmy.length}`);
        console.log(`Saxons: ${this.saxonArmy.length}`);
        if (this.saxonArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else if (this.vikingArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }

    
}
