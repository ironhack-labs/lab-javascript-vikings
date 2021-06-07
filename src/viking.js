// Soldier
class Soldier {

constructor(health, strength){

this.health=health;  //SEMIKOLONS. NO COMMAS
this.strength=strength;

}

attack(){    //should receive 0 arguments!!!
return this.strength;

}
receiveDamage(damage){

  this.health-=damage;     //update variable when health encounters damage

}

}

////////////////////////////////////////////////////////////

// Viking
class Viking extends Soldier{

constructor(name, health, strength){
  super(health, strength);  //expects same amout of parameters as parent class' constructor
  ///////!!!!!!!!!!!!!!!!!
  this.name=name;
 

 




}


receiveDamage(damage){

//let newHealth= this.health-damage;   //assign variable?? ohne neues property zu machen
this.health-=damage; 

if(this.health>0){

return `${this.name} has received ${damage} points of damage`

}else{


  return `${this.name} has died in act of combat`
}
}

battleCry(){ //receives 0 arguments
return "Odin Owns You All!";
}

}

/////////////////////////////////////////////////////

// Saxon
class Saxon extends Soldier{


  receiveDamage(damage){

this.health-= damage; //assign variable??

if(this.health>0){

  return `A Saxon has received ${damage} points of damage`
 

} else {

  return `A Saxon has died in combat`

}
  }

}


/////////////////////////////////////////////////////////////////////





// War
class War {

constructor(){

this.vikingArmy=[];
this.saxonArmy=[];

}


  addViking(viking){   //"viking" groß oder klein geschrieben?
    this.vikingArmy.push(viking);

  }

  addSaxon(saxon){

this.saxonArmy.push(saxon);    //groß oder Kleinschreibung von Saxon??

  }


  vikingAttack(){ //receives 0 arguments


    //choose Saxon randomly
    //call receiveDamage()on her, with parameter damage=randomly chosen Viking
    //
    
let indexRandomSax= Math.floor(Math.random()*this.saxonArmy.length);

let randomSax = this.saxonArmy[indexRandomSax]
    /////OR: 

    //let randomSax = this.saxonArmy[Math.floor(Max.random()*this.saxonArmy.length)]; //random saxon

    
    let randomVik=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];      //random Vik!!









randomSax.receiveDamage(randomVik.strength); ///random saxon receiving damage

//remove dead saxons from army  //this.saxonArmy(deadSax)
//splice????for/forEach

//filter array and return array with alive saxons  NOPE



//SPLICE!!!!!

//if health>0, return the attacked sax from army by using splice. 


if(randomSax.health<=0){

  this.saxonArmy.splice(indexRandomSax,1);

}


//return statement must be at right place, otherwise function will be left to early..
return randomSax.receiveDamage(randomVik.strength);




//if(this.saxonArmy[i].health<=0){

  //this.saxonArmy.splice()
}




//return result of receiveDamage 


  


  saxonAttack(){

//same as above with different values 
  }



  //generic method



  showStatus(){
if(this.saxonArmy.length==0){

  return "Vikings have won the war of the century!";

} else if (this.vikingArmy.length==0){

  return "Saxons have fought for their lives and survived another day...";
} 

if (this.saxonArmy.length>=1 && this.vikingArmy.length>=1){

  return "Vikings and Saxons are still in the thick of battle.";
}
  }


}

//generic method 

hostileAttack(ownArmy, enemiesArmy){
  
  //random individual receiving damage of random enemy 
 this.ownarmy[Math.floor(Max.random()*this.ownArmy.length)].receiveDamage(this.enemiesArmy[Math.floor(Math.random()*this.enemiesArmy.length)].strength);  
 
 
 
//if health of random individual <0, return attacked individual from its ownarmy
if(this.ownarmy[Math.floor(Max.random()*this.Ownarmy.length)].health<0) {
  
  this.ownArmy.splice((Math.floor(Math.random()*this.ownArmy.length),1);
  
}

 //return generic result of attack
 return this.ownArmy[Math.floor(Math.random()*this.ownArmy.length)].receiveDamage(this.enemiesArmy[Math.floor(Math.random()*this.enemiesArmy.length)].strength);
 
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
