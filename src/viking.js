// Soldier
class Soldier {
    
    constructor(health , strength ){
        this.health=health
        this.strength=strength}

        attack(){
            return this.strength
        }
        receiveDamage(damage){
            this.health-=damage 
        }
    }

    let SoldadoSajon = new Soldier(100,35)
    console.log(SoldadoSajon)
    
    console.log(SoldadoSajon.health)
    
// Viking
    class Viking extends Soldier{
    constructor (name, health , strength){        
    super(); 
        this.name=name
        this.health=health
        this.strength=strength
    }

    vikingoHerido(){
        if(vikingSoldier.health - damage > 0){
        return `${this.name} has received ${damage} points of damage`

        }if(vikingSoldier.health <=0){
            return `${this.name} has died in act of combat.`}
        }

    battleCry(){
        return "Odin Owns You All!"
    }
    }
  
     
    let vikingSoldier = new Viking("Ragnarok",120,45)
    console.log(vikingSoldier.health)
    console.log(vikingSoldier.battleCry())
    console.log(vikingSoldier)

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health-=damage
    }

    if(SoldadoSajon.health>0){
        return `A Saxon has received ${damage} points of damage`
    }
    if(){
        return `A Saxon has died in combat"`
    }

    }



// War
class War{
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    };
    
    addViking(Viking){
        this.vikingArmy++
    }
    
    addSaxon(saxon){
        saxon=1
    }
    vikingAttack(){
        
        SoldadoSajon.receiveDamage -= vikingSoldier.strength
    }
    saxonAttack(){

    }
    showStatus(){

    }
}

