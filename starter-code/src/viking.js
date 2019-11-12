// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

 attack() {
    return this.strength
 }

 receiveDamage(damage){
     this.health = this.health - damage
 }
}




// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
            super(health, strength)
            this.name = name
        }
    
    attack() {
            return this.strength
         }
    
     receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.heath > 0){
              return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`}
   }

   battleCry(){
    return "Odin Owns You All!";
 }

}



class Saxon extends Soldier {
    
    
    
    receiveDamage(number){
      super.receiveDamage(number);
        if(this.health > 0){
            return `A Saxon has received ${number} points of damage`
        } else {
             return `A Saxon has died in combat`
                }
            }
        }



}


// class Saxon extends Soldier {
//     constructor(firstArg, secondArg){ //whay different arg not health,strenght`
//         super(firstArg, secondArg);
//     }
//     // you would never do this in real life because youre just wasting keystrokes
//     // if you simply dont define this method, you will inherit perfectly from the parents class
//     // but since we redefine it, we must call super in order to inherit from the parents consturctor function


//     receiveDamage(number){
//         super.receiveDamage(number);
//         if(this.health > 0){
//             return `A Saxon has received ${number} points of damage`
//         } else {
//            return `A Saxon has died in combat`
//         }
//     }

// }






// War
class War {}