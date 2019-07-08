// Soldier
class Soldier  {
        constructor (healthArg , strengthArg) {
            this._healthArg = healthArg
            this._strenghtArg = healthArg
        }
}
{
    attack(this._strength= 'strengthArg') {
        console.log('El soldado ha atacado con fuerza', strengthArg.length)
}
{
    receiveDamage(damage){
        this._healthArg - damage
}

// Viking
class Viking extends Soldier{        
        constructor(name, healthArg , strengthArg, damage, alive) {
            super(healthArg , strengthArg)                
            this._damage = healthArg - damage
            this._alive = (healthArg > 0)
            this._name = name
    }
    attack(this._strength= 'strengthArg') {
        console.log('El vikingo', this._name, 'ha atacado con fuerza', strengthArg.length)}
    
    function receiveDamage(alive){if (this._alive){
        console.log(this._name, 'has received', this._damage, 'points of damage'}
        else {console.log(this._name, 'has died in act of combat')}
    
newhealthArg(this._healthArg) {
            this._healthArg - this._damage
} 
    function battleCry(){
        console.log('Odin Owns You All!')
    }
        
    // Saxon
class Saxon extends Soldier{        
    constructor(healthArg , strengthArg, damage, alive) {
        super(healthArg , strengthArg, damage, alive)                
}
    attack(this._strength= 'strengthArg') {
    console.log('El sajón ha atacado con fuerza', strengthArg.length)}
    
    function receiveDamage(alive){if (this._alive){
        console.log('Saxon has received', this._damage, 'points of damage'}
        else { 
            console.log('Saxon has died in act of combat')}
            }
newhealthArg2(this._healthArg) {
    this._healthArg - this._damage
}        

// War
class War {}
