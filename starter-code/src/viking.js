// Soldier
function Soldier (health,strength) {
  this.health=health;
  this.strength=strength;
  this.attack = function(){return this.strength;};
  this.receiveDamage = function(damage){console.log(health-damage);};
}
// Viking
function Viking (name,health,strength) {
  Soldier.call(this,health,strength);
  this.name=name;
  this.receiveDamage = function(damage){
    this.health-=damage;
    return this.health <=0 ? console.log(name+' has died in act of combat'):console.log(name+' has received '+damage+' points of damage');
  };
  this.battleCry= function(){
    console.log('Odin Owns You All!');
  }
}
// Saxon
function Saxon (health,strength) {
  Soldier.call(this,health,strength);
  this.receiveDamage = function(damage){
    this.health-=damage;
    return this.health <=0 ? console.log('A Saxon has died in act of combat'):console.log('A Saxon has received '+damage+' points of damage');
  }
}
// War
function War () {
  this.vikingArmy=[];
  this.saxonArmy=[];
  this.addViking= function(viking){ this.vikingArmy.push(viking);};

  this.addSaxon= function(saxon){ this.saxonArmy.push(saxon);};

  this.vikingAttack= function(){
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length )];
    var randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
    //randomSaxon.health -= randomViking.strength;
    randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) { this.saxonArmy.splice(randomSaxon,1);}
    //return (randomSaxon.health <= 0) ? this.saxonArmy.splice(randomSaxon,1) : ;
  };
  this.saxonAttack= function(){
    var randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length )];
    //randomViking.health -= randomSaxon.strength;
    randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) { this.vikingArmy.splice(randomViking,1);}
    //return randomViking.receiveDamage(randomSaxon.strength);
  };
  this.showStatus= function(){
    if (!(this.vikingArmy[0]))console.log('Saxons have fought for their lives and survive another day...');
    if (!(this.saxonArmy[0]))console.log('Vikings have won the war of the century!');
    if (this.vikingArmy[0]&&this.saxonArmy[0]) console.log('Vikings and Saxons are still in the thick of battle.');
  };

}
//Play

  var war= new War();
  var olaf = new Viking('Olaf',100, 10);
  var rollo = new Viking('Rollo',50, 8 );
  war.addViking(olaf);
  war.addViking(rollo);

  var saxonsNumbers = 5;
  for (var i = 0; i < saxonsNumbers ; i++) {
  var randomHealth = Math.round(Math.random()*15);
  var randomStrenght = Math.round(Math.random()*5);
  war.addSaxon(new Saxon(randomHealth,randomStrenght));
  }
  console.log('WAR IS COMING!');
  while (war.saxonArmy[0] && war.vikingArmy[0]) {
    war.vikingAttack();
    if (war.saxonArmy[0]) war.saxonAttack();
    war.showStatus();
  }
  console.log('Finally, the war ends!');
