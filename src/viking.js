// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health; //health es el valor que entra por argumento
        this.strength = strength;
    }
    attack() {
        //¿ya no es necesario referirse a la propiedad con this??
        return this.strength
    }
    receiveDamage(damage) {
        //por que no es necesario pasarse tambien el argumento health??
        this.health = this.health - damage
    }
}
//Viking
//Inheritance
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
  
    
//Reimplementamos el método receiveDamage() añadiendo
//la funcionalidad que devuelva si está vivo o muerto
receiveDamage(damage){
    super.receiveDamage(damage)
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else {
        //¿puede ponerse directamente el mensaje que deberia devolver?
        return `${this.name} has died in act of combat`
    }
    }
    //No entiendo por que es necesario poner el return ¿no deberia tomarlo de la clase Person?
    attack() {
       return this.strength
    }
    

battleCry(){
    var message = "Odin Owns You All!"
    return message

}
}

// // Saxon
class Saxon extends Soldier {
    //Se puede prescindir del metodo constructor() 
    //ya que se hereda todo del padre en super(), no hay que añadir ningun parametro
    constructor(health, strength) {
        super(health, strength)
    }
    //Reimplementamos el metodo receiveDamage()
    //attack()  
    receiveDamage(damage) { 
        super.receiveDamage(damage)
        var alive = `A Saxon has received ${damage} points of damage`
        var death = `A Saxon has died in combat`
      
            if (this.health > 0) {
                return alive
                //return `A Saxon has received ${damage} points of damage`
            } else {
                //¿puede ponerse directamente el mensaje que deberia devolver?
                //return `A Saxon has died in combat`
                return death
            }
        
    }
    
    }

// // War
// //class War { }
