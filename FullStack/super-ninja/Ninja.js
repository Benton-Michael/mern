//  Create a Ninja class  
//  add an attribute: name  
//  add an attribute: health  
//  add a attribute: speed - give a default value of 3  
//  add a attribute: strength - give a default value of 3  
//  add a method: sayName() - This should log that Ninja's name to the console  
//  add a method: showStats() - This should show the Ninja's name, strength, speed, and health.  
//  add a method: drinkSake() - This should add +10 Health to the Ninja

class Ninja {
    constructor (name, health, speed = 3, strength = 3){
     // default attributes name, health, speed, stength
        this.name = name;
      this.health = health;
      this.speed = speed;
      this.strength = strength;
    }
  
    sayName(){
      console.log("Ninjas name is: " + this.name);
    }
  
    showStats(){
      console.log("Stats for: " + this.name);
      console.log("Health: " + this.health);
      console.log("Speed: " + this.speed);
      console.log("Strength: " + this.strength);
    }
  
    drinkSake(){
      this.health += 10;
      console.log(this.name + " just drank sake and his health is now: " + this.health);
    }
  }
  
  console.log("\n  Creating Giannis");
  const ninja1 = new Ninja("Giannis", 50);
  ninja1.sayName();
  ninja1.showStats();
  ninja1.drinkSake();
  // console.log(ninja1);
  
  console.log("\n  Creating Will");
  const ninja2 = new Ninja("Will", 20, 6, 2);
  ninja2.sayName();
  ninja2.showStats();
  ninja2.drinkSake();
  // console.log(ninja2);

  class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom()
    {
        const drink = super.drinkSake();
        drink;
        console.log("Wisdom: " + this.wisdom + ", 'What one programmer can do in one month, two programmers can do in two months.'")
        return this
    }

    showStatsW() {
        const stats = super.showStats();
        stats;
        console.log("Wisdom: " + this.wisdom);
        return this;
    }

  
}

// Example output: 
// Creating Will
// Ninjas name is: Will
// Stats for: Will
// Health: 20
// Speed: 6
// Strength: 2
// Will just drank sake and his health is now: 3