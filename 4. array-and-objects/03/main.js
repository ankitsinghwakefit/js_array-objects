var myPenguin = {
  name : "Greta", 
  origin : "Mr. Popper's Penguins",
  author : "Richard and Florence Atwater",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
  outfit : sports = {
  hat : "baseball cap",
  shirt : "Hawaiian shirt",
  pants : "cargo shorts",
  shoes : "flip-flops",
  },
}
var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

sports.accessory = "pocket watch";
console.log(sports.accessory);

sports.hat = "top hat";
console.log(sports.hat);

// delete sports.pants;
// console.log(myPenguin);
//      or
delete myPenguin.outfit.pants;
console.log(myPenguin);

for(cloth in myPenguin.outfit){
  console.log(myPenguin.outfit[cloth]);
}