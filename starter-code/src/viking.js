// Soldier
function Soldier(healthArg, strengthArg) {

    this.health=healthArg;
    this.strength=strengthArg;

    this.attack=function(){
     return this.strength;
    }
    
}

Soldier.prototype.receiveDamage= function(damageArg){
    this.health=this.health-damageArg;
   }

// Viking

function Viking(nameArg, healthArg, strengthArg) {

    this.name=nameArg;
    this.battleCry=function(){


      return "Odin Owns You All!";
    } 
    Soldier.call(this, healthArg, strengthArg);

}

//Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype=new Soldier();

//Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damageArg){


this.health=this.health-damageArg;


        if(this.health>0){

            return (this.name+' has received '+damageArg+' points of damage');

        }else if(this.health<=0){

            return this.name+' has died in act of combat';

        }

}


// Saxon
function Saxon(healthArg, strengthArg) {

    Soldier.call(this, healthArg, strengthArg);


}
Saxon.prototype=new Soldier();
Saxon.prototype.receiveDamage = function(damageArg){


    this.health=this.health-damageArg;
    
    
            if(this.health>0){
    
                return ('A Saxon has received '+damageArg+' points of damage');
    
            }else if(this.health<=0){
    
                return 'A Saxon has died in combat';
    
            }
    
    }
// War
function War() {

    this.vikingArmy=[];
    this.saxonArmy=[];

    this.addViking=function(vikingObj){
                        this.vikingArmy.push(vikingObj);
                    }

    this.addSaxon=function(saxonObj){
        this.saxonArmy.push(saxonObj);
    } 
    
    this.vikingAttack=function(){
            //randomSaxon=posicion random del 0 al saxonArmy.length-1
            //randomViking=posicion random del 0 al vikingArmy.length-1

            var maxSaxon=this.saxonArmy.length; //min lo incluye pero max no, por eso no hay que poner saxonArmy.length-1
            var maxViking=this.vikingArmy.length; 
            var min = 0;

            var randomSaxon=Math.floor(Math.random() * (maxSaxon - min) + min); ;
            var randomViking=Math.floor(Math.random() * (maxViking - min) + min); ;
            var life;

                life=this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

                if(life==='A Saxon has died in combat'){

                this.saxonArmy.splice(randomSaxon,1);

                }
      return life;
    }


    this.saxonAttack=function(){
                //randomSaxon=posicion random del 0 al saxonArmy.length-1
                //randomViking=posicion random del 0 al vikingArmy.length-1

                var maxSaxon=this.saxonArmy.length; //min lo incluye pero max no, por eso no hay que poner saxonArmy.length-1
                var maxViking=this.vikingArmy.length; 
                var min = 0;
                console.log('VATACCCCCKKS');

                var randomSaxon=Math.floor(Math.random() * (maxSaxon - min) + min); ;
                var randomViking=Math.floor(Math.random() * (maxViking - min) + min); ;
                var life;

                
                    life=this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

                    if(life.indexOf('has died in act of combat')!=-1){

                    this.vikingArmy.splice(randomViking,1);

                    }
        return life;
        }


     this.showStatus=function(){

       if(this.saxonArmy.length==0){

            return "Vikings have won the war of the century!";

       }else if(this.vikingArmy.length==0){

        return "Saxons have fought for their lives and survive another day...";
       }else if(this.saxonArmy.length!=0 && this.vikingArmy.length!=0){


        return "Vikings and Saxons are still in the thick of battle.";
       }

     }   
}


