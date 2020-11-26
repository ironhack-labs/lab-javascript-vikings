//Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;                      // Igualé los valores a 300 y 100, en vez de la health y strength generica y casi me vuelvo loco buscando el error, porque con viking no pasaba nada , pero a saxon no le valian esos valores.
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
           return this.strength
       }
       receiveDamage(damage){
           this.health = this.health - damage
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
         this.health = this.health - damage
           if(this.health > 0){
               return(`A Saxon has received ${damage} points of damage`)
           }   
           return (`A Saxon has died in combat`)
       }   
   }               
   
   // War
   class War {}