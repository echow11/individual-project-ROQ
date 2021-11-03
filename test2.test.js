const classIndexFred = require(`./classes`);

//Fred Drink Tests
describe('Fred Drink Tests', ()=>{
    test("test if Fred can take a drink and that his thirst is quenched", ()=>{
        classIndexFred.drink.refill(classIndexFred.Fred.name, classIndexFred.Fred.favouriteDrink);
        classIndexFred.drink.drink(classIndexFred.Fred.name);
        expect(classIndexFred.Fred.thirstQuenched()).toBe(false);
    });

    test("test if Fred can refill the glass and find out it's contents", ()=>{
        classIndexFred.drink.refill(classIndexFred.Fred.name, classIndexFred.Fred.favouriteDrink);
        expect(classIndexFred.drink.filledWith(classIndexFred.Fred.name)).toBe("This glass has been filled with Fanta, for Fred!");
    }); 

    test("test if Fred can wash the clean/occupied glass", ()=>{
        expect(classIndexFred.drink.washGlass()).toBe("The glass does not need to be currently washed");
    });
}); 

//Fred Food Tests
describe('Fred Food Tests', ()=>{
    test("test if Fred can eat and that his hunger is satisfied", ()=>{
        classIndexFred.plate.makeDish(classIndexFred.Fred.name, classIndexFred.Fred.favouriteFood);
        classIndexFred.plate.eat(classIndexFred.Fred.name);
        expect(classIndexFred.Fred.hungryStill()).toBe(false);
    });

    test("test if Fred can make the dish and find out it's contents", ()=>{
        classIndexFred.plate.makeDish(classIndexFred.Fred.name, classIndexFred.Fred.favouriteFood);
        expect(classIndexFred.plate.whichDishPrepped(classIndexFred.Fred.name)).toBe("This plate has been filled with Sushi. For Fred!");
    }); 

    test("test if Fred can wash a clean/occupied plate", ()=>{
        expect(classIndexFred.plate.washPlate()).toBe("The plate does not need to be currently washed");
    });
}); 