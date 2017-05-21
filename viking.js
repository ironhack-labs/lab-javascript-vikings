// Soldier

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
//Definimos los métodos dentro de la propia funct para no tener que utilizar prototype
  this.attack = function (){
    return this.strength;
  }
  this.receiveDamage = function (damage){
    this.health -= damage;
  }
}

/*
Soldier.prototype.attack = function (){
  return this.strength; //Poner "this", sino no utilizará la información anterior
}

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
  // "return 0;" -> Esto no hace falta, ya que no pide retorno
}
*/

// Viking

function Viking (name, health, strength){ //Aquí sí se pone "name" para indicarle el orden
  Soldier.call(this, health, strength); //No se pone "name" porque solo incluye los elementos que hereda de la funct anterior
  this.name = name;

  this.receiveDamage = function (damage){
    this.health = function (vikingDamage){
      if (Viking.health > 0){
        console.log(name + " has recived " + damage + "points of damage");
      } else {
        console.log(name + " has died in act of combat");
      }
    }
  }

  this.battleCry = function (){
    return "Odin Owns You All!";}
}

Viking.prototype = Object.create (Soldier.prototype); //Actúa como puente entre ambos constructos, por lo que es imprescindible incluirlo


/*
DUDA: Esto no es necesario escribirlo, y se ejecutaría igual, ¿no?
R: Sí, está bien así

Viking.prototype.attack = function (){
  return this.strength; //Poner "this", sino no utilizará la información anterior
}


Viking.prototype.receiveDamage = function (damage){
  this.health = function (vikingDamage){
    if (Viking.health > 0){
      console.log(name + " has recived " + damage + "points of damage");
    } else {
      console.log(name + " has died in act of combat");
    }
  }
}

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";}

Viking.prototype = Object.create (Soldier.prototype);
*/


// Saxon

function Saxon (health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function (damage){
    this.health = function (saxonDamage){
      if (Saxon.health > 0){
        console.log("A Saxon has recived " + damage + "points of damage");
      } else {
        console.log("A Saxon has died in combat");
      }
    }
  }
}


Saxon.prototype = Object.create (Soldier.prototype);


// War
function War () {

this.vikingArmy = []; //"var vikingArmy = [];" -> Si lo hago así no se relacionaría con la función, sino que sería una var. independiente. Por eso lo hacemos a través de "this"
this.saxonArmy = []; //"var saxonArmy = [];" -> Lo mismo

this.addViking = function (viking){
  this.vikingArmy.push(viking);
}

this.addSaxon = function (saxon){
  this.saxonArmy.push(saxon);
}

this.vikingAttack = function (){
  this.saxonArmy[0].receiveDamage(vikingArmy[0].strength) //llama al método receiveDamage, que utiliza una función, por eso va entre préntesis
  if (saxonArmy[0].health <= 0){
    this.saxonArmy.splice(0,1) //splice funciona con un índice; el lugar uno indica la posición y el dos el nº de elementos a eliminar.
  }
}

/*
War.prototype.vikingArmy = function(viking){
  this.vikingArmy.push(viking);
  }

Esto no tiene sentido -> this.vikingArmy.push(viking) = vikingArmy;
*/

this.saxonAttack = function (){
  this.vikingArmy[0].receiveDamage(saxonArmy[0].strength)
  if (vikingArmy[0].health <= 0){
    this.vikingArmy.splice(0,1)
  }
}

this.showStatus = function (){
  if (saxonArmy == 0){
    console.log("Vikings have won the war of the century!")
    } if else (vikingArmy == 0){
      console.log("Saxons have fought for their lives and survive another day...")
    } else {
      console.log("Vikings and Saxons are still in the thick of a battle.")
    }
  }
}
