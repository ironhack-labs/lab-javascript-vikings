// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
      
    }
    attack(){
      return this.strength;
      
    }
    receiveDamage(damage){
      this.health -= damage
    }
  }

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super (health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    super.receiveDamage(damage);
      let message;
      if (this.health > 0){
        message = `${this.name} has received ${damage} points of damage`
      }
      else {
        message = `${this.name} has died in act of combat`
      }
      return message
  }

  battleCry(){
      return ("Odin Owns You All!")
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
  super.receiveDamage(damage);
    let message;
    if (this.health > 0){
      message = `A Saxon has received ${damage} points of damage`;
    } else {
      message = "A Saxon has died in combat";
    }
  return message;
  }
}

// // War

// // class War extends Soldier, Viking, Saxon{
// class War extends Saxon{
//   constructor(){
//     let vikingArmy = [];
//     let saxonArmy = [];
//   }

// addViking(Viking) {
// vikingArmy.push(Viking);
// }
// addSaxon(Saxon){
//   saxonArmy.push(Saxon);
// }

// vikingAttack(){
//   let saxonRandom = Math.floor(Math.random() * saxonArmy.length)
//   let saxonNewHealth = saxonRandom.damage === Viking.strength
//   return saxonNewHealth
// //   should make a Saxon receiveDamage() equal to the strength of a Viking
// // should remove dead saxons from the army
// // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
// }
saxonAttack()
showStatus()

}
