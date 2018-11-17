// Soldier
class Soldier{
    constructor(health, strength){
    this.health = health;
    this.strength = strength;
    }
    attack(){
      return  this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

//Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        
    }
    receiveDamage(damage){
        this.health -= damage;
       if(this.health > 0){
           return `${this.name} has received ${damage} points of damage`;
       }else{
        return `${this.name} has died in act of combat`;
       }  
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat` 
        }
    }
}

// War
class War{
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
        const randomSaxon = this.random(this.saxonArmy);
        const randomViking = this.random(this.vikingArmy);
        const vikingStrength = randomViking.strength;

        const vikingAttack = randomSaxon.receiveDamage(vikingStrength);

        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
        return vikingAttack;
    }

    saxonAttack(){
        const randomSaxon = this.random(this.saxonArmy);
        const randomViking = this.random(this.vikingArmy);
        const saxonStrength = randomSaxon.strength;

        const saxonAttack = randomViking.receiveDamage(saxonStrength);

        if(randomViking.health <= 0){
           // this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
            this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);

        }
        return saxonAttack;

    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        }else if(this.vikingArmy.length === 1 && this.saxonArmy.length ===1){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

    random(array){;
        return array[Math.floor(Math.random()*array.length)];
    }

    // randomViking(){
    //     return this.vikingArmy[this.random(this.vikingArmy)];
    // }

    // randomSaxon(){
    //     return this.saxonArmy[this.random(this.saxonArmy)];
    // }
    
    
}

// var newWar= new War();
// War.addViking(new Viking('Mariana', 200, 200));