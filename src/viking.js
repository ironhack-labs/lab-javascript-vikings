// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, length){
    super(health,length)
    this.name = name
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
    addViking(Viking){
      this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
      this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
      //Crear random Viking
      let randomViking = this.vikingArmy[Math.round(Math.random()* (this.vikingArmy.length-1))];
      //Crear random Saxon
      let randomSaxon = this.saxonArmy[Math.round(Math.random()* (this.saxonArmy.length-1))];
      //Saxon funcion receiveDamage(Strenght de Viking)
      let result = randomSaxon.receiveDamage(randomViking.strength);
      if (randomSaxon.health <= 0){
        //Eliminar al Saxon muerto del array (splice)
        this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
      }
      //Return del punto 3
      return result;
    }
    saxonAttack(){
      //Crear random Saxon
      let randomSaxon = this.saxonArmy[Math.round(Math.random()* (this.saxonArmy.length-1))];
      //Crear random Viking
      let randomViking = this.vikingArmy[Math.round(Math.random()* (this.vikingArmy.length-1))];
      //Viking funcion receiveDamage(Strenght de Saxon)
      let result = randomViking.receiveDamage(randomSaxon.strength);
      if (randomViking.health <= 0){
        //Eliminar al Viking muerto del array (splice)
        this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
      }
      //Return del punto 3
      return result;
    }
    showStatus(){
      if(!this.vikingArmy.length){
        return `Saxons have fought for their lives and survived another day...` 
      } else if (!this.saxonArmy.length){
        return `Vikings have won the war of the century!`
      } else {
        return `Vikings and Saxons are still in the thick of battle.`
      }
    }
    soldierAttack(soldier){
      //Crear random Viking
      let randomViking = this.vikingArmy[Math.round(Math.random()* (this.vikingArmy.length-1))];
      //Crear random Saxon
      let randomSaxon = this.saxonArmy[Math.round(Math.random()* (this.saxonArmy.length-1))];
      //Comprobar si es Viking
      if(soldier instanceof Viking){
        const battleresult = randomSaxon.receiveDamage(randomViking.strength)
        if (battleresult.includes("died")){
          this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
        //Resultado si no mueren
        return battleresult
        
      //Es saxon
      } else {
        const battleresult = randomViking.receiveDamage(randomSaxon.strength)
        if (battleresult.includes("died")){
          this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        //Resultado si no mueren
        return battleresult
      }
    }
}


