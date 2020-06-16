// Soldier
class Soldier {
    constructor(health ,strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
   }
   receiveDamage(damage){
       this.health = this.health - damage;
   }
}
// Viking
class Viking extends Soldier{
    constructor( name,health,strength){
        super(health,strength)
        this.name= name;
        
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
      this.health -= damage
      if (this.health ===0 ) {
          return`${this.name} has died in act of combat`
          }
          else{
              return`${this.name} has received ${damage} points of damage`
          }
      }
      battleCry(){
          return "Odin Owns You All!";
      }
    }

// Saxon
class Saxon extends Soldier{
        
            
}

// War
class War   {
    constructor(){
        this.vikingArmy =[]
        this.saxonArmy = []
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let saxon = Math.floor(Math.random()*this.saxonArmy.length)
        let viking = Math.floor(Math.random()*this.vikingArmy.length)
        let saxonDamage = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[viking].strength)
        if(this.saxonArmy[saxon].health <= 0){
            (this.saxonArmy.length = this.saxonArmy.length-1)
        }
        return saxonDamage


    }
    saxonAttack(){
        let saxon = Math.floor(Math.random()*this.saxonArmy.length)
        let viking = Math.floor(Math.random()*this.vikingArmy.length)
        let vikingDamage = this.vikingArmy[viking].receiveDamage(this.saxonArmy[saxon].strength)
        if(this.vikingArmy[saxon].health <= 0){
            (this.vikingArmy.length = this.vikingArmy.length-1)
        }
        return vikingDamage


    }
    showStatus(){
        if (this.saxonArmy.length ===0) {
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length ===0){
            return "Saxons have fought for their lives and survived another day..."
        }else {
            return "viking and Saxons are still in the thick of battle."

        }
        
    }
}
