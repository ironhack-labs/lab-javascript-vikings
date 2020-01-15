
class Soldier {

    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        

        this.health -= damage;

    }

}


class Viking extends Soldier {

    constructor(name,health, strength){
        super(name)

        this.name = name;

        this.health = health;

        this.strength = strength;   
    }

    receiveDamage(damage) {
        this.health -= damage;  


        if (this.health >= 1 ) {
             return `${this.name} has received ${damage} points of damage`;
        }else if(this.health <= 0){
            return `${this.name} has died in act of combat`;

        }
     


                        } 

    battleCry(){
return 'Odin Owns You All!'
    }

}





class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health  -=  damage;  


        if (this.health >= 1 ) {
             return `A Saxon has received ${damage} points of damage`;
        }else if(this.health <= 1){
            return `A Saxon has died in combat`;

        }
     


                        } 
}

class War {

    

     vikingArmy =  [];

    saxonArmy  = []


   addViking(Viking){

    this.vikingArmy.push(Viking);

   }
   addSaxon(Saxon){

    this.saxonArmy.push(Saxon);

   }
   vikingAttack(){
    
    this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)

        
    if(this.saxonArmy[0].health <= 0){
     this.saxonArmy.shift();
     return 'A Saxon has died in combat';
    }


   }
   saxonAttack(){
    
    this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)

        
    if(this.vikingArmy[0].health <= 0){
  
     this.vikingArmy.shift();


   

    }
   
    return `Harald has received 25 points of damage`;
   

   }


  showStatus() {
       if (!this.saxonArmy.length){

        return 'Vikings have won the war of the century!';
       }
       if (!this.vikingArmy.length){

        return 'Saxons have fought for their lives and survived another day...';
       }

       if(this.saxonArmy.length == this.vikingArmy.length){
return 'Vikings and Saxons are still in the thick of battle.';
       }
   }
}
