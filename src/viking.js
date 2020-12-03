//Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;                                           // Igualé los valores a 300 y 100, en vez de la health y strength generica y casi me vuelvo loco buscando el error, porque con viking no pasaba nada , pero a saxon no le valian esos valores.
        this.strength = strength;
    }
       attack() {                                                          // debe de ser una funcion
           return this.strength                                            // devuelve la propiedad stregnth cada vez que llamas a attack  
                                                                           // recibe cero argumentos               
       }
       receiveDamage(damage){                                              // es una funcion, recibe damage como argumento
           this.health = this.health - damage                              // cuando recibe daño, se resta el daño a la salud
                 
       } 
   
   
   }    
   
   // Viking
    class Viking extends Soldier{
       constructor(name, health, strength){        //creamos nuevas propiedades a partir de soldier y, añadimos adicionalmente .name
       super(health,strength)                      //modificamos 
       this.name = name
       }
       attack(){
           return this.strength                     // No es necesario porque ya hereda el ataque de soldier
       }
       receiveDamage(damage){
           //this.health = this.health - damage
           super.receiveDamage(damage);             //"super." estoy llamando al padre cuando pongo .
           if(this.health > 0){
               return (`${this.name} has received ${damage} points of damage`)
           }
           return (`${this.name} has died in act of combat`)
       }
       battleCry(){
           return `Odin Owns You All!`
       }
   } 
   
    // Saxon
   
   class Saxon extends Soldier {
   
     receiveDamage(damage){
        // this.health = this.health - damage
        super.receiveDamage(damage);
           if(this.health > 0){
               return(`A Saxon has received ${damage} points of damage`)
           }   
           return (`A Saxon has died in combat`)
       }   
   }               
   
   // War
   class War {
       constructor() {
           this.vikingArmy = []
           this.saxonArmy = []
           
       }
    
    addViking(viking){
        this.vikingArmy.push(viking)

    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)

    }
    getRandomElements(array) {
        return array[Math.floor(array.length * Math.random())]
    }

    vikingAttack(){
        const randomSaxon = this.getRandomElements(this.saxonArmy);
        const randomViking = this.getRandomElements(this.vikingArmy);
        const result = randomSaxon.receiveDamage(randomViking.strength);
        this.saxonArmy = this.saxonArmy.filter(soldierSaxon => soldierSaxon.health > 0);
        return result;




    /*     if(this.vikingArmy.length === 0){
        }
        else{

        let v1 = Math.floor(Math.random*this.vikingArmy.length)
 
        let s1 = Math.floor(Math.random*this.saxonArmy.length)
        let hit = this.vikingArmy[v1].strength
    
        this.saxonArmy[s1].receiveDamage(hit)
        if( this.saxonArmy[s1].health <= 0){
            this.saxonArmy.splice(s1)
        }
        return hit;
        }
        return 0; */
    }

    
    
    saxonAttack(){
        const randomSaxon = this.getRandomElements(this.saxonArmy);    
        const randomViking = this.getRandomElements(this.vikingArmy);
        const result = randomViking.receiveDamage(randomSaxon.strength);
        this.vikingArmy = this.saxonArmy.filter(soldierViking => soldierViking.health > 0);
        return result;
      
      
      
      
        /*   let v1 = Math.floor(Math.random*this.vikingArmy.length)
        console.log(v1)
        let s1 = Math.floor(Math.random*this.saxonArmy.length)

        let hit = this.saxonArmy[s1].strength
       
        this.vikingArmy[v1].receiveDamage(hit)
        if( this.vikingArmy[v1].health <= 0){
            this.vikingArmy.splice(v1)
        }
        return hit; */
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
       














   