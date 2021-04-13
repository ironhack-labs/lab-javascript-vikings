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
    this.health -=damage
    }
}

  
// Viking

class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength)
    this.name=name;
  }
  recieveDamage(damage){
    const newHealth =this.health -damage
    if(newhealth>= 0){
      this.health=newhealth
      return `${this.name} ha recibido $(damage) de daño`
    }else{
    return `${this.name} ha muerto en accion de combate`
    }
  }
  battleCry(){
     return "Odin es dueño de todos"
      }
}




// Saxon
class Saxon extends Soldier{

  recieveDamage(damage){
    const newhealth =this.health - damage
    if(newhealth >= 0 ){
      this.health=newhealth
      retur `Un sajon ha recibido ${damage} puntos de daño`
    }else {
      return `Un sajon ha muerto en combate`
  }
}
      



// War

class War {
  this.Viking
  this.Saxon

  addViking()

  addSaxon()

  vikingAttack()

  saxonAtack()
  
  showStatus()
}