// question 1
var day = "Monday";

// question 2
var person = {
    name: "Vika",
    sex: "female"
};

// question  3
var outOfStock = true;
if (outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

//question 4
var numbers = [0, 1, 2, 3, 4];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// question 5
for (var i = 15; i <= 25; i++) {
    console.log(i);
}

// question 6
for (var i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
}

// question 7
var predators = [
    {
        type: "Tiger",
        averageAge: 15,
        meatEater: true
    },
    {
        type: "Lion",
        averageAge: 14,
        meatEater: true
    }
];
for (var i = 0; i < predators.length; i++) {
    console.log(predators[i].averageAge);
    console.log(predators[i].meatEater);
}

// question 8
function whatIDontLike(weather) {
    console.log("I don't like " + weather);
}
whatIDontLike("rain");

// question 9
function subtract(number1, number2) {
    var answer = number1 - number2;
    console.log(answer);
}
subtract(3, 5);

// question 10
var animalArray = [];
function addAnimals(animals) {
    animalArray.push(animals);
}
addAnimals("Pig");







