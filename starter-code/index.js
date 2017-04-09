function Soldier(health, strength) {
  this.health = 100;
  this.strength = strength;
  this.attack = attack;
  this.receiveDamage = 0;
  this.soldierAttack = function(){
      this.strength = 0;
     console.log(Soldier);
  }
  this.soldierReceiveDamage= function(){
  this.health -= this.receiveDamage;
  return this.health;
  }
}
/*Soldier.prototype.attack = function(){
  this.strength = 0;
 console.log(Soldier);
}

Soldier.prototype.receiveDamage= function(){
  this.health -= this.receiveDamage;
}
*/

//*********************** VIKING **************************

function Viking(name, health, strength, attack, receiveDamage){
  Soldier.call(this, health, strength, attack, receiveDamage);
  this.name = name;
  this.battleCry = "Odin Owns You All!" ;
  this.strength = 25;
  this.attack = 25;
  this.vikingBattleCry = function(){
  console.log('Odin Owes You All!')
  }
  this.vikingReceiveDamage = function(){
  console.log(this.name +' has received ' + this.receiveDamage + ' points of damage.')
  }
  this.vikingDeath = function(){
    if (this.health<=0){
    console.log(this.name + ' has died in an act of combat.')
    }
  }
}
/*Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.battleCry = function(){
  console.log('Odin Owes You All!')
}
Viking.prototype.receiveDamage = function(){
  console.log(this.name +' has received ' + this.receiveDamage + ' points of damage.')
}
Viking.prototype.death = function(){
  if (this.health<=0){
    console.log(this.name + ' has died in an act of combat.')
  }

*/
//************************ SAXONS ************************

function Saxon(health, strength, attack, receiveDamage){
  Soldier.call(this, health,strength, attack, receiveDamage);
  this.strength = 15;
  this.attack = 15;
  this.saxonReceiveDamage = function(){
    console.log('A Saxon has received ' + this.receiveDamage + ' points of damage.')
  }
  this.saxonDeath= function(){
     if (this.health<=0){
    console.log('A Saxon has died in an act of combat.')
    }
  }
}

/*
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(){
  console.log('A Saxon has received ' + this.receiveDamage + ' points of damage.')
}

Saxon.prototype.death= function(){
  if (this.health<=0){
    console.log('A Saxon has died in an act of combat.')
  }
}
*/
//************************************ WAR ******************

function War(Viking, Saxon){
  this.Viking = Viking;
  this.Saxon = Saxon;
  this.saxonAttack = function(){
  Viking.receiveDamage = Saxon.attack;

   console.log(Viking);
   console.log(Saxon);
  }
  this.vikingAttack = function(){
  Saxon.receiveDamage = Viking.attack;

    console.log(Viking);
    console.log(Saxon);
  }
}
/*
War.prototype.saxonAttack = function(){
  Viking.receiveDamage = Saxon.attack;

 console.log(Viking);
 console.log(Saxon);
}

War.prototype.vikingAttack = function(){
  Saxon.receiveDamage = Viking.attack;

  console.log(Viking);
  console.log(Saxon);
}

*/

//***********************************************************
