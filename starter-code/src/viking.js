// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack (){
        return this.strength
    }
    receiveDamage( damage){
        this.health = this.health - damage
    }
}

// Viking
 //va a heredar las propiedades de la clase soldier y vamos a agregar su nombre, con extends vamos a extender las propiedades de la clase 
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)//es la notacion que va a traer todo del constructor de Soldie
        this.name = name    
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health == 0 ){
            return `${this.name} has died in act of combat`
        }else{
            return `${this.name} has received ${damage} points of damage`
        }
    }
    attack (){
        return this.strength
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
      super(health, strength);
    }
    attack (){
        return this.strength
    }
    receiveDamage(damage) {
      this.health = this.health - damage;
      if (this.health > 0)
        return `A Saxon has received ${damage} points of damage`;
      else return `A Saxon has died in combat`;
    }
  }

// War
class War {
    constructor(){
        this.armyViking = []
    }
    
}