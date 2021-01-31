// Soldier
class Soldier {
    constructor( health, strength){

        this.health = health;
        this.strength = strength;
    }

    attack(){

        return this.strength
    }

    receiveDamage (damage) {

        this.health = this.health - damage;
        
    }




}

// Viking
class Viking extends Soldier {
    constructor( name, health, strength ){
    super(health, strength);

    this.name = name;

    }

    receiveDamage = function(damage){
        
        this.health = this.health - damage;
        
        if(this.health <= 0){

            let death = `${this.name} has died in act of combat`
            return death;
        }else{

            let hurt = `${this.name } has received ${damage} points of damage`;
            return hurt;
        }
    }

     battleCry = function(){

        let cry = 'Odin Owns You All!'; 
        return cry;

    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage = function(damage){

        this.health = this.health - damage;
        if(this.health > 0){

            return `A Saxon has received ${damage} points of damage`;
            
        }else{

            return "A Saxon has died in combat";
            

        }

    }


}

// War
class War {

     vikingArmy = [];
     saxonArmy  = [] ;


    addViking(viking){
        
        this.viking = viking;
        this.vikingArmy.push(this.viking);
        console.log(this.vikingArmy);

    }

    addSaxon(saxon){

        this.saxon = saxon;
        this.saxonArmy.push(this.saxon);
        console.log(this.saxonArmy);

    }

    vikingAttack(){

        let target = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingWarrior =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength;
        let damage = vikingWarrior;
        this.saxonArmy[target].receiveDamage(damage);
        

        for(let i = 0; i < this.saxonArmy.length ; i++){

            if(this.saxonArmy[i].health < 0){

                
                this.saxonArmy.splice(i,1);
                
            }

        }
        let resultOfCalling = damage + ' - ' + vikingWarrior;
         
         return resultOfCalling;
       
    }

    saxonAttack(){

        let target = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonWarrior =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength;
        let damage = saxonWarrior;

        console.log(this.vikingArmy[target].receiveDamage(damage));

        for(let i = 0; i < this.vikingArmy.length ; i++){

            if(this.vikingArmy[i].health < 0){

                this.vikingArmy.splice(i,1);
            }

        }
        let resultOfCalling = damage + ' - ' + saxonWarrior;
         
         return resultOfCalling;




    }

    showStatus(){

        if(this.saxonArmy.length === 0){

            return "Vikings have won the war of the century!";
        
        } else if(this.vikingArmy.length === 0){

            return "Saxons have fought for their lives and survived another day";
        
        } else{

            return "Vikings and Saxons are still in the thick of battle.";

        }

    }

}


let warrior1 = new Viking('Antonio', 100, 120);
let saxon1 = new Saxon(100, 20);


let newWar = new War();
newWar.addViking(warrior1);
newWar.addSaxon(saxon1);

newWar.vikingAttack();
//newWar.saxonAttack();
newWar.showStatus();


















// function calcSumOfMultiples(array) {

//     let sum = 0;

//     for(let i = 0; i < array.length ; i++){

//         if(array[i] % 3 === 0|| array[i]% 5 ===0 ){

//             sum += array[i];
//             console.log(array[i]);
//         }

//     }    


//     return sum;
// }

    
  //console.log(Math.floor(Math.random(array.length)));
