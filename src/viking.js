









// //1 : la clase debe recibir dos argumentos (health and strength)
// //2 : debe recibir la propiedad health como primer argumento
// //3 : debe recibir la propiedad strength como segundo argumento
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
      
    }     //constructor es un método especial para crear e inicializar un objeto derivado de una nueva instancia de una clase
  
  // //4 crear un attack() method
  // //5 debe recibir 0 argumentos
  // //6 debe regresar la propiedad strength del soldado
    
      attack() {
      return this.strength;
        
      }

// //7 receiveDamage() method
// //debe ser una función 
// //debe recibir como argumento (the damage)
// //debe restar el daño recibido a la propiedad health
// //no debe regresar nada


      receiveDamage (damage){
        this.damage = damage;
        this.health -= damage

      }
  }
    
  // Viking
  class Viking extends Soldier{

    // constructor(name) {
    //     this.name = name;
    // }   

    constructor(name, health, strength) {
      super(name, health, strength);

      this.name=name;
      this.health=health;
      this.strength=strength;
      }
      // should return "NAME has received DAMAGE points of damage", if the Viking is still alive
      //should return "NAME has died in act of combat", if the Viking dies
    receiveDamage (damage){
      this.damage = damage;
      this.health -= damage;
       

      if (this.health > 0) {
          return  `${this.name} has received ${this.damage} points of damage`
      }else if (this.health === 0) {
        return  `${this.name} has died in act of combat`
      }
    }

    battleCry (){
      return `Odin Owns You All!`
    }
  }
  
  // Saxon
  class Saxon extends Soldier{
      
    receiveDamage (damage){
      this.damage = damage;
      this.health -= damage;
      
      //should return "A Saxon has received DAMAGE points of damage", if the Saxon is still alive
      //should return "A Saxon has died in combat", if the Saxon dies

      if (this.health > 0) {
          return  `A Saxon has received ${this.damage} points of damage`
      }else if (this.health === 0) {
        return  `A Saxon has died in combat`
      }
    }

    
  }
  
  // War
  class War {

    constructor( ){
      this.vikingArmy= [];
      this.saxonArmy=[];
    }

// //should be a declared
// should receive 1 argument (a Viking object)
// should add the received Viking to the army
// shouldn't return anything

    addViking(viking){
      this.viking=viking;
      this.vikingArmy.push(viking);
    }

    // addSaxon() method
    // should be a declared
    // should receive 1 argument (a Saxon object)
    // should add the received Saxon to the army
    // shouldn't return anything

    addSaxon(saxon){
      this.saxon=saxon;
      this.saxonArmy.push(saxon);
    }
      
      //ArmiesAttack
      // vikingAttack() method
      // should be a declared
      // should receive 0 arguments
      // should make Saxon receiveDamage() equal to the strength of a Viking
      // should remove dead saxons from the army
      // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
    
    
    vikingAttack(){
      let iAleatorioSaxon = [Math.floor(Math.random()*this.saxonArmy.length)];
      let iAleatorioViking = [Math.floor(Math.random()*this.vikingArmy.length)];
      let saxon = this.saxonArmy [iAleatorioSaxon];
      let viking = this.vikingArmy[iAleatorioViking];

      let saxonDamage = saxon.receiveDamage(viking.strength);      
      if (saxon.health <= 0){
          this.saxonArmy.splice(iAleatorioSaxon,1);
      }

      return saxonDamage;

        }

      saxonAttack(){
        let iAleatorioViking = [Math.floor(Math.random()*this.vikingArmy.length)];
        let iAleatorioSaxon = [Math.floor(Math.random()*this.saxonArmy.length)];
        let viking = this.vikingArmy [iAleatorioViking];
        let saxon = this.saxonArmy [iAleatorioSaxon];

        let vikingDamage = viking.receiveDamage(saxon.strength);
        if (viking.health <= 0){
          this.vikingArmy.splice(iAleatorioViking,1);
        }

        return vikingDamage;

      }
    

      showStatus(){
        if (this.saxonArmy.length === 0){
          return `Vikings have won the war of the century!`;
        }
        else if (this.vikingArmy.length === 0){
          return  `Saxons have fought for their lives and survived another day...`;
        }
        else {
          return  `Vikings and Saxons are still in the thick of battle.`;
        }
      }

          //showStatus() method
          // should be a declared
          // should receive 0 arguments
          // should return "Vikings have won the war of the century!", if the Saxons array is empty
          // should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty
          // should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons


  }




  
  