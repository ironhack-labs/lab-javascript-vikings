class Soldier{
    constructor(health,strength){
        this.health=health
        this.strength=strength
    }
    attack(){
        return this.strength;
    }
    
    receiveDamage(damage){
      this.health -= damage;
      
    }
    }
    class Viking extends Soldier{
        constructor(name,health,strength){
          super(health,strength),
          this.name=name;
        }
        receiveDamage(damage){
      this.health -= damage;
      if (this.health>0){
        console.log(this.name + " has received " + damage + " points of damage")
      } else{
        console.log(this.name + " has died in act of combat");
      }
        }
    
        battleCry(){
          return"Odin owns you all";
        }
    
      
      
    }
    
    class Saxon extends Soldier{
      constructor(health, strength){
        super (health, strength)
      }
     receiveDamage(damage){
      this.health -= damage;
      if (this.health>0){
        console.log("a saxon has received " + damage + " points of damage");
      } else{
        console.log( "a saxon has died in act of combat");
      }
        
    }
    }
    
    
    
    
      
    
    
    
    
    let s1=new Viking("bob",100,50);
    let s2=new Saxon(100,20);
    console.log(s1);
    s2.receiveDamage(s1.attack());
    s2;
    
    