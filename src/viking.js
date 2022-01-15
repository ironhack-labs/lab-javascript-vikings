function getRandomElement(arr){
  return arr [ Math.floor( Math.random(  ) * arr.length) ]
}

function getRandomIndex(n){
  return Math.floor( Math.random() * n )
}

function remove( k, arr ){
  const n = arr.length
  for ( let i = k; i<n ; i++){
    arr[i] = arr[i+1]
  }
  const arr2 = []
  for ( let i = 0; i<n-1 ; i++){
    arr2[i] = arr[i]
  }
  return arr2
}

// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(dam){
    this.health -= dam
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }


  receiveDamage(dam){
    this.health -= dam
    return this.health > 0 ? `${this.name} has received ${dam} points of damage` : `${this.name} has died in act of combat`
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  // constructor(health, strength){
  //   super(health, strength)
  // }

  receiveDamage(dam){
    this.health -= dam
    return this.health > 0 ? `A Saxon has received ${dam} points of damage` : `A Saxon has died in combat`
  }  
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking( viking ){
    this.vikingArmy.push( viking )
  }

  addSaxon( saxon ){
    this.saxonArmy.push( saxon )
  }

  vikingAttack(){
    const randomIndex = getRandomIndex( this.saxonArmy.length )    
    const res = this.saxonArmy[ randomIndex ].receiveDamage( this.vikingArmy[0].strength )

    if ( this.saxonArmy[ randomIndex ].health <= 0 ){

      remove( randomIndex  , this.saxonArmy)
      this.saxonArmy.splice(-1,1)

      return res
    }
  }

  saxonAttack(){
    const randomIndex = getRandomIndex( this.vikingArmy.length )
    const res = this.vikingArmy[ randomIndex ].receiveDamage( this.saxonArmy[0].strength )

    if ( this.vikingArmy[ randomIndex ].health <= 0 ){

      remove( randomIndex  , this.vikingArmy)
      this.vikingArmy.splice(-1,1)
    }

    return res
  }

  showStatus(){
    if( this.saxonArmy.length === 0 ){
      return "Vikings have won the war of the century!"
    }
    if( this.vikingArmy.length === 0 ){
      return "Saxons have fought for their lives and survived another day..."
    }
    return "Vikings and Saxons are still in the thick of battle."
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
