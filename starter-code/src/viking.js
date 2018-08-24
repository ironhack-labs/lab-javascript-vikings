
class Soldier{
    constructor(health, strength){
      this.health = health;
      this.strength = strength;
    }
   
   
    attack(){
      return this.strength
    }
   
    receiveDamage(damage){
      this.health = this.health-damage
    }
   
   }
   
   class Viking extends Soldier{
   
    constructor(name,health,strength){
    super (health,strength)
      this.health = health;
      this.strength = strength;
      this.name = name;
    }
   
     receiveDamage(damage){
      this.health = this.health-damage
   
      if (viking.health > 0){
        return name + "has received " + damage + " points of damage"
      }
      if (viking.health === 0){
        return name + "has died in act of combat"
      }
    }
   
    attack(){
      return this.strength
    }
   
    battleCry() {
        return "Odin Owns You All"
    }
   }
   
    class Saxon extends Soldier{
      constructor(health, strength, Saxon){
      super (health, strength)
      this.health = health;
      this.strength = strength;
      this.Saxon = Saxon
    }
     attack(){
      return this.strength
    }
   
    receiveDamage (){
      this.health = this.health-damage
   
      if (saxon.health > 0){
        return saxon + "has received " + damage + " points of damage"
      }
      if (saxon.health === 0){
        return saxon + "has died in act of combat"
      }
    }
    }