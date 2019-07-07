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

