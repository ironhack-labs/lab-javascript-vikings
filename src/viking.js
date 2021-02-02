//IronHack Miami Part Time WebDev Jan 2021 cohort
//Author: Jorge Sirias
//Date: Jan 30, 2021

// Soldier
class Soldier {

    constructor(health,strength){
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
class Viking extends Soldier{

    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage){

        this.health -= damage;

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
        

    }

    battleCry(){
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){

        this.health -= damage;

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return `A Saxon has died in combat`
        }

    }

}
 
// War
class War {

    constructor(){

        this.vikingArmy = [];
        this.saxonArmy  = [];

    }

    addViking(vikingObj){

        this.vikingArmy.push(vikingObj);

    }

    addSaxon(saxonObj){

        this.saxonArmy.push(saxonObj);

    }

    vikingAttack(){

        
        /* if(this.saxonArmy.length != 0){

            let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
            let randomVik = Math.floor(Math.random() * this.vikingArmy.length);

            let saxonWarrior  = this.saxonArmy[randomSax];
            let vikingWarrior = this.vikingArmy[randomVik];

            return saxonWarrior.receiveDamage(vikingWarrior.attack());

            if(saxonWarrior.this.health < 0){

                this.saxonArmy.splice(randomSax, 1);

            }


        } */

        /* let newSaxonArmy = [];

        this.saxonArmy.forEach( function (aSaxon, index){

            if(aSaxon.health > 0){
                newSaxonArmy.push(aSaxon);
            }

        });

        this.saxonArmy = newSaxonArmy; */

        let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVik = Math.floor(Math.random() * this.vikingArmy.length);

        let saxonWarrior  = this.saxonArmy[randomSax];
        let vikingWarrior = this.vikingArmy[randomVik];

        return saxonWarrior.receiveDamage(vikingWarrior.attack());

    }

    saxonAttack(){

        let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVik = Math.floor(Math.random() * this.vikingArmy.length);

        let saxonWarrior  = this.saxonArmy[randomSax];
        let vikingWarrior = this.vikingArmy[randomVik];

        return vikingWarrior.receiveDamage(saxonWarrior.attack());

    }

    showStatus(){

        if(this.saxonArmy.length === 0){

            return "Vikings have won the war of the century!"

        }
        else if(this.vikingArmy.length == 0){

            return "Saxons have fought for their lives and survived another day..." 

        }
        else{

            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
