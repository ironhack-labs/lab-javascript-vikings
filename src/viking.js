// Soldier
class Soldier {
    constructor ( health, strength ) {
        this.health = health;
        this.strength = strength;
    }
    attack (){
        return  this.strength 
    }

//     Soldado
// Método receiveDamage ()
// debe eliminar el daño recibido de la propiedad de salud
    
    receiveDamage ( damage ) {
        // this.damage = damage
        this.health = this.health - damage
    }
}

class Viking extends Soldier {
    constructor( name, health, strength ) {
        super( health,strength )
        this.name = name;
       
    }

    attack (){
        return  this.strength 
    }


    receiveDamage ( damage ) {
        // this.damage = damage;
        this.health = this.health - damage
        if ( this.health > 0 ) {
            return `${ this.name } has received ${ damage } points of damage`
        } else {
           return `${ this.name } has died in act of combat`
        }
    }
    battleCry () {
        return "Odin Owns You All!"
    }
}

 



// Saxon
class Saxon extends Soldier { 
    attack() {
        return  super.attack()  
    }
    receiveDamage( damage ) {

        this.health = this.health - damage
        if ( this.health > 0) {
            return `A Saxon has received ${ damage } points of damage`
        } else {
            return `A Saxon died in combat `
        }
    }
   


}

// War
class War {}
