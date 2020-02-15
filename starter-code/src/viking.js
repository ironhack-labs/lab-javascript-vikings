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
        this.health = this.health - damage;
    }

}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }
        else{
            return `${this.name} has received ${damage} points of damage`;    
        }
        
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health = this.health - damage;

        if(this.health <= 0){
            return `A Saxon has died in combat`;
        }
        else{
            return `A Saxon has received ${damage} points of damage`;    
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

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        
        let vikingStrength = this.vikingArmy[randomViking].attack();
        
        let attackResult = this.saxonArmy[randomSaxon].receiveDamage(vikingStrength);

        if (this.saxonArmy[randomSaxon].health <= 0){
            this.saxonArmy.splice(randomSaxon,1);
        }

        return (attackResult);

        

    }

    saxonAttack(){

        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        
        let vikingHealthBefore = this.vikingArmy[randomViking].health;
        let saxonStrength = this.saxonArmy[randomSaxon].attack();
        
        let attackResult = this.vikingArmy[randomViking].receiveDamage(saxonStrength);

        let vikingHealthAfter = this.vikingArmy[randomViking].health;


        if (this.vikingArmy[randomViking].health <= 0){
            this.vikingArmy.splice(randomViking,1);
        }

        return (attackResult);

    }

    // Super Bonus --> insert attackerArmy and defenderArmy
    battle(attacker, defender){

        let randomAttacker = Math.floor(Math.random() * attacker.length);
        let randomDefender = Math.floor(Math.random() * defender.length);

        let attackerStrength = attacker[randomAttacker].attack();
        
        let attackResult = defender[randomDefender].receiveDamage(attackerStrength);


        if (defender[randomDefender].health <= 0){
            defender.splice(randomDefender,1);
        }


        return (attackResult);

    }

    showStatus(){

        if(this.vikingArmy.length == 0){
            return 'Saxons have fought for their lives and survived another day...';
        }
        else if(this.saxonArmy.length == 0){
            return 'Vikings have won the war of the century!';
        }
        else{
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }

}
