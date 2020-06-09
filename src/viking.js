// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health-=damage
        if (this.health >0 ) {
          return  `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(Viking){
       this.vikingArmy.push(Viking) 
    }
    addSaxon(Saxon){
       this.saxonArmy.push(Saxon)
    }
   
    attack (hitter, hitTaker) {
        let hitterIndex = Math.floor(Math.random()*hitter.length)
        let hitTakerIndex = Math.floor(Math.random()*hitTaker.length)
        let result = hitTaker[hitTakerIndex].receiveDamage(hitter[hitterIndex].attack())
        if (hitTaker[hitTakerIndex].health<=0) hitTaker.splice(hitTakerIndex,1);       
        return result
        }
    // vikingAttack(){
    //     let saxonIndex=Math.floor(Math.random()*this.saxonArmy.length);
    //     let vikingIndex=Math.floor(Math.random()*this.vikingArmy.length);     
    //     let result=this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].attack());
    //     if (this.saxonArmy[saxonIndex].health<=0) this.saxonArmy.splice(saxonIndex,1);
    //     return result;
    //   }  
    vikingAttack () {
        return this.attack (this.vikingArmy, this.saxonArmy)
    }
    //   saxonAttack(){
    //     let saxonIndex=Math.floor(Math.random()*this.saxonArmy.length);
    //     let vikingIndex=Math.floor(Math.random()*this.vikingArmy.length);
    //     let result=this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].attack());
    //     if (this.vikingArmy[vikingIndex].health<=0) this.vikingArmy.splice(vikingIndex,1);
    //     return result;
    //   }
    saxonAttack () {
        return this.attack (this.saxonArmy, this.vikingArmy)
    }
      showStatus(){
        if (this.saxonArmy.length===0) return "Vikings have won the war of the century!"
        if (this.vikingArmy.length===0) return "Saxons have fought for their lives and survived another day..."
        return "Vikings and Saxons are still in the thick of battle."
      } 
}