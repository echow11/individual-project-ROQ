const classIndex = require(`./classes`);

//James Drink Tests
test("test if James can take a drink", ()=>{
    classIndex.drink.refill(classIndex.James.name, classIndex.James.favouriteDrink)
    expect(classIndex.drink.drink(classIndex.James.name,)).toBe("James is enjoying their favourite drink. Their favourite drink is Coke!")
}) 

test("test if James can refill the glass", ()=>{
    
    expect(classIndex.drink.refill(classIndex.James.name, classIndex.James.favouriteDrink)).toBe("The glass has been refilled for James!")
}) 

test("test if James can refill the glass again", ()=>{
    
    expect(classIndex.drink.refill(classIndex.James.name, classIndex.James.favouriteDrink)).toBe("The glass is already full!")
}) 


//James Food Tests
test("test if James can eat", ()=>{
    classIndex.plate.makeDish(classIndex.James.name, classIndex.James.favouriteFood)
    expect(classIndex.plate.eat(classIndex.James.name)).toBe("James is enjoying their favourite food. Their favourite food is Pizza!")
}) 

test("test if James make the dish", ()=>{
    expect(classIndex.plate.makeDish(classIndex.James.name, classIndex.James.favouriteFood)).toBe("The dish has been made for James!")
}) 

test("test if James make the dish again", ()=>{
    expect(classIndex.plate.makeDish(classIndex.James.name, classIndex.James.favouriteFood)).toBe("The plate is already full!")
}) 