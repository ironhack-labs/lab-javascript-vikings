// Soldier
function Soldier(health, strength) {

    // fonction Soldier recoit health et stregth comme parametres
        this.health=health;
        this.strength=strength;
    }
    
    
    Soldier.prototype.attack=function(){
    //definition de la fonction attack en mode prototype (hors de la fonction initiale Soldier) pour clarté
            return this.strength;
        }
    
    Soldier.prototype.receiveDamage=function(damage){
        //definition de la fonction damage en mode prototype (hors de la fonction initiale Soldier) pour clarté
            this.health = this.health-damage;
    
        }
    
    //Pour s'assurer que Viking hérite bien de Soldier
    Viking.prototype=Object.create(Soldier.prototype);
    Viking.prototype.constructor = Soldier;
    
    // Viking
    function Viking(name,health,strength) {
        //Viking hérite de Soldier + propriété name et méthode Battlecry
        Soldier.call(this, health, strength);
        this.name=name;
        
    }
    
    Viking.prototype.battleCry=function(){
            return ("Odin Owns You All!");
        }
    
    Viking.prototype.receiveDamage=function(damage){
            //réimplémentation de la fonction damage en mode prototype
    
            this.health = this.health-damage;
    
            //test si Viking est encore en vie
            if (this.health>0){
                return ( this.name+" has received "+damage+" points of damage");
            }
            else{
                return (this.name+" has died in act of combat");
            }
        }
    
    //Pour s'assurer que Saxon hérite bien de Soldier
    Saxon.prototype=Object.create(Soldier.prototype);
    Saxon.prototype.constructor = Soldier;
    // Saxon
    function Saxon(health, strength) {
        Soldier.call(this,health, strength);
    }
    
    Saxon.prototype.receiveDamage=function(damage){
    
        //réimplémentation de la fonction receiveDamage en mode prototype pour Saxon
    
            this.health = this.health-damage;
    
            //test si Viking est encore en vie
            if (this.health>0){
                return ( "A Saxon has received "+damage+" points of damage");
            }
            else{
                return ("A Saxon has died in combat");
            }
    
    }
    
    // War
    function War() {}