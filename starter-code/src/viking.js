// Soldier
function randomNum (minimum, maximum) {
  return Math.random() * (maximum - minimum) + minimum;
}
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack () {
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
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health>0){
            return this.name + " has received " + damage + " points of damage";
        }else{
            return this.name + " has died in act of combat";
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
    
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health>0){
            return "A Saxon has received " + damage + " points of damage";
        }else{
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);

    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    //private method
    // _purgeSaxonArmy (){
    //     for(let saxon of this.saxonArmy){
    //         if(saxon.health <= 0){
    //             const index = this.saxonArmy.indexOf(saxon){

    //             }
    //         }
    //     }
    // }
    vikingAttack(){
        // let rand = randomNum(0, this.saxonArmy.length -1);
        // let rand2 = randomNum(0, this.vikingArmy.length - 1);
        // var oldHealth = saxonArmy[rand].health;
        // saxonArmy[rand].health = oldHealth - this.saxonArmy[rand].receiveDamage(this.vikingArmy[rand2].strength);
        // Saxon.receiveDamage = Viking.strength;
        // const vikingCount = this.vikingArmy.length;
        // const saxonCount = this.saxonArmy.length;
        const vikingIndex = randomNum(0, this.vikingArmy.length -1);
        const saxonIndex = randomNum(0, this.saxonArmy.length -1);

        const viking = this.vikingArmy[vikingIndex];
        const saxon = this.saxonArmy[saxonIndex];

        const vikingStrength = viking.strength;
        const attackMessage = saxon.receiveDamage(vikingStrength);

        for(let saxon of this.saxonArmy){
            if(saxon.health <= 0){
                const index = this.saxonArmy.indexOf(saxon);
                this.saxonArmy.splice(index, 1);
            }
        }

        return attackMessage;
    }
    saxonAttack(){
        const vikingIndex = randomNum(0, this.vikingArmy.length -1);
        const saxonIndex = randomNum(0, this.saxonArmy.length -1);

        const viking = this.vikingArmy[vikingIndex];
        const saxon = this.saxonArmy[saxonIndex];

        const saxonStrength = saxon.strength;
        const attackMessage = viking.receiveDamage(saxonStrength);

        for(let viking of this.vikingArmy){
            if(viking.health <= 0){
                const index = this.vikingArmy.indexOf(viking);
                this.vikingArmy.splice(index, 1);
            }
        }

        return attackMessage;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        }else if(this.saxonArmy.length >=1 && this.vikingArmy.length >=1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


