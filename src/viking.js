// Soldier

class Soldier{
  constructor( health,strength ){
      this.health = health;
      this.strength =strength;
  }
  attack(){
  return this.strength
  }
  recieveDamage(damage){
    health -=1
    }
}

  
// Viking

class Viking extends Soldier{
  constructor(name,health,strength){
    this.name=name;
  }
  recieveDamage(damage){
    health=0
    if(viking.health>= 1){}
     return `${this.name} ha recibido $(strength) de daño`
    }return `${this.name} ha muerto en accion de combate`
  }
  battleCry(){
     return "Odin es dueño de todos"
      }
}




// Saxon
class Saxon extends Soldier{

  recieveDamage(damage){
    this.health -=1
    if(this.health >= 1 ){
      retur `Un sajon ha recibido ${strength} puntos de daño`
    }return `Un sajon ha muerto en combate`
  }
}
      



// War

class War {
  [{vikingArmy},{saxonArmy}]

  addViking()
  addSaxon()
  vikingAttack()
  saxonAtack()
  showStatus()
}