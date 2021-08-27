// Soldier
class Soldier {
  constructor(health, strength) {
    this.health=health;
    this.strength=strength;
  }
  attack(){
return this.strength
  }
  receiveDamage(damage){
    this.health-=damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength)
    this.name=name

  }
  receiveDamage(damage){
this.health-=damage;
if(this.health>0){
  return `${this.name} has received ${damage} points of damage`
} else if(this.health<=0){
return `${this.name} has died in act of combat`
}

  }
  battleCry(){
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage){
    this.health-=damage
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
    } else if(this.health<=0){
      return `A Saxon has died in combat`
    }
  }
 
}

// War
class War {
 

constructor(){
  this.vikingArmy=[];
  this.saxonArmy=[]
}
  
  addViking(vikingObj){
   
this.vikingArmy.push(vikingObj);

  }
  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);
    
  }
  vikingAttack(){
    // VARIABLES QUE ME VAN DAR UN NUMERO RANDOM ENTRE 0 Y LA LONGITUD DEL ARRAY
   let randomSaxon=Math.floor( (Math.random()* this.saxonArmy.length));
   let randomViking=Math.floor( (Math.random()* this.vikingArmy.length));
   //CREAMOS UNA VARIABLE NUEVA QUE VA SER IGUAL AL STRING QUE TE REGRESA DEL DANO RECIVIDO POR LOS VINKINGOS A UN SAXON
   let vivo=this.saxonArmy[randomSaxon].receiveDamage( this.vikingArmy[randomViking].strength);
  
   if(vivo=='A Saxon has died in combat'){
    this.saxonArmy.splice(randomSaxon,1)
   }
   return vivo;
   //DONDE VAMOS
  
  }
  saxonAttack(){
     // VARIABLES QUE ME VAN DAR UN NUMERO RANDOM ENTRE 0 Y LA LONGITUD DEL ARRAY
    let randomSaxon=Math.floor( (Math.random()* this.saxonArmy.length));
   let randomViking=Math.floor( (Math.random()* this.vikingArmy.length));
     //CREAMOS UNA VARIABLE NUEVA QUE VA SER IGUAL AL STRING QUE TE REGRESA DEL DANO RECIVIDO POR LOS SAXON A UN VIKINGO

    let vivo =this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
    //SOBRESCRIBIMOS EL ARRAY DE VIKINGOS, HACIENDO UN RECORRIDO DEL ARRAY ORIGINAL
    
  this.vikingArmy=this.vikingArmy.filter((obj)=>{
    //FILTRANNDO A LOS VIKINGOS QUE TIENEN LA VIDA MAYOR A 0
    if(obj.health>0){
      //SOBRE ESCRIBIMOS EL ARRAY DE vikingArmy
      return obj
    }
  })
    //REGGRESO EL STRING QUE SALE
    return vivo
  }
  showStatus(){
if(this.saxonArmy.length==0){
  return `Vikings have won the war of the century!`
} else if(this.vikingArmy.length==0){
  return `Saxons have fought for their lives and survived another day...`
} else{
  return `Vikings and Saxons are still in the thick of battle.`
}
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
