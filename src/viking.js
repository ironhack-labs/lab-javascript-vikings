// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){ 
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super (health, strength);
        this.name = name;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`;
        }else{
            return `${this.name} has died in act of combat`;
        }

    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`;
        }else{
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        
        const viking = this.vikingArmy[randomVikingIndex]; 
        const saxon = this.saxonArmy[randomSaxonIndex]; 

        const attackSaxon = saxon.receiveDamage(viking.attack()); 

        const isSaxonAlive = saxon.health > 0; 

        /*if (!isSaxonAlive) {
            this.saxonArmy = this.saxonArmy.filter(
              (_, i) => i !== randomSaxonIndex
            );
        }*/

        if (!isSaxonAlive){
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return attackSaxon;
    } 

    saxonAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        
        const viking = this.vikingArmy[randomVikingIndex]; 
        const saxon = this.saxonArmy[randomSaxonIndex]; 

        const attackViking = viking.receiveDamage(saxon.attack());

        const isVikingAlive = viking.health > 0;

        if(!isVikingAlive){
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return attackViking;
    } 

    showStatus(){
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
} 


