// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health
        this.strength = strength //son el resultado de los argumentos 
    }

    attack(){
        return this.strength //los nombres son iguales aqui no importa? , porque se pone el This
    }

    receiveDamage(theDamage){
        this.health -= theDamage
    }
}

// Viking
class Viking extends Soldier{
    constructor (name,health,strength){
        super(health,strength)
        this.name = name
    }

    receiveDamage(theDamage){
        this.health -= theDamage

         if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`//sin this porque no es parte de la clase es el argumento del método
         } else {
            return `${this.name} has died in act of combat` 
         }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}



// let fernando = new Viking("Fernando",100,50)
// console.log(fernando)
// fernando.receiveDamage(50)
// console.log(fernando)

// Saxon
class Saxon extends Soldier{ //no pones el super porque se queda igual 
    receiveDamage(theDamage){
        this.health -= theDamage

         if (this.health <= 0) {
             return `A Saxon has died in combat` 
         } else {
            return `A Saxon has received ${theDamage} points of damage` //sin this porque no es parte de la clase es el argumento del método
         }
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        Saxon.receiveDamage(Viking.this.strength)
    //Selecciona un saxon a cual atacar
    //Generar un vikingo random 
    //
    }

    saxonAttack(){
        
    }

    showStatus(){

    }
}
