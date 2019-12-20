var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };
  
  var penguinsArray = [gunter, ramon, fred ];

  var penguins = penguinsArray;

  console.log(penguinsArray[0]);

  var secondPenguin = penguinsArray[1];

  console.log(penguins[2]);

  var myPenguin = {
    character : "Greta", 
    origin : "Mr. Popper's Penguins",
    author : "Richard and Florence Atwater",
}
penguins[3] = myPenguin;

console.log(penguinsArray.length);


