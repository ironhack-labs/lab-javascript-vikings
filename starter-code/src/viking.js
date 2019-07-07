//Creamos clase constructor
// Soldier
class Soldier {
    constructor (health,strength){
        this.health = health
        this.strength = strength
    }
    //métodos de soldier
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}
 //Instancias de soldier
    const soldier1 = new Soldier('3 hearts','4 strength')
    const soldier2 = new Soldier('5 hearts','5 strength')
    //console.log('el primer soldado tiene',soldier1.health, 'y ',soldier1.strength)
    //soldier1.attack(7)
    //console.log('el soldado ha atacado con ',soldier1.strength, 'puntos de fuerza')

// Viking
class Viking extends Soldier { 
    constructor(name,health,strength) {
        super(health,strength)
        this.name = name
    }               
    
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage

        if(this.health == 0){ //está muerto
            //return ('this.name')
            return `${this.name} has died in act of combat`

        }else{

            return `${this.name} has received ${damage} points of damage`
        
        }
            
    }

    battleCry(){
        return ('Odin Owns You All!')
    }
    
}
//const soldier3 = new Viking('Harald',5,5)
//soldier3.receiveDamage(5)
//console.log(soldier3.name,soldier3.strength,soldier3.health)


// Saxon
class Saxon extends Soldier{

    constructor(health,strength){
        super(health,strength)
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage

        if(this.health == 0){ //está muerto
            
            return `A Saxon has died in combat`

        }else{

            return `A Saxon has received ${damage} points of damage`
        
        }
    }

}

// War
class War {

    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
      
    }
    //método añadir vikingo
    addViking (Viking){
        this.vikingArmy.push(Viking)
    }
    //método añadir saxon
    addSaxon (Saxon){
        this.saxonArmy.push(Saxon)
    }
   
    saxonAttack() {
        //un saxon y un vikingo random
        let ramdomVik = Math.floor(Math.random() * this.vikingArmy.length)
        let ramdomSax = Math.floor(Math.random() * this.saxonArmy.length)
        let resultAttack = this.vikingArmy[ramdomVik].receiveDamage(
          this.saxonArmy[ramdomSax].attack());

        if (this.vikingArmy[ramdomVik].health <= 0) {
          this.vikingArmy.splice(ramdomVik, 1);
        }
        return resultAttack;
    }

    vikingAttack() {
        //un saxon y un vikingo random
        let ramdomVik = Math.floor(Math.random() * this.vikingArmy.length)
        let ramdomSax = Math.floor(Math.random() * this.saxonArmy.length)
        let resultVik = this.saxonArmy[ramdomSax].receiveDamage(
          this.vikingArmy[ramdomVik].attack());

        if (this.saxonArmy[ramdomSax].health <= 0) {
          this.saxonArmy.splice(ramdomSax, 1);
        }
        return resultVik;
    }

    
    showStatus(){

        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
        else if (this.vikingArmy.length == 0) {
            return `Saxons have fought for their lives and survive another day...`
        }
        else if (this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`
        }
        
    }
}