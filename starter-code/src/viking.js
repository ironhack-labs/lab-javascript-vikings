// Soldier
class Soldier {

    constructor(healthArg, strengthArg) {

        this.health = healthArg
        this.strength = strengthArg
        
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

    constructor(nameArg, healthArg, strengthArg){

        super( healthArg, strengthArg)
        this.name = nameArg
    }
        receiveDamage(damage)   {

        
            this.health -= damage;

            if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
             } else {
            return `${this.name} has died in act of combat`
             }

        }

        battleCry() {
            return "Odin Owns You All!"

        }

             
     
}
// Saxon
class Saxon extends Soldier{
    constructor(healthArg, strengthArg ){

        super(healthArg, strengthArg)
    }
        
    receiveDamage(damage)   {

        
            this.health -= damage;

            if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
             } else {
            return `A Saxon has died in combat`
             }

        }    
}

// War
class War {
    constructor () {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        [].push.call(this.vikingArmy,viking)

    }

    addSaxon(saxon){
        [].push.call(this.saxonArmy, saxon)
    }



    vikingAttack(){

        
           let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
           let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

           let fight = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
           if (this.saxonArmy[randomSaxon].health <= 0) {
               this.saxonArmy.splice(randomSaxon,1)
           }
           return fight
        
    }


    saxonAttack(){

        
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        let fight2 = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking,1)
        }
        return fight2
     
 }

 showStatus(){


if (this.vikingArmy.length <= 0) {  
    return "Saxons have fought for their lives and survive another day..."}
 else if (this.saxonsArmy.length <=0){   
        return "Vikings have won the war of the century!"
    } else { 
        return "Vikings and Saxons are still in the thick of battle."
    }
 }


}





/*class Person {      // Método constructor, único y opcional, conectado con la palabra clave new
            constructor(name, age, hobbies, celiac) {
                this._name = name
                this._age = age
                this._hobbies = hobbies
                this._celiac = celiac
                this._alive = true      // Puedo tener propiedades internas con valores por defecto
           receiveDamage(damage){      this.health -= damage         if(this.health>0){        return `${this.name} has received ${damage} points of damage`       }else if(this.health<=0){        return `${this.name} has died in act of combat`     }   }
Entrada de mensaje


Enviar mensaje a Andrés González
           
           
           
            }*/

