// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength

    }
    receiveDamage(damage){
        this.health -= damage

    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name = name;

    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return ` ${this.name} has recived ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    

    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
       
        this.health -= damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        
            return  "A Saxon has died in combat"
        

}
}
// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy  = [];
    }
addViking(Viking){

    this.vikingArmy.push(Viking)
}


addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
}


    vikingAttack() {
        //Con el metodo Math.floor(Math.random()),multipicado por la longitud del array nos da el saxon elegido.
      let saxon = this.saxonArmy[Math.floor(Math.random())* this.saxonArmy.length]
      let viking = thid.vikingArmy[Math.floor(Math.random())* this.vikingArmy.length]
        // EL saxon se lleva el daño del vikingo
      const result = saxon.receiveDamage(this.vikingAttack());
      //Si la vida es menor a 0, dentro de saxonArmy elegimos un saxon y le quitamos 1 
      if(saxon.health <0){
          this.saxonArmy.splice(this.saxonArmy.indexOf(saxon),1)
      }
    }

saxonAttack(){

    let saxon = this.saxonArmy[Math.floor(Math.random())* this.saxonArmy.length];
    let viking = this.vikingArmy[Math.floor(Math.random())*this.vikingArmy.length]

    const result = Viking.receiveDamage(this.saxonAttack());

    if(this.viking.health < 0){
        this.vikingArmy.splice(this.vikingArmy.indexOf(viking),1)
    }
   
   
}

showStatus(){
    if(this.saxonArmy.length===0){
        return "Vikings have won the war of the century!"
    }else if(this.saxonArmy.lengt===0){
        return "Saxons have fought for their lives and survived another day..."

    }else{
        return  "Vikings and Saxons are still in the thick of battle."
    }
}



}
