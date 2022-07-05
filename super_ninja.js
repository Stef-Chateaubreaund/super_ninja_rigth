class ninja {
    constructor(name,health){
        this.name = name;
        this.health=health;
        this.speed = 3;
        this.strength=3;
}
sayName(){
    console.log("${this.name}");
}

showStats(){
    console.log(`${this.name},${this.health},${this.speed},${this.strength}`)
}

drinkSake(){
    this.health += 10;
}
}
class Sensei extends ninja{
    constructor(name){
        super(name);
        this.name = name;
        this.health=50;
        this.strength=10;
        this.speed = 10;
        this.wisdom=10;
}
speakWisdom(){
    super.drinkSake();
    console.log("YAY")
}
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


