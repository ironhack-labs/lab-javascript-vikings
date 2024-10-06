// Soldier
class Soldier {
    constructor(health, strength) {

        this.health = health; 
        this.strength = strength; 

    }

    attack() {

        return this.strength;    
    }

    receiveDamage(damage) {

        this.health -= damage; //Actualizo la salud con la cantidad del daño infringido. 

    }

}

// Viking
class Viking extends Soldier{

    constructor(name, health, strength){
         super(health, strength);
         this.name = name; //Si lo pongo antes que "super" Jasmine lo califica de erróneo. 
    }

    receiveDamage(damage) {

        this.health -= damage; //Actualizo la salud con la cantidad del daño infringido. 

        if (this.health > 0){ //Si sigue vivo es porque su salud es superior a 0, suponiendo que eso sea la muerte.

            return `${this.name} has received ${damage} points of damage`; 
        
        }
        else {return `${this.name} has died in act of combat`}; //Aquí se incluye si es 0 o menos. 

    }


    battleCry(){

        return `Odin Owns You All!`; 

    }

}

// Saxon
class Saxon extends Soldier {

    constructor(health, strength){ //Si no se incluye funciona igual. 
        super(health, strength);
       
   }


    receiveDamage(damage){

        this.health -= damage; 

        if(this.health > 0){

            return `A Saxon has received ${damage} points of damage`; 
        }
        else {return `A Saxon has died in combat`;}

    }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []; 

    }

    addViking(Viking){

        this.vikingArmy.push(Viking);
    }


    addSaxon(Saxon){

        this.saxonArmy.push(Saxon);

    }

    vikingAttack(){

        
        /*should make Saxon receiveDamage() equal to the strength of a Viking
            should remove dead saxons from the army
            should return result of calling receiveDamage() of a Saxon with the strength of a Viking*/

    }

    saxonAttack(){



    }

    showStatus(){

        if (this.saxonArmy.length === 0){

            return `Vikings have won the war of the century!`; 
        }
        else if (this.vikingArmy.length === 0){

            return `Saxons have fought for their lives and survived another day...`;
        }
        else {return `Vikings and Saxons are still in the thick of battle.`;}
    }



}

