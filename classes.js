class Person {
    constructor(name, favouriteFood, favouriteDrink, hungry, thirsty)
    {
        this.name = name;
        this.favouriteFood = favouriteFood;
        this.favouriteDrink = favouriteDrink;
        this.hungry = hungry;
        this.thirsty = thirsty;
    }
    thirstQuenched()
    {
        this.thirsty = false;
        return this.thirsty;
    }
    thirsty()
    {
        if(this.thirsty == true)
        {
            return `${this.name} really needs a drink!`;
        }
        else
        {
            return `${this.name} does not need a drink!`;
        }
    }
    hungryStill()
    {
        this.hungry = false;
        return this.hungry;
    }
    hungry()
    {
        if(this.hungry == true)
        {
            return `${this.name} really needs to eat`;
        }
        else
        {
            return `${this.name} does not need to eat as theyre already full!`;
        }
    }
}

class Drink{
    constructor(glass, whichDrink)
    {
        this.glass = glass;
        this.glassEmpty = true;
        this.whichDrink = whichDrink;
        this.glassClean = true;
    }
    drink(currentPerson){
        if(this.glassEmpty == false)
        {
            this.glassEmpty = true;
            this.glassClean = false;
            return `${currentPerson} is enjoying their favourite drink. Their favourite drink is ${this.whichDrink}!`;
        }
        else
        {
            return `The glass is empty, fill it for ${currentPerson} to enjoy!`;
        }
    }
    refill(currentPerson, currentPersonFavouriteDrink){
        if(this.glassEmpty == true)
        {
            this.glassEmpty = false;
            this.whichDrink = currentPersonFavouriteDrink;
            return `The glass has been refilled for ${currentPerson}!`;
        }
        else
        {
            return "The glass is already full!";
        }
    }
    filledWith(currentPerson)
    {
        if(this.glassEmpty == false)
        {
            return `This glass has been filled with ${this.whichDrink}, for ${currentPerson}!`;
        }
        else
        {
            return "This glass is not currently filled with anything.";
        }
    }
    washGlass()
    {
        if(this.glassClean == false && this.glassEmpty == true)
        {
            this.glassClean = true;
            return "The glass is now clean!";
        }
        else
        {
            return "The glass does not need to be currently washed";
        }
    }
}

class Food{
    constructor(plate, whichDish)
    {
        this.plate = plate;
        this.plateEmpty = true;
        this.whichDish = whichDish;
        this.plateClean = true;
    }
    eat(currentPerson)
    {
        if(this.plateEmpty == false)
        {
            this.plateEmpty = true;
            this.plateClean = false;
            return `${currentPerson} is enjoying their favourite food. Their favourite food is ${this.whichDish}!`;
        }
        else
        {
            return `The plate is empty, fill it for ${currentPerson} to enjoy!`;
        }
    }
    makeDish(currentPerson, currentPersonFavouriteDish)
    {
        if(this.plateEmpty == true)
        {
            this.plateEmpty = false;
            this.whichDish = currentPersonFavouriteDish;
            return `The dish has been made for ${currentPerson}!`;
        }
        else
        {
            return "The plate is already full!";
        }
    }
    whichDishPrepped(currentPerson)
    {
        if(this.plateEmpty == false)
        {
            return `This plate has been filled with ${this.whichDish}. For ${currentPerson}!`;
        }
        else
        {
            return "This plate is not currently filled with anything.";
        }
    }
    washPlate()
    {
        if(this.plateClean == false && this.plateEmpty == true)
        {
            this.plateClean = true;
            return "The plate is now clean!";
        }
        else
        {
            return "The plate does not need to be currently washed";
        }
    }
}

const James = new Person("James", "Pizza", "Coke", true, true);
const Fred = new Person("Fred", "Sushi", "Fanta", true, true );
const Sophie = new Person("Sophie", "Salt & Pepper Chips", "Dr.Pepper", true, true);
const plate = new Food("Plate");
const drink = new Drink("Glass");


module.exports = {
    Person,
    James,
    Fred,
    Sophie,
    Drink,
    drink,
    Food,
    plate
}