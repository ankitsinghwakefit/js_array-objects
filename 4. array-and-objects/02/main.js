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
    name : "Greta", 
    origin : "Mr. Popper's Penguins",
    author : "Richard and Florence Atwater",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
}
penguins.push(myPenguin);

console.log(penguinsArray.length);

// gunter.canFly=true;
//     or
penguinsArray[0].canFly = true;

console.log(penguinsArray[0]);

console.log(penguinsArray[0].sayHello());

for(var keys in penguinsArray){
  console.log(penguinsArray[keys].name);
}

for(var keys in penguinsArray){
  console.log(penguinsArray[keys].sayHello);
}

for(var keys in penguinsArray){
  penguinsArray[keys].numberOfFeet = 2;
}
for(var keys in penguinsArray){
  console.log(penguinsArray[keys].numberOfFeet);
}
// var fly = (penguinsArray[keys].canFly) ? (`${penguinsArray[keys].name});

// for(var keys in penguinsArray){
//   console.log(${penguinsArray[keys].canFly});
// }

for(var i = 0; i<penguinsArray.length; i++){
  if(penguinsArray[i].canFly==true){
    console.log(`${penguinsArray[i].name} can fly`);
  // } else {
  //   console.log(`${penguinsArray[i].name} can not fly`);
  // }
  }
}
